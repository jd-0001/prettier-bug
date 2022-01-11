import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const myvar = 'hello'

// prettier-ignore
const x = `<!DOCTYPE html>
<html lang="en" class="${myvar}-style${myvar ? ' layout-menu-fixed' : ''}${myvar ? ' layout-navbar-fixed' : ''}${myvar ? ' layout-footer-fixed' : ''}${myvar ? ' layout-menu-collapsed' : ''}" dir="${myvar ? 'rtl' : 'ltr'}" data-theme="theme-default"
  data-assets-path="../../assets/" data-template="${myvar ? 'horizontal' : 'vertical'}-menu-template-starter">`
