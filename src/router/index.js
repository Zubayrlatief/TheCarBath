
export const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/Home.vue') },
  { path: '/auto-detailing', name: 'AutoDetailing', component: () => import('../pages/AutoDetailing.vue') },
  { path: '/mobile-car-wash-cape-town', name: 'MobileCarWash', component: () => import('../pages/MobileCarWash.vue') },
  { path: '/headlight-restoration-cape-town', name: 'HeadlightRestoration', component: () => import('../pages/HeadlightRestoration.vue') },
  { path: '/business-parks', name: 'BusinessParks', component: () => import('../pages/BusinessParks.vue') },
  { path: '/prices', name: 'Prices', component: () => import('../pages/Prices.vue') },
  { path: '/faq', name: 'Faq', component: () => import('../pages/Faq.vue') },
  { path: '/our-work', name: 'OurWork', component: () => import('../pages/OurWork.vue') },
  { path: '/about', name: 'About', component: () => import('../pages/About.vue') },
  { path: '/bookings', name: 'Bookings', component: () => import('../pages/Bookings.vue') },
  { path: '/404', name: 'NotFound', component: () => import('../pages/NotFound.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../pages/NotFound.vue') },
]

export const scrollBehavior = (to) => (to.hash ? { el: to.hash, top: 80 } : { top: 0 })
