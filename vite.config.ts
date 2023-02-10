import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import { resolve } from 'path';

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 })
  ],
  resolve: {
    alias: {
      components: resolve(__dirname, 'app/frontend/components'),
      pages: resolve(__dirname, 'app/frontend/pages'),
      types: resolve(__dirname, 'app/frontend/types'),
      layouts: resolve(__dirname, 'app/frontend/layouts'),
      images: resolve(__dirname, 'app/frontend/images'),
      utils: resolve(__dirname, 'app/frontend/utils'),
      stores: resolve(__dirname, 'app/frontend/stores'),
    },
  },
})
