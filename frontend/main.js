// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';

// Global navigation guard to modify breadcrumb links with dynamic parameters
router.beforeEach((to, from, next) => {
  to.matched.forEach((record) => {
    if (record.path.includes(':id')) {
      record.meta.breadcrumb.href = record.path.replace(':id', to.params.id);
    } else {
      record.meta.breadcrumb.href = record.path;
    }
  });
  next();
});

// Vuetify
import 'vuetify/styles'
import 'vuetify/dist/vuetify.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Breadcrumbs from './modules/breadcrumbs/Breadcrumbs.vue';

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router)
  .use(vuetify)
  .component('breadcrumbs', Breadcrumbs)
  .mount('#app');
