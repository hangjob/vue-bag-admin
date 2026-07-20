import type { AdminPlugin } from 'vue-bag-admin'

const contentPlugin: AdminPlugin = {
  id: 'content-plugin',
  name: 'Content Plugin',
  version: '0.1.0',
  order: 20,
  routes: [
    {
      path: '/content/posts',
      name: 'ContentPosts',
      component: () => import('../views/ContentPosts.vue'),
      meta: {
        title: 'content.posts',
        layout: 'default',
        roles: ['authenticated']
      }
    },
    {
      path: '/content/posts/create',
      name: 'ContentPostCreate',
      component: () => import('../views/ContentPostEditor.vue'),
      meta: {
        title: 'content.create',
        layout: 'default',
        roles: ['authenticated'],
        activeMenu: '/content/posts',
        noCache: true
      }
    },
    {
      path: '/content/posts/:id',
      name: 'ContentPostDetail',
      component: () => import('../views/ContentPostDetail.vue'),
      meta: {
        title: 'content.detail',
        layout: 'default',
        roles: ['authenticated'],
        hidden: true,
        activeMenu: '/content/posts',
        noCache: true
      }
    }
  ],
  menus: [
    {
      path: '/content',
      title: 'content.title',
      icon: 'order',
      sort: 30,
      roles: ['authenticated'],
      children: [
        {
          path: '/content/posts',
          title: 'content.posts',
          sort: 1,
          roles: ['authenticated']
        },
        {
          path: '/content/posts/create',
          title: 'content.create',
          sort: 2,
          roles: ['authenticated']
        }
      ]
    }
  ],
  locales: {
    'zh-CN': {
      content: {
        title: '内容中心',
        posts: '文章列表',
        create: '新建文章',
        detail: '文章详情'
      }
    },
    en: {
      content: {
        title: 'Content',
        posts: 'Posts',
        create: 'Create Post',
        detail: 'Post Detail'
      }
    }
  }
}

export default contentPlugin
