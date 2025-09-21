import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Services from "../pages/Services.vue"
import Corporate from "../pages/Corporate.vue"
import Contact from "../pages/Contact.vue"

const routes = [
  { path: "/", name: "Home", component: Home, meta: { title: "Home - Elite ParkWash" } },
  { path: "/services", name: "Services", component: Services, meta: { title: "Services - Elite ParkWash" } },
  { path: "/corporate", name: "Corporate", component: Corporate, meta: { title: "Corporate - Elite ParkWash" } },
  { path: "/contact", name: "Contact", component: Contact, meta: { title: "Contact - Elite ParkWash" } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){ return { top: 0 } }
})

router.afterEach((to)=>{ if(to.meta && to.meta.title){ document.title = String(to.meta.title) } })

export default router
