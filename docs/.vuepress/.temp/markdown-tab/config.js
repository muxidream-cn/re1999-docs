import { CodeTabs } from "E:/momo/Documents/GitHub/tauri-template/projects/node_modules/.pnpm/@vuepress+plugin-markdown-t_99593637e304f2d83a46af4a351501ce/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/momo/Documents/GitHub/tauri-template/projects/node_modules/.pnpm/@vuepress+plugin-markdown-t_99593637e304f2d83a46af4a351501ce/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/momo/Documents/GitHub/tauri-template/projects/node_modules/.pnpm/@vuepress+plugin-markdown-t_99593637e304f2d83a46af4a351501ce/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
