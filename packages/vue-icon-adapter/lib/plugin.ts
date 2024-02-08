// 配置自定义组件的懒加载插件
import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'clannad-icon/loader';

export const IconComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};