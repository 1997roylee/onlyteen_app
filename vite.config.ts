import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import { resolve, __dirname } from 'path';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }),
    // react()
  ],
  resolve: {
    alias: {
      components: resolve(__dirname, 'app/frontend/components'),
      pages: resolve(__dirname, 'app/frontend/pages'),
      layouts: resolve(__dirname, 'app/frontend/layouts'),
      images: resolve(__dirname, 'app/frontend/images'),
      types: resolve(__dirname, 'app/frontend/types'),
    },
  },
})
