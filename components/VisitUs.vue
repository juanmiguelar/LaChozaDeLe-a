<template>
  <section class="mt-12 mb-8 bg-stone-900 text-stone-300 p-6 rounded-2xl relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
    <div class="relative z-10 text-center">
      <h2 class="text-2xl font-display font-bold text-white mb-2">Visítanos</h2>
      <p class="text-sm mb-6">El mejor ambiente rústico en San Rafael Abajo.</p>
      <div class="flex justify-center gap-4 mb-6">
        <a class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-primary hover:bg-stone-700 transition" href="#" aria-label="Facebook">
          <span class="material-icons-round">facebook</span>
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
      <a href="https://maps.app.goo.gl/your-google-maps-link" target="_blank" rel="noopener noreferrer" class="w-full h-32 bg-stone-800 rounded-lg overflow-hidden relative block group">
        <img alt="Mapa de la ubicación del restaurante en San Rafael Abajo" class="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7jyf7jyOYttFn7Tdign12bWA4toijl4JA7pa9AlFILLA_0NGEDPlYGF7QFd53ClbganQg_VX2uqEvXwcZVhwWBR76BDyG3Ccug3GJa6ifmvm2I08DTF3Lxc2mT_6cbSKmhdkTgjYvpX2UY-BamI5LVChs0Y5cngZwuBDufVXSnZ44S7STmcGrRpmc_0f22gNp4_bNuu6l2Rf9ngob5QEcO0N_e6r9WuQtMSQCEavrjOCtvdFaCUtKqmglgntaL162wNXBsoX3wq2o"/>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg transform group-hover:scale-105 transition-transform">
            <span class="material-icons-round text-sm">place</span> Ver Mapa
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
