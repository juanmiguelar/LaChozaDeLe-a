<template>
  <div>
    <Hero />
    <div class="max-w-md mx-auto px-4 pb-24 -mt-6 relative z-10">
      <InfoBar />
      <div class="bg-stone-800 dark:bg-stone-800 p-3 rounded-lg mb-8 flex items-start gap-3 border-l-4 border-primary">
        <span class="material-icons-round text-primary mt-0.5">takeout_dining</span>
        <p class="text-xs text-stone-300 leading-relaxed">
            Todo producto para llevar tiene un costo adicional de <span class="font-bold text-white">₡500</span> por empaque.
        </p>
      </div>
      <Menu id="menu" />
      <VisitUs />
    </div>
  </div>
</template>

<script setup lang="ts">
const siteUrl = 'https://lachozadelena.example.com'; // Reemplazar con tu dominio real
const imageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmBC3gykT4r3U-P5UJHuTrZ-33BSzOXQ0Gg7reRvCfX0S873v2vww4BvLV1eRl_arLywU_UtoFtUR4VclvLMflxT4ChgI9Divi7DfKZNCYRXv-DKd74ZXLrhow1ZimKFhNQBlxFlKZmDerDixYlsdjPqSgjSMb3Vv3GIvWgOwsDnoEhgcIOW7rR-fc3qw-z-yBpEXkS0Dz3HbkFtDC-TwaZinTmlhIQW6ofj0vhDh7HcuKs1N7To7YAqJR5zBoOaYitwwEWQhEboEO'; // URL de la imagen principal

// --- SEO METADATA ---
useSeoMeta({
  title: 'La Choza de Leña | Restaurante en San Rafael Abajo, Desamparados',
  description: 'Restaurante de carnes a la parrilla en San Rafael Abajo, Desamparados. Chifrijos, costillas, tomahawk, casados y comida típica costarricense. Pedidos al 2275-1001.',
  ogTitle: 'La Choza de Leña – Restaurante y Parrilla en San Rafael Abajo',
  ogDescription: 'Carnes premium a la parrilla, chifrijos legendarios y comida típica en San Rafael Abajo de Desamparados, San José. ¡Visitanos o pedí para llevar!',
  ogImage: imageUrl,
  ogUrl: siteUrl,
  ogType: 'restaurant',
  ogLocale: 'es_CR',
  ogSiteName: 'La Choza de Leña',
  twitterCard: 'summary_large_image',
  twitterTitle: 'La Choza de Leña | Restaurante en San Rafael Abajo',
  twitterDescription: 'El mejor sabor a leña de San Rafael Abajo. Carnes a la parrilla, chifrijos y comida típica costarricense.',
  twitterImage: imageUrl,
});

// --- JSON-LD SCHEMA.ORG FOR RICH RESULTS ---
useHead({
  meta: [
    { name: 'geo.region', content: 'CR-SJ' },
    { name: 'geo.placename', content: 'San Rafael Abajo, Desamparados' },
    { name: 'geo.position', content: '9.8997;-84.0623' },
    { name: 'ICBM', content: '9.8997, -84.0623' },
    { name: 'keywords', content: 'restaurante San Rafael Abajo, restaurante Desamparados, carnes a la parrilla San José, chifrijo Costa Rica, comida típica costarricense, parrilla San Rafael Abajo, La Choza de Leña, restaurante familiar Desamparados, costillas BBQ Costa Rica, casados costarricenses' },
  ],
  link: [
    { rel: 'canonical', href: siteUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        '@id': siteUrl,
        name: 'La Choza de Leña',
        alternateName: 'La Choza de Lena',
        description: 'Restaurante de carnes a la parrilla y comida típica costarricense en San Rafael Abajo de Desamparados, San José, Costa Rica.',
        image: imageUrl,
        url: siteUrl,
        telephone: '+506-2275-1001',
        email: 'lachoza33@gmail.com',
        servesCuisine: ['Parrilla', 'Steakhouse', 'Comida Típica Costarricense', 'Comida Costarricense'],
        priceRange: '₡₡',
        currenciesAccepted: 'CRC',
        paymentAccepted: 'Efectivo, Sinpe Móvil',
        acceptsReservations: true,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'San Rafael Abajo',
          addressLocality: 'Desamparados',
          addressRegion: 'San José',
          postalCode: '10301',
          addressCountry: 'CR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 9.8997,
          longitude: -84.0623
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 9.8997,
            longitude: -84.0623
          },
          geoRadius: '10000'
        },
        hasMap: 'https://maps.app.goo.gl/CEMFbdx8yG1RFgEt8',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '11:00',
            closes: '22:00'
          }
        ],
        sameAs: [
          'https://www.facebook.com/lachozade.lena/',
          'https://instagram.com/lachoza_33'
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          bestRating: '5',
          ratingCount: '150',
          reviewCount: '150'
        },
        hasMenu: {
          '@type': 'Menu',
          name: 'Menú La Choza de Leña',
          hasMenuSection: [
            {
              '@type': 'MenuSection',
              name: 'Carnes Premium',
              hasMenuItem: [
                {
                  '@type': 'MenuItem',
                  name: 'Tomahawk de Res',
                  description: 'Corte fino a la parrilla, incluye acompañamientos. 500g o 1Kg.',
                  offers: { '@type': 'Offer', price: '12500', priceCurrency: 'CRC' }
                },
                {
                  '@type': 'MenuItem',
                  name: 'Rib Eye',
                  description: '350g de puro sabor.',
                  offers: { '@type': 'Offer', price: '10500', priceCurrency: 'CRC' }
                },
                {
                  '@type': 'MenuItem',
                  name: 'Costilla de Cerdo',
                  description: '250g con salsa de la casa.',
                  offers: { '@type': 'Offer', price: '6500', priceCurrency: 'CRC' }
                }
              ]
            },
            {
              '@type': 'MenuSection',
              name: 'Favoritos Ticos',
              hasMenuItem: [
                {
                  '@type': 'MenuItem',
                  name: 'Chifrijo',
                  description: 'Arroz, frijoles tiernos, chicharrón, pico de gallo y aguacate.',
                  offers: { '@type': 'Offer', price: '3500', priceCurrency: 'CRC' }
                },
                {
                  '@type': 'MenuItem',
                  name: 'Casado Carne en Salsa',
                  description: 'Arroz, frijoles, ensalada.',
                  offers: { '@type': 'Offer', price: '3500', priceCurrency: 'CRC' }
                },
                {
                  '@type': 'MenuItem',
                  name: 'Chalupa Mixta',
                  description: 'Carne, Pollo o Mixta.',
                  offers: { '@type': 'Offer', price: '3500', priceCurrency: 'CRC' }
                }
              ]
            },
            {
              '@type': 'MenuSection',
              name: 'Para Compartir',
              hasMenuItem: [
                {
                  '@type': 'MenuItem',
                  name: 'Tabla Familiar (5 Personas)',
                  description: 'Pollo, Costilla de Cerdo, Churrasco, Chicharrón, Salchichón, Chorizo, Ensalada y Papas.',
                  offers: { '@type': 'Offer', price: '34000', priceCurrency: 'CRC' }
                }
              ]
            }
          ]
        }
      }),
    },
  ],
});
</script>
