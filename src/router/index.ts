import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

/**
 * IA: the landing page carries the full profile. Only three subjects get their own
 * pages because they keep growing: marketing, solved problems, and the system design guide.
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/marketing',
    name: 'marketing',
    component: () => import('@/views/MarketingView.vue'),
  },
  {
    path: '/problems/solved',
    name: 'solved-problems',
    component: () => import('@/views/SolvedProblemsView.vue'),
  },
  {
    path: '/problems/solved/:slug',
    name: 'solved-detail',
    component: () => import('@/views/SolvedProblemDetailView.vue'),
  },
  {
    path: '/systems',
    name: 'systems',
    component: () => import('@/views/SystemsView.vue'),
  },
  {
    path: '/systems/concepts/:slug',
    name: 'system-concept',
    component: () => import('@/views/SystemConceptView.vue'),
  },
  {
    path: '/systems/:domain',
    name: 'systems-domain',
    component: () => import('@/views/SystemsDomainView.vue'),
  },
  {
    path: '/systems/:domain/:slug',
    name: 'systems-topic',
    component: () => import('@/views/SystemsTopicView.vue'),
  },
  // Legacy standalone pages now live as sections on the landing page.
  { path: '/engineering', redirect: '/#expertise' },
  { path: '/architecture', redirect: '/#expertise' },
  { path: '/ai', redirect: '/#expertise' },
  { path: '/devops', redirect: '/#expertise' },
  { path: '/observability', redirect: '/#expertise' },
  { path: '/work', redirect: '/#work' },
  { path: '/work/:slug', redirect: '/#work' },
  { path: '/lab', redirect: '/#work' },
  { path: '/coding', redirect: '/#coding' },
  { path: '/experience', redirect: '/#experience' },
  { path: '/teaching', redirect: '/#about' },
  { path: '/research', redirect: '/#research' },
  { path: '/services', redirect: '/#services' },
  { path: '/about', redirect: '/#about' },
  { path: '/contact', redirect: '/#contact' },
  { path: '/links', redirect: '/#contact' },
  { path: '/legacy', redirect: '/marketing' },
  { path: '/problems', redirect: '/problems/solved' },
  { path: '/problems/industry', redirect: '/systems' },
  { path: '/problems/industry/:domain', redirect: (to) => `/systems/${to.params.domain}` },
  {
    path: '/problems/industry/:domain/:slug',
    redirect: (to) => `/systems/${to.params.domain}/${to.params.slug}`,
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 96, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes,
})

export default router
