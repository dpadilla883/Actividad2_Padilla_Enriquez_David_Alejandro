
class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                header {
                    background: #6200ea;
                    color: #fff;
                    padding: 1em;
                    text-align: center;
                }
                h1 {
                    margin: 0;
                    font-size: 1.5em;
                }
            </style>
            <header>
                <h1>Mi Aplicación con Web Components</h1>
            </header>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('app-header', AppHeader);
