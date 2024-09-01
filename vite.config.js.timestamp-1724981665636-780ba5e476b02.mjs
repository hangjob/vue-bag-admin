// vite.config.js
import vue from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.0_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig, loadEnv } from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite@5.2.0_less@4.2.0_terser@5.31.6/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { NaiveUiResolver } from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
import path from "path";
import { viteMockServe } from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite-plugin-mock@3.0.2_esbuild@0.21.5_mockjs@1.1.0_vite@5.2.0/node_modules/vite-plugin-mock/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite-plugin-css-injected-by-js@3.5.1_vite@5.2.0/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import { analyzer } from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite-bundle-analyzer@0.10.6/node_modules/vite-bundle-analyzer/dist/index.mjs";
import VueDevTools from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.9_vite@5.2.0_vue@3.4.21/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_dirname = "D:\\wwwsite\\pm-web-admin-next";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const config = {
    // vite 配置
    plugins: [
      vue(),
      AutoImport({
        imports: [
          "vue",
          {
            "naive-ui": [
              "useDialog",
              "useMessage",
              "useNotification",
              "useLoadingBar"
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      }),
      viteMockServe({
        mockPath: "./mock/",
        localEnabled: true,
        prodEnabled: true
      }),
      VueDevTools()
    ],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    build: {
      outDir: "lib",
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "src/packages/install.js"),
        name: "vue-bag-admin",
        formats: ["es", "cjs"],
        fileName: (format) => `vue-bag-admin.${format}.js`
        // 打包后的文件名
      },
      rollupOptions: {
        output: {
          manualChunks: () => {
            return "vendor";
          }
        },
        // 设置为库模式
        external: ["vue", "naive-ui"]
        // 这个配置很重要，不然会导致 公用的组件无法使用
      },
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    server: {
      host: "0.0.0.0",
      port: 5100,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      proxy: {
        "/api": {
          target: "http://localhost:1337/api",
          changeOrigin: true,
          rewrite: (url) => url.replace(/^\/api/, "")
        }
      }
    }
  };
  if (mode === "lib") {
    config.plugins.push(cssInjectedByJsPlugin());
    config.plugins.push(analyzer());
  }
  return config;
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3d3dzaXRlXFxcXHBtLXdlYi1hZG1pbi1uZXh0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3d3dzaXRlXFxcXHBtLXdlYi1hZG1pbi1uZXh0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93d3dzaXRlL3BtLXdlYi1hZG1pbi1uZXh0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQge2RlZmluZUNvbmZpZywgbG9hZEVudn0gZnJvbSAndml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHtOYWl2ZVVpUmVzb2x2ZXJ9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQge3ZpdGVNb2NrU2VydmV9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanNcIiAvLyBjc3MgXHU2NTc0XHU1NDA4IGpzXG5pbXBvcnQge2FuYWx5emVyfSBmcm9tIFwidml0ZS1idW5kbGUtYW5hbHl6ZXJcIjsgLy8gXHU1MjA2XHU2NzkwXHU1MzA1XHU1OTI3XHU1QzBGXHU0RjlEXHU4RDU2XG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJyAvLyBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7bW9kZX0pID0+IHtcbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAvLyB2aXRlIFx1OTE0RFx1N0Y2RVxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICB2dWUoKSxcbiAgICAgICAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICAgICAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ3Z1ZScsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduYWl2ZS11aSc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlRGlhbG9nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlTWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZU5vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZUxvYWRpbmdCYXInXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICAgICAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpXVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB2aXRlTW9ja1NlcnZlKHtcbiAgICAgICAgICAgICAgICBtb2NrUGF0aDogJy4vbW9jay8nLFxuICAgICAgICAgICAgICAgIGxvY2FsRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9kRW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBWdWVEZXZUb29scygpXG4gICAgICAgIF0sXG4gICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgX19BUFBfRU5WX186IEpTT04uc3RyaW5naWZ5KGVudi5BUFBfRU5WKSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYnVpbGQ6IHtcbiAgICAgICAgICAgIG91dERpcjogJ2xpYicsXG4gICAgICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWNrYWdlcy9pbnN0YWxsLmpzJyksXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Z1ZS1iYWctYWRtaW4nLFxuICAgICAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGB2dWUtYmFnLWFkbWluLiR7Zm9ybWF0fS5qc2AgLy8gXHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0XHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgICAgICBtYW51YWxDaHVua3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAndmVuZG9yJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBcdThCQkVcdTdGNkVcdTRFM0FcdTVFOTNcdTZBMjFcdTVGMEZcbiAgICAgICAgICAgICAgICBleHRlcm5hbDogWyd2dWUnLCAnbmFpdmUtdWknXSwgLy8gXHU4RkQ5XHU0RTJBXHU5MTREXHU3RjZFXHU1Rjg4XHU5MUNEXHU4OTgxXHVGRjBDXHU0RTBEXHU3MTM2XHU0RjFBXHU1QkZDXHU4MUY0IFx1NTE2Q1x1NzUyOFx1NzY4NFx1N0VDNFx1NEVGNlx1NjVFMFx1NkNENVx1NEY3Rlx1NzUyOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgICAgICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZlcjoge1xuICAgICAgICAgICAgaG9zdDogJzAuMC4wLjAnLFxuICAgICAgICAgICAgcG9ydDogNTEwMCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3h5OiB7XG4gICAgICAgICAgICAgICAgJy9hcGknOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGknLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJld3JpdGU6ICh1cmwpID0+IHVybC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChtb2RlID09PSAnbGliJykge1xuICAgICAgICBjb25maWcucGx1Z2lucy5wdXNoKGNzc0luamVjdGVkQnlKc1BsdWdpbigpKVxuICAgICAgICBjb25maWcucGx1Z2lu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
