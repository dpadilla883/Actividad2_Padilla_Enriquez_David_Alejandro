# Nombre: David Padilla
# NRC:1406

# Aplicación con Web Components

Este proyecto es una aplicación web modular construida con Custom Elements (Web Components), utilizando Shadow DOM, templates, slots, y carga de datos desde APIs externas.

## Estructura del Proyecto

- `index.html`: Archivo principal que integra todos los componentes.
- `components/`: Carpeta que contiene la lógica de cada componente:
  - `app-header.js`
  - `app-footer.js`
  - `app-main.js`
  - `app-menu.js`
  - `social-profile.js`
  - `custom-table.js`
  - `app-gallery.js`

## Componentes

### `<app-header>`
Muestra el encabezado de la página.  
Utiliza Shadow DOM para encapsular su estilo.

### `<app-footer>`
Muestra el pie de página con información de copyright.

### `<app-main>`
Contenedor principal que utiliza `slot` para renderizar el contenido dinámico de las diferentes secciones.

### `<app-menu>`
Menú de navegación que permite cambiar entre las diferentes páginas (perfil, tabla, galería).

### `<social-profile>`
Muestra una página de perfil estático de un usuario.

### `<custom-table>`
Tabla personalizada que carga datos desde la API:  
`https://jsonplaceholder.typicode.com/users`

### `<app-gallery>`
Galería de imágenes que carga datos desde la PokeAPI:  
`https://pokeapi.co/`



