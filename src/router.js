import { createRouter, createWebHistory } from 'vue-router'
import CadastroCliente from './components/CadastroCliente.vue'

const routes = [
  {
    path: '/cadastro-cliente',
    component: CadastroCliente,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
