<template>
  <nav class="sticky top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
    <div class="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="h-10 w-16 bg-black rounded-full flex items-center justify-center border border-stone-600">
          <span class="text-white text-[8px] font-display font-bold text-center leading-tight">LA CHOZA<br/>DE LEÑA</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <button @click="toggleTheme" class="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-text-muted-light dark:text-text-muted-dark transition-colors">
          <span class="material-icons-round text-xl">{{ themeIcon }}</span>
        </button>
        <a class="bg-primary text-white p-2 rounded-full shadow-lg hover:bg-orange-700 transition transform hover:scale-105" href="tel:22751001" aria-label="Llamar al restaurante">
          <span class="material-icons-round">call</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { themeIcon, toggleTheme } = useTheme();
</script>
