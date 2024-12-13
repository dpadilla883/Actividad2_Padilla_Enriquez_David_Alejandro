
class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                footer {
                    background: #333;
                    color: #fff;
                    text-align: center;
                    padding: 0.5em;
                    font-size: 0.9em;
                    position: fixed;
                    width: 100%;
                    bottom: 0;
                }
            </style>
            <footer>
                &copy; 2024 MiAplicacionWeb. Todos los derechos reservados.
            </footer>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('app-footer', AppFooter);
