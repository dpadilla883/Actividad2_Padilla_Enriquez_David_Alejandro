
class AppMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 1em;
                    min-height: 80vh;
                    margin-bottom: 3em;
                }
            </style>
            <slot name="page"></slot>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('app-main', AppMain);
