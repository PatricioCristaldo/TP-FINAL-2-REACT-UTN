import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  base: '/tp-final-2-react-utn/', // Asegúrate de que esto apunte al nombre de tu repositorio
  
  server: {
    historyApiFallback: true, // Añadir esta línea para manejar el enrutamiento del lado del cliente
  },
});
