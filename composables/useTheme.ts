import { ref, onMounted, computed } from 'vue';

export function useTheme() {
  const theme = ref('light'); // 'light' or 'dark'

  const themeIcon = computed(() => {
    return theme.value === 'dark' ? 'light_mode' : 'dark_mode';
  });

  const applyTheme = (newTheme: string) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    theme.value = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      applyTheme(savedTheme);
    } else if (prefersDark) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }
  });

  return {
    theme,
    themeIcon,
    toggleTheme,
  };
}
