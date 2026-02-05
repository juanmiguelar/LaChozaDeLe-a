<template>
  <section class="mt-12 mb-8 bg-stone-900 text-stone-300 p-6 rounded-2xl relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
    <div class="relative z-10 text-center">
      <h2 class="text-2xl font-display font-bold text-white mb-2">Visítanos</h2>
      <p class="text-sm mb-6">El mejor ambiente rústico en San Rafael Abajo.</p>
      <div class="flex justify-center gap-4 mb-6">
        <a class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-primary hover:bg-stone-700 transition" href="https://www.facebook.com/lachozade.lena/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <span class="material-icons-round">facebook</span>
        </a>
        <a class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-primary hover:bg-stone-700 transition" href="https://wa.me/50685483709" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <a class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-primary hover:bg-stone-700 transition" href="https://instagram.com/lachoza_33" aria-label="Instagram">
          <span class="material-icons-round">photo_camera</span>
        </a>
        <a class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-primary hover:bg-stone-700 transition" href="mailto:lachoza33@gmail.com" aria-label="Enviar correo electrónico">
          <span class="material-icons-round">email</span>
        </a>
      </div>
      <div class="space-y-2 mb-6 text-sm">
        <div class="flex items-center justify-center gap-2">
          <span class="material-icons-round text-primary text-sm">call</span>
          <a class="hover:text-white transition" href="tel:22751001">2275-1001</a>
        </div>
        <div class="flex items-center justify-center gap-2">
          <span class="material-icons-round text-primary text-sm">smartphone</span>
          <a class="hover:text-white transition" href="tel:85483709">8548-3709</a>
        </div>
      </div>
      <a href="https://maps.app.goo.gl/CEMFbdx8yG1RFgEt8" target="_blank" rel="noopener noreferrer" class="w-full h-32 bg-stone-800 rounded-lg overflow-hidden relative block group">
        <img alt="Mapa de la ubicación del restaurante en San Rafael Abajo" class="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition duration-500" src="/public/image.png"/>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg transform group-hover:scale-105 transition-transform">
            <span class="material-icons-round text-sm">place</span> Ver Mapa
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
