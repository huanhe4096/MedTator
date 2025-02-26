import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue';
import Export from './pages/Export.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/export', component: Export },
]

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL
    ),
    routes,
})

export default router