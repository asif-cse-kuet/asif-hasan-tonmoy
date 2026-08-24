import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/engineering',
      name: 'engineering',
      component: () => import('@/views/EngineeringView.vue'),
    },
    {
      path: '/architecture',
      name: 'architecture',
      component: () => import('@/views/ArchitectureView.vue'),
    },
    {
      path: '/ai',
      name: 'ai',
      component: () => import('@/views/AiView.vue'),
    },
    {
      path: '/devops',
      name: 'devops',
      component: () => import('@/views/DevopsView.vue'),
    },
    {
      path: '/observability',
      name: 'observability',
      component: () => import('@/views/ObservabilityView.vue'),
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: () => import('@/views/MarketingView.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('@/views/WorkView.vue'),
    },
    {
      path: '/work/:slug',
      name: 'work-detail',
      component: () => import('@/views/WorkDetailView.vue'),
    },
    {
      path: '/lab',
      name: 'lab',
      component: () => import('@/views/LabView.vue'),
    },
    {
      path: '/coding',
      name: 'coding',
      component: () => import('@/views/CodingView.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('@/views/ExperienceView.vue'),
    },
    {
      path: '/teaching',
      name: 'teaching',
      component: () => import('@/views/TeachingView.vue'),
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('@/views/ResearchView.vue'),
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
      path: '/problems/industry',
      name: 'industry-hub',
      component: () => import('@/views/IndustryHubView.vue'),
    },
    {
      path: '/problems/industry/:domain',
      name: 'industry-domain',
      component: () => import('@/views/IndustryDomainView.vue'),
    },
    {
      path: '/problems/industry/:domain/:slug',
      name: 'industry-topic',
      component: () => import('@/views/IndustryTopicView.vue'),
    },
    {
      path: '/systems',
      name: 'systems',
      component: () => import('@/views/SystemsView.vue'),
    },
    {
      path: '/systems/:slug',
      name: 'system-detail',
      component: () => import('@/views/SystemDetailView.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('@/views/LinksView.vue'),
    },
    {
      path: '/legacy',
      name: 'legacy',
      component: () => import('@/views/LegacyView.vue'),
    },
  ],
})

export default router
