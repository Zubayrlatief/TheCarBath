import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import BusinessParks from "../pages/BusinessParks.vue"
import AutoDetailing from "../pages/AutoDetailing.vue"
import Bookings from "../pages/Bookings.vue"

const routes = [
  { path: "/", name: "Home", component: Home, meta: { title: "Home - Elite ParkWash" } },
  { path: "/business-parks", name: "BusinessParks", component: BusinessParks, meta: { title: "Business Parks - Elite ParkWash" } },
  { path: "/auto-detailing", name: "AutoDetailing", component: AutoDetailing, meta: { title: "Auto Detailing - Elite ParkWash" } },
  { path: "/bookings", name: "Bookings", component: Bookings, meta: { title: "Bookings - Elite ParkWash" } },
]

const router = createRouter({ history: createWebHistory(), routes, scrollBehavior(){ return { top: 0 } } })
router.afterEach((to)=>{ if(to.meta && to.meta.title){ document.title = String(to.meta.title) } })
export default router
