
class AppGallery extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                h2 {
                    text-align: center;
                }
                .gallery {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1em;
                    justify-content: center;
                    margin-top: 1em;
                }
                .item {
                    border: 1px solid #ccc;
                    padding: 1em;
                    text-align: center;
                    width: 100px;
                }
                img {
                    width: 80px;
                    height: 80px;
                }
                .name {
                    font-weight: bold;
                    margin-top: 0.5em;
                }
            </style>
            <h2>Galería de Pokémon</h2>
            <div class="gallery" id="gallery"></div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        if(!this.hasAttribute('loaded')){
            this.loadPokemons();
            this.setAttribute('loaded','true');
        }
    }

    async loadPokemons(){
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');
            const data = await res.json();
            const gallery = this.shadowRoot.querySelector('#gallery');
            for (const pokemon of data.results) {
                const pokeRes = await fetch(pokemon.url);
                const pokeData = await pokeRes.json();
                const item = document.createElement('div');
                item.classList.add('item');
                item.innerHTML = `
                    <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
                    <div class="name">${pokeData.name}</div>
                `;
                gallery.appendChild(item);
            }
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        }
    }
}
customElements.define('app-gallery', AppGallery);
