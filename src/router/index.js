import { createRouter, createWebHistory } from 'vue-router'

// 路由表：首页 + 独立作品详情页 + 404
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: '陈明智 | AI 产品经理（2027届）',
      description:
        '陈明智，AI 产品经理，河南工业大学计算机科学与技术在读。熵变智元 AI PM 实习，主导智小天 AIGC 视频混剪 0-1；并作为负责人落地零食电商智能客服 Agent。',
    },
  },
  {
    path: '/project/:slug',
    name: 'project',
    component: () => import('../views/ProjectDetailView.vue'),
    meta: { type: 'article' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: '页面未找到 | 陈明智' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 88, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router
