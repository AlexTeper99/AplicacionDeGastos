import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Historial from '../components/Historial.vue'
import Billetera from '../components/Billetera.vue'
import Categorias from '../components/Categorias.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/historial',
            name: 'historial',
            component: Historial
        },
        {
            path: '/billetera',
            name: 'billetera',
            component: Billetera
        },
        {
            path: '/categorias',
            name: 'categorias',
            component: Categorias
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import ('../views/AboutView.vue')
        // }
    ]
})

export default router