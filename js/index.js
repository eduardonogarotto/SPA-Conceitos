      import { Router } from "./router.js"
      
      const router = new Router()

      router.add("/", "/pages/home.html")
      router.add("/about", "/pages/about.html")
      router.add("/contact", "/pages/contact.html")
      router.add(404, "/pages/404.html")

      /* Executa a função handle assim que carregar o script para pegar a rota da página Home e executa-la quando abrir a página */
      router.handle()

      /* Corrigi problema de navegação quando o usuário volta a página pelo botão Retroceder do browser */
      window.onpopstate = () => router.handle()