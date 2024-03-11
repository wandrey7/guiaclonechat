import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Guia",
  description: "Um guia completo de utilização do clone chat",
  base: "/guiaclonechat/",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lang: "pt-BR",
  themeConfig: {
    logo: "/telegram_logo.png",
    search: {
      provider: "local",
    },
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Principal",
        items: [
          { text: "Instalação", link: "/pages/instalacao" },
          {
            text: "Configurando ambiente",
            link: "/pages/configurando_ambiente",
          },
          { text: "Modo de usar", link: "/pages/modo_de_usar" },
          { text: "Perguntas frequentes", link: "/pages/perguntas_frequentes" },
          { text: "Erros e suas resoluções", link: "/pages/error_resolucoes" },
          { text: "Contribuições", link: "/pages/contribuicoes" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/wandrey7/guiaclonechat" },
    ],
    footer: {
      message: "By Wandrey🏝️",
    },
    docFooter: {
      prev: false,
      next: false,
    },
  },
});