
# Parcial 1 Desarrollo de aplicaciones web

Juan Diego Sánchez - 202214625

Para este parcial se crearon carpetas dentro de la carpeta src así:

api: Para manejar el llamado al api generado en mockaroo, las cuales según el uso pueden enviar fallos. Las apis generadas fueron:

- https://my.api.mockaroo.com/cart.json?key=19321ce0 
- https://my.api.mockaroo.com/stores.json?key=19321ce0
- https://my.api.mockaroo.com/menu.json?key=19321ce0

locales: Aquí se encuentran todo lo relacionado con  la internalización, particularmente 2 archivos (en.json y es.json) con los datos estáticos de la aplicación. En este item se dejó en el archivo index.js la posibilidad de cambiar el lenguaje de toda la aplicación.

pages: Aquí se crearon archivos realcionados con las 3 partes del parcial, un archivo para manejar el login (login.js), otro para el home (home.js) y otro para los detail de cada opción (detail.js). De esta forma, adicionalmente se encuentran los archivos .css e algunas imágenes que no fueron llamadas directamente desde internet para ahorrar tiempo utilizados para ser lo más cercano al mockup presentado. 

El routing se manejó desde el archivo App.js a 4 rutas, 
- "/" que dirige al login
- "/home"
- "/menu"
- "/store"
- "/cart"

Adicionalmente, se utilizaron componentes de bootstrap, como lo son Form, Button, Figure, Carousel, Card, Image y Card, estos últimos 4 solo se usaron en el detail debido a que se necesitaba crear un carousel con más de 1 solo estado como el mostrado en la imágen. No se usaron muchos otros componentes además de los del routing e internalización.

Para ejecutar la aplicación se deben seguir los siguientes comandos:

### `npm install`

### `npm start`
