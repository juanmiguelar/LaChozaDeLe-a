<template>
  <div>
    <AppNav />
    <main>
      <slot />
    </main>
    <footer class="max-w-md mx-auto px-4 pb-20 md:pb-8 text-center">
      <p class="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
        La Choza de Leña — Restaurante de carnes a la parrilla en San Rafael Abajo, Desamparados, San José, Costa Rica. Chifrijos, costillas, tomahawk y comida típica costarricense.
      </p>
      <p class="text-[10px] text-text-muted-light/60 dark:text-text-muted-dark/60 mt-2">
        © {{ new Date().getFullYear() }} La Choza de Leña. Todos los derechos reservados.
      </p>
    </footer>
    <StickyCTA />
  </div>
</template>
