
class AppMenu extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                nav {
                    background: #4a148c;
                    display: flex;
                    gap: 1em;
                    padding: 1em;
                    justify-content: center;
                }
                a {
                    color: #fff;
                    text-decoration: none;
                    cursor: pointer;
                    font-weight: bold;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
            <nav>
                <a href="#" data-target="social-profile">Perfil</a>
                <a href="#" data-target="custom-table">Usuarios</a>
                <a href="#" data-target="app-gallery">Galería</a>
            </nav>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = link.getAttribute('data-target');
                this.switchPage(target);
            });
        });
    }

    switchPage(target) {
        const pages = document.querySelectorAll('[slot="page"]');
        pages.forEach(p => p.style.display = 'none');
        const pageToShow = document.querySelector(target);
        if(pageToShow) {
            pageToShow.style.display = 'block';
        }
    }
}
customElements.define('app-menu', AppMenu);
