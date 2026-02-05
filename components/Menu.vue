<template>
  <section class="space-y-8">
    <!-- Carnes Premium -->
    <div>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-display font-bold text-text-main-light dark:text-text-main-dark">Carnes Premium</h2>
        <span class="material-icons-round text-primary">local_fire_department</span>
      </div>
      <div class="space-y-4">
        <div class="bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-lg mb-1">Tomahawk de Res</h3>
              <p class="text-xs text-text-muted-light dark:text-text-muted-dark mb-2">Corte fino a la parrilla, incluye acompañamientos.</p>
              <div class="flex gap-3">
                <span class="inline-block px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-xs font-semibold">500g</span>
                <span class="inline-block px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-xs font-semibold">1 Kg</span>
              </div>
            </div>
            <div class="flex flex-col items-end gap-1">
              <span class="text-primary font-bold">₡12.500</span>
              <span class="text-primary font-bold text-sm">₡19.500</span>
            </div>
          </div>
        </div>
        <div class="bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="font-bold text-lg mb-1">Rib Eye</h3>
              <p class="text-xs text-text-muted-light dark:text-text-muted-dark">350g de puro sabor.</p>
            </div>
            <span class="text-primary font-bold">₡10.500</span>
          </div>
        </div>
        <div class="bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="font-bold text-lg mb-1">Costilla de Cerdo</h3>
              <p class="text-xs text-text-muted-light dark:text-text-muted-dark">250g con salsa de la casa.</p>
            </div>
            <span class="text-primary font-bold">₡6.500</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Favoritos Ticos -->
    <div>
      <h2 class="text-2xl font-display font-bold text-text-main-light dark:text-text-main-dark mb-4">Favoritos Ticos</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2 bg-gradient-to-br from-stone-800 to-stone-900 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-primary opacity-10 rounded-bl-full"></div>
          <div class="relative z-10">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-display font-bold text-xl">Chifrijo</h3>
              <span class="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">Top Seller</span>
            </div>
            <p class="text-stone-300 text-sm mb-4">Arroz, frijoles tiernos, chicharron, pico de gallo y aguacate.</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-primary">₡3.500</span>
              <button class="bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <span class="material-icons-round text-sm">add</span>
              </button>
            </div>
          </div>
        </div>
        <div class="bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 flex flex-col justify-between h-32">
          <div>
            <h3 class="font-bold text-sm leading-tight mb-1">Casado Carne en Salsa</h3>
            <p class="text-[10px] text-text-muted-light dark:text-text-muted-dark">Arroz, frijoles, ensalada.</p>
          </div>
          <span class="text-primary font-bold">₡3.500</span>
        </div>
        <div class="bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 flex flex-col justify-between h-32">
          <div>
            <h3 class="font-bold text-sm leading-tight mb-1">Chalupa Mixta</h3>
            <p class="text-[10px] text-text-muted-light dark:text-text-muted-dark">Carne, Pollo o Mixta.</p>
          </div>
          <span class="text-primary font-bold">₡3.500</span>
        </div>
      </div>
    </div>
    
    <!-- Para Compartir -->
    <div class="bg-surface-light dark:bg-surface-dark border border-primary/30 p-5 rounded-2xl shadow-md relative mt-6">
      <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-sm whitespace-nowrap">
        Para Compartir
      </div>
      <h3 class="font-display font-bold text-xl text-center mt-2 mb-2">Tabla Familiar (5 Personas)</h3>
      <p class="text-center text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
        Pollo, Costilla de Cerdo, Churrasco, Chicharrón, Salchichón, Chorizo, Ensalada y Papas.
      </p>
      <div class="text-center">
        <span class="text-3xl font-bold text-primary">₡34.000</span>
      </div>
    </div>

    <!-- Extras & Adicionales -->
    <div>
      <h2 class="text-xl font-display font-bold text-text-main-light dark:text-text-main-dark mb-3">Extras &amp; Adicionales</h2>
      <div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-stone-100 dark:border-stone-800 divide-y divide-stone-100 dark:divide-stone-800">
        <div class="p-3 flex justify-between items-center">
          <span class="text-sm font-medium">Orden de Papas Fritas (Grande)</span>
          <span class="text-sm font-bold text-text-muted-light dark:text-text-muted-dark">₡3.500</span>
        </div>
        <div class="p-3 flex justify-between items-center">
          <span class="text-sm font-medium">Plátano Maduro con Queso</span>
          <span class="text-sm font-bold text-text-muted-light dark:text-text-muted-dark">₡2.500</span>
        </div>
        <div class="p-3 flex justify-between items-center">
          <span class="text-sm font-medium">Gallo de Chorizo</span>
          <span class="text-sm font-bold text-text-muted-light dark:text-text-muted-dark">₡3.500</span>
        </div>
      </div>
    </div>
  </section>
</template>
