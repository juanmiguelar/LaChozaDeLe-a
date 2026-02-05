// Fix: Add missing import for defineNuxtConfig to resolve 'Cannot find name' error.
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Activa el renderizado del lado del servidor (SSR) para un SEO óptimo
  ssr: true,

  // Módulos para funcionalidades extra
  modules: [
    '@nuxtjs/tailwindcss', // Para estilos con Tailwind CSS
    '@nuxtjs/sitemap',     // Genera sitemap.xml automáticamente
    '@nuxtjs/robots',      // Genera robots.txt automáticamente
    '@nuxt/image',         // Optimización de imágenes
  ],

  // Configuración global de la aplicación
  app: {
    head: {
      htmlAttrs: {
        lang: 'es', // Define el idioma del sitio
      },
      title: 'La Choza de Leña | Restaurante en San Rafael Abajo, Desamparados',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap', rel: 'stylesheet' },
        { href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Round', rel: 'stylesheet' }
      ],
      // Estilos en línea para evitar FOUC y configurar el scroll
      style: [
        { innerHTML: 'html { scroll-behavior: smooth; }' }
      ]
    }
  },

  // Configuración del módulo de sitemap
  site: {
    url: 'https://lachozadelena.example.com', // Reemplazar con tu dominio real
  },

  // Configuración de Tailwind CSS
  tailwindcss: {
    config: {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            primary: "#d97706",
            "background-light": "#f5f5f4",
            "background-dark": "#0c0a09",
            "surface-light": "#ffffff",
            "surface-dark": "#1c1917",
            "text-main-light": "#1c1917",
            "text-main-dark": "#f5f5f4",
            "text-muted-light": "#57534e",
            "text-muted-dark": "#a8a29e",
          },
          fontFamily: {
            display: ["Playfair Display", "serif"],
            body: ["Lato", "sans-serif"],
          },
          borderRadius: {
            DEFAULT: "0.5rem",
            'xl': "1rem",
            '2xl': "1.5rem",
          },
        },
      },
    }
  },

  // Habilita las herramientas de desarrollo de Vue
  devtools: { enabled: true },

  // Migrated from vite.config.ts
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
  runtimeConfig: {
    public: {
      geminiApiKey: process.env.GEMINI_API_KEY
    }
  }
})
