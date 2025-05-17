import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/primeros-dias/',
  build: {
    outDir: 'docs',
    // si ya tienes rollupOptions, solo añade la propiedad outDir
    rollupOptions: {
        // si no necesitas entradas extra, esto puede omitirse,
        // pero conviene que al menos se asegure apuntar a tu index.html:
        input: 'index.html'
    }
  },
  plugins: [react()],
})
// https://vitejs.dev/guide/features.html#css-pre-processors