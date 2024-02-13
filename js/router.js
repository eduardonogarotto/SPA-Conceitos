export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

/* Prevenir que eventos recarreguem a página */
  route(event) {
    event = event || window.event
    event.preventDefault();

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    /* Desestruturando o objeto location para pegar a propriedade pathname e atribuir o valor a uma constante*/
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector("#app").innerHTML = html
    })        
  }
}