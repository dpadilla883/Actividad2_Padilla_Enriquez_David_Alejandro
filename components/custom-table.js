
class CustomTable extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                h2 {
                    text-align: center;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 1em;
                }
                th, td {
                    border: 1px solid #ccc;
                    padding: 0.5em;
                    text-align: left;
                }
                th {
                    background: #e1bee7;
                }
            </style>
            <h2>Lista de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                </tbody>
            </table>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        if (!this.hasAttribute('loaded')) {
            this.fetchData();
            this.setAttribute('loaded', 'true');
        }
    }

    async fetchData(){
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            const tbody = this.shadowRoot.querySelector('#table-body');
            tbody.innerHTML = data.map(user => `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                </tr>
            `).join('');
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
}
customElements.define('custom-table', CustomTable);
