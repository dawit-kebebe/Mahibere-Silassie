// import { authGuard } from '@/libs/authGuard';
// import { useUserStore } from '@/store/user.store';
// import { RoleEnum } from '@sol-chris/shared';
// import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// type UserStore = ReturnType<typeof useUserStore>;

// const managerRoute: RouteRecordRaw = {
//     path: '/manager',
//     component: () => import('@/pages/manager/Layout.vue'),
//     meta: { roles: ['manager'] },
//     beforeEnter: authGuard,
//     children: [
//         {
//             name: 'ManagerHome',
//             path: '',
//             component: () => import('@/pages/manager/Home.vue')
//         },
//         {
//             name: 'ManagerUsersTab',
//             path: 'users',
//             component: () => import('@/pages/manager/Users.vue'),
//         },
//         {
//             name: 'ManagerMenuTab',
//             path: 'menu',
//             component: () => import('@/pages/manager/Menu.vue'),
//         },
//         {
//             name: 'ManagerIngredientsTab',
//             path: 'ingredients',
//             component: () => import('@/pages/manager/Ingredients.vue'),
//         },
//         {
//             name: 'ManagerRestockingTab',
//             path: 'restocking',
//             component: () => import('@/pages/manager/Restocking.vue'),
//         },
//         {
//             name: 'ManagerTables',
//             path: 'tables',
//             component: () => import('@/pages/manager/Tables.vue'),
//         },
//         {
//             name: 'ManagerAnalyticsTab',
//             path: 'analytics',
//             component: () => import('@/pages/manager/Analytics.vue'),
//         },
//     ],
// };

// const kitchenRoute: RouteRecordRaw = {
//     // name: 'Home h',
//     path: '/kitchen',
//     component: () => import('@/pages/kitchen/Layout.vue'),
//     meta: { roles: ['kitchen'] },
//     beforeEnter: authGuard,
//     children: [
//         {
//             name: 'KitchenHome',
//             path: '',
//             component: () => import('@/pages/kitchen/Home.vue')
//         },
//         {
//             name: 'KitchenIngredients',
//             path: 'ingredients',
//             component: () => import('@/pages/kitchen/KitchenIngredientRequests.vue')
//         },
//         {
//             name: 'OrderQueue',
//             path: 'orders',
//             component: () => import('@/pages/kitchen/OrderQueue.vue')
//         }
//     ]
// };

// const storeRoute: RouteRecordRaw = {
//     path: '/store',
//     component: () => import('@/pages/store/Layout.vue'),
//     meta: { roles: ['store'] },
//     beforeEnter: authGuard,
//     children: [
//         {
//             name: 'StoreHome',
//             path: '',
//             component: () => import('@/pages/store/Home.vue'),
//         },
//         {
//             name: 'StoreIngredients',
//             path: 'ingredients',
//             component: () => import('@/pages/store/Ingredients.vue'),
//         },
//         {
//             name: 'StoreRestocking',
//             path: 'restocking',
//             component: () => import('@/pages/store/Restocking.vue'),
//         },
//         {
//             name: 'StoreIngredientRequests',
//             path: 'requests',
//             component: () => import('@/pages/store/IngredientRequests.vue'),
//         },
//     ],
// };

// const weiterRoute: RouteRecordRaw = {
//     name: 'Home',
//     path: '/weiter',
//     component: () => import('@/pages/weiter/Layout.vue'),
//     meta: { roles: ['weiter'] },
//     beforeEnter: authGuard,
//     children: [
//         {
//             name: 'DashboardHome',
//             path: '',
//             component: () => import('@/pages/weiter/Dashboard.vue')
//         },
//         {
//             name: 'WeiterTables',
//             path: 'tables',
//             component: () => import('@/pages/weiter/Tables.vue')
//         },
//         {
//             name: 'ActiveOrders',
//             path: 'table/:tableId/orders',
//             component: () => import('@/pages/weiter/ActiveOrders.vue')
//         }
//     ]
// };

// export const navRoutes = (userStore: UserStore | null): RouteRecordRaw[] => {
//     const role = userStore?.getUser?.role;

//     switch (role) {
//         case RoleEnum.ADMIN:
//         case RoleEnum.MANAGER:
//             return [
//                 managerRoute,
//                 {
//                     name: 'Home',
//                     path: '/manager',
//                     redirect: '/manager'
//                 },
//                 {
//                     name: 'User',
//                     path: '/manager/users',
//                     redirect: '/manager/users'
//                 },
//                 {
//                     name: 'Menu',
//                     path: '/manager/menu',
//                     redirect: '/manager/menu'
//                 },
//                 {
//                     name: 'Ingrediants',
//                     path: '/manager/ingredients',
//                     redirect: '/manager/ingredients'
//                 },
//                 {
//                     name: 'Re-stocking',
//                     path: '/manager/restocking',
//                     redirect: '/manager/restocking'
//                 },
//                 {
//                     name: 'Tables',
//                     path: '/manager/tables',
//                     redirect: '/manager/tables'
//                 },
//                 {
//                     name: 'Analytics',
//                     path: '/manager/analytics',
//                     redirect: '/manager/analytics'
//                 },
//             ];
//         case RoleEnum.KITCHEN:
//             return [
//                 kitchenRoute,
//                 {
//                     name: 'Home',
//                     path: '/kitchen',
//                     redirect: '/kitchen'
//                 },
//                 {
//                     name: 'Ingredients',
//                     path: '/kitchen/ingredients',
//                     redirect: '/kitchen/ingredients'
//                 },
//                 {
//                     name: 'Orders',
//                     path: '/kitchen/orders',
//                     redirect: '/kitchen/orders'
//                 }
//             ];
//         case RoleEnum.STORE:
//             return [
//                 storeRoute,
//                 {
//                     name: 'Home',
//                     path: '/store',
//                     redirect: '/store'
//                 },
//                 {
//                     name: 'Ingredients',
//                     path: '/store/ingredients',
//                     redirect: '/store/ingredients'
//                 },
//                 {
//                     name: 'Restocking',
//                     path: '/store/restocking',
//                     redirect: '/store/restocking'
//                 },
//                 {
//                     name: 'Requests',
//                     path: '/store/requests',
//                     redirect: '/store/requests'
//                 }
//             ];
//         case RoleEnum.WEITER:
//             return [
//                 weiterRoute,
//                 {
//                     name: 'Tables',
//                     path: '/weiter/tables',
//                     redirect: '/weiter/tables'
//                 }
//             ]
//         default:
//             return [];
//     }
// }

// const allRoutes: RouteRecordRaw[] = [
//     managerRoute,
//     kitchenRoute,
//     storeRoute,
//     weiterRoute,
//     {
//         name: 'AppRoot',
//         path: '/',
//         redirect: () => {
//             const userStore = useUserStore();
//             const role = userStore.getUser?.role;
//             if (role === 'manager') return '/manager';
//             if (role === 'weiter') return '/weiter';
//             if (role === 'kitchen') return '/kitchen';
//             if (role === 'store') return '/store';
//             return '/login';
//         }
//     },
//     { name: 'Login', path: '/login', component: () => import('@/pages/Login.vue') },
//     { name: 'Error', path: '/error', component: () => import('@/pages/Error.vue') }
// ]

// export const router = createRouter({
//     history: createWebHistory(),
//     routes: allRoutes,
// })
