
class SocialProfile extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .profile {
                    border: 1px solid #ccc;
                    padding: 1em;
                    max-width: 300px;
                    margin: 0 auto;
                    text-align: center;
                }
                img {
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                }
                h2 {
                    margin: 0.5em 0 0.2em;
                }
                p {
                    margin: 0.2em 0;
                    color: #555;
                }
            </style>
            <div class="profile">
                <img src="https://i.ibb.co/pKw60tN/Whats-App-Image-2024-12-12-at-4-07-34-PM.jpg" alt="Profile Picture" />
                <h2>David Padilla</h2>

                <p>Estudiante de Ingeniería en Tecnologías de la Información - ESPE</p>
                <p>Quito, EC</p>
                <p>Contacto: dapadilla6@espe.edu.ec</p>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('social-profile', SocialProfile);
