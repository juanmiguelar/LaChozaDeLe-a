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
  title: 'La Choza de Leña - Restaurante y Carnes a la Parrilla',
  description: 'Disfruta del auténtico sabor a leña con nuestras carnes premium, chifrijos legendarios y el mejor ambiente familiar en San Rafael Abajo.',
  ogTitle: 'La Choza de Leña - El Auténtico Sabor a Leña',
  ogDescription: 'Ven y prueba nuestras deliciosas carnes a la parrilla, costillas, y los mejores platos ticos. ¡Te esperamos!',
  ogImage: imageUrl,
  ogUrl: siteUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'La Choza de Leña - Restaurante y Carnes a la Parrilla',
  twitterDescription: 'El mejor sabor a leña de San Rafael Abajo está en La Choza de Leña.',
  twitterImage: imageUrl,
});

// --- JSON-LD SCHEMA.ORG FOR RICH RESULTS ---
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: 'La Choza de Leña',
        image: imageUrl,
        servesCuisine: 'Steakhouse, Comida Típica Costarricense',
        telephone: '+506-2275-1001',
        priceRange: '₡₡',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'San Rafael Abajo',
          addressLocality: 'Desamparados',
          addressRegion: 'San José',
          addressCountry: 'CR'
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            opens: '11:00',
            closes: '22:00'
          }
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150" 
        }
      }),
    },
  ],
});
</script>
