// vite.config.js
import vue from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.7_vue@3.5.8/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig, loadEnv } from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite@5.4.7_less@4.2.0_terser@5.33.0/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/unplugin-auto-import@0.17.8/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.5.8/node_modules/unplugin-vue-components/dist/vite.js";
import { NaiveUiResolver } from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.5.8/node_modules/unplugin-vue-components/dist/resolvers.js";
import path from "path";
import { viteMockServe } from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite-plugin-mock@3.0.2_esbuild@0.24.0_mockjs@1.1.0_vite@5.4.7/node_modules/vite-plugin-mock/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite-plugin-css-injected-by-js@3.5.1_vite@5.4.7/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import { analyzer } from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite-bundle-analyzer@0.10.6/node_modules/vite-bundle-analyzer/dist/index.mjs";
import VueDevTools from "file:///D:/wwwsite/pm-web-admin-next/node_modules/.pnpm/vite-plugin-vue-devtools@7.4.5_vite@5.4.7_vue@3.5.8/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
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
      // hmr: false,
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
  } else {
    config.build.outDir = "dist";
    config.build.rollupOptions.input = {
      main: path.resolve(__vite_injected_original_dirname, "index.html"),
      blog: path.resolve(__vite_injected_original_dirname, "src", "blog/index.html")
    };
  }
  return config;
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3d3dzaXRlXFxcXHBtLXdlYi1hZG1pbi1uZXh0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3d3dzaXRlXFxcXHBtLXdlYi1hZG1pbi1uZXh0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93d3dzaXRlL3BtLXdlYi1hZG1pbi1uZXh0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7ZGVmaW5lQ29uZmlnLCBsb2FkRW52fSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQge05haXZlVWlSZXNvbHZlcn0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQge3ZpdGVNb2NrU2VydmV9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snXHJcbmltcG9ydCBjc3NJbmplY3RlZEJ5SnNQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLWNzcy1pbmplY3RlZC1ieS1qc1wiIC8vIGNzcyBcdTY1NzRcdTU0MDgganNcclxuaW1wb3J0IHthbmFseXplcn0gZnJvbSBcInZpdGUtYnVuZGxlLWFuYWx5emVyXCI7IC8vIFx1NTIwNlx1Njc5MFx1NTMwNVx1NTkyN1x1NUMwRlx1NEY5RFx1OEQ1NlxyXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJyAvLyBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoe21vZGV9KSA9PiB7XHJcbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpXHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgLy8gdml0ZSBcdTkxNERcdTdGNkVcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgIHZ1ZSgpLFxyXG4gICAgICAgICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICAgICAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAndnVlJyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICduYWl2ZS11aSc6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VEaWFsb2cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZU1lc3NhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZU5vdGlmaWNhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlTG9hZGluZ0JhcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXJzOiBbTmFpdmVVaVJlc29sdmVyKCldXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB2aXRlTW9ja1NlcnZlKHtcclxuICAgICAgICAgICAgICAgIG1vY2tQYXRoOiAnLi9tb2NrLycsXHJcbiAgICAgICAgICAgICAgICBsb2NhbEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9kRW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgVnVlRGV2VG9vbHMoKVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZGVmaW5lOiB7XHJcbiAgICAgICAgICAgIF9fQVBQX0VOVl9fOiBKU09OLnN0cmluZ2lmeShlbnYuQVBQX0VOViksXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnVpbGQ6IHtcclxuICAgICAgICAgICAgb3V0RGlyOiAnbGliJyxcclxuICAgICAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWNrYWdlcy9pbnN0YWxsLmpzJyksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndnVlLWJhZy1hZG1pbicsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxyXG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGB2dWUtYmFnLWFkbWluLiR7Zm9ybWF0fS5qc2AgLy8gXHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0XHU2NTg3XHU0RUY2XHU1NDBEXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hbnVhbENodW5rczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gXHU4QkJFXHU3RjZFXHU0RTNBXHU1RTkzXHU2QTIxXHU1RjBGXHJcbiAgICAgICAgICAgICAgICBleHRlcm5hbDogWyd2dWUnLCAnbmFpdmUtdWknXSwgLy8gXHU4RkQ5XHU0RTJBXHU5MTREXHU3RjZFXHU1Rjg4XHU5MUNEXHU4OTgxXHVGRjBDXHU0RTBEXHU3MTM2XHU0RjFBXHU1QkZDXHU4MUY0IFx1NTE2Q1x1NzUyOFx1NzY4NFx1N0VDNFx1NEVGNlx1NjVFMFx1NkNENVx1NEY3Rlx1NzUyOFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtaW5pZnk6ICd0ZXJzZXInLFxyXG4gICAgICAgICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjb21wcmVzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgICAgICAvLyBobXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgICAgICAgIHBvcnQ6IDUxMDAsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICAgICAnL2FwaSc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV3cml0ZTogKHVybCkgPT4gdXJsLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG1vZGUgPT09ICdsaWInKSB7XHJcbiAgICAgICAgY29uZmlnLnBsdWdpbnMucHVzaChjc3NJbmplY3RlZEJ5SnNQbHVnaW4oKSlcclxuICAgICAgICAvLyBjb25maWcucGx1Z2lucy5wdXNoKGFuYWx5emVyKCkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbmZpZy5idWlsZC5vdXREaXIgPSAnZGlzdCdcclxuICAgICAgICBjb25maWcuYnVpbGQucm9sbHVwT3B0aW9ucy5pbnB1dCA9IHtcclxuICAgICAgICAgICAgbWFpbjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4Lmh0bWwnKSxcclxuICAgICAgICAgICAgYmxvZzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycsICdibG9nL2luZGV4Lmh0bWwnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb25maWc7XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFEsT0FBTyxTQUFTO0FBQzVSLFNBQVEsY0FBYyxlQUFjO0FBQ3BDLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVEsdUJBQXNCO0FBQzlCLE9BQU8sVUFBVTtBQUNqQixTQUFRLHFCQUFvQjtBQUM1QixPQUFPLDJCQUEyQjtBQUNsQyxTQUFRLGdCQUFlO0FBQ3ZCLE9BQU8saUJBQWlCO0FBVHhCLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUMsS0FBSSxNQUFNO0FBQ3BDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFDdkMsUUFBTSxTQUFTO0FBQUE7QUFBQSxJQUVYLFNBQVM7QUFBQSxNQUNMLElBQUk7QUFBQSxNQUNKLFdBQVc7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFlBQ0ksWUFBWTtBQUFBLGNBQ1I7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNKO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNQLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFBLE1BQ2pDLENBQUM7QUFBQSxNQUNELGNBQWM7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQSxRQUNkLGFBQWE7QUFBQSxNQUNqQixDQUFDO0FBQUEsTUFDRCxZQUFZO0FBQUEsSUFDaEI7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNKLGFBQWEsS0FBSyxVQUFVLElBQUksT0FBTztBQUFBLElBQzNDO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDSCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDeEM7QUFBQSxJQUNKO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUEsTUFDUixLQUFLO0FBQUEsUUFDRCxPQUFPLEtBQUssUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxRQUN4RCxNQUFNO0FBQUEsUUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsUUFDckIsVUFBVSxDQUFDLFdBQVcsaUJBQWlCLE1BQU07QUFBQTtBQUFBLE1BQ2pEO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDWCxRQUFRO0FBQUEsVUFDSixjQUFjLE1BQU07QUFDaEIsbUJBQU87QUFBQSxVQUNYO0FBQUEsUUFDSjtBQUFBO0FBQUEsUUFFQSxVQUFVLENBQUMsT0FBTyxVQUFVO0FBQUE7QUFBQSxNQUNoQztBQUFBLE1BQ0EsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLFFBQ1gsVUFBVTtBQUFBLFVBQ04sY0FBYztBQUFBLFVBQ2QsZUFBZTtBQUFBLFFBQ25CO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxJQUNBLFFBQVE7QUFBQTtBQUFBLE1BRUosTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ0wsK0JBQStCO0FBQUEsTUFDbkM7QUFBQSxNQUNBLE9BQU87QUFBQSxRQUNILFFBQVE7QUFBQSxVQUNKLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLFNBQVMsQ0FBQyxRQUFRLElBQUksUUFBUSxVQUFVLEVBQUU7QUFBQSxRQUM5QztBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNBLE1BQUksU0FBUyxPQUFPO0FBQ2hCLFdBQU8sUUFBUSxLQUFLLHNCQUFzQixDQUFDO0FBQUEsRUFFL0MsT0FBTztBQUNILFdBQU8sTUFBTSxTQUFTO0FBQ3RCLFdBQU8sTUFBTSxjQUFjLFFBQVE7QUFBQSxNQUMvQixNQUFNLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDMUMsTUFBTSxLQUFLLFFBQVEsa0NBQVcsT0FBTyxpQkFBaUI7QUFBQSxJQUMxRDtBQUFBLEVBQ0o7QUFDQSxTQUFPO0FBQ1gsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
