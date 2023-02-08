export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView'),
  },
   {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView'),
  },
];
