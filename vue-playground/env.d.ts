/// <reference types="vite/client" />

// 定义vue文件后缀的类型
declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const vueComponent: DefineComponent<{}, {}, any>;

  export default vueComponent
}