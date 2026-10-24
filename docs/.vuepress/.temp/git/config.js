import { GitContributors } from "E:/momo/Documents/GitHub/tauri-template/projects/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_84c512403b75becb8453928337d125a0/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "E:/momo/Documents/GitHub/tauri-template/projects/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_84c512403b75becb8453928337d125a0/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
