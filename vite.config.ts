import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
// Configuración portable: funciona localmente y en plataformas como Vercel.
// La configuración exclusiva de ChatGPT Sites queda fuera del repositorio.
export default defineConfig({
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext()],
});

