import { authGuard } from '@/libs/authGuard';
import { useUserStore } from '@/store/user.store';
import { RoleEnum } from '@/types/role.enum';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

type UserStore = ReturnType<typeof useUserStore>;

const managerRoute: RouteRecordRaw = {
    path: '/manager',
    component: () => import('@/pages/Layout.vue'),
    meta: { roles: ['manager'] },
    beforeEnter: authGuard,
    children: [
        {
            name: 'ManagerHome',
            path: '',
            component: () => import('@/pages/Home.vue')
        },
        {
            name: 'ManagerMembers',
            path: 'members',
            component: () => import('@/pages/manager/Members.vue'),
        },
        {
            name: 'ManagerMeeting',
            path: 'meetings',
            component: () => import('@/pages/manager/Meetings.vue'),
        },
        {
            name: 'ManagerReports',
            path: 'reports',
            component: () => import('@/pages/manager/Reports.vue'),
        },
    ],
};

export const navRoutes = (userStore: UserStore | null): RouteRecordRaw[] => {
    const role = userStore?.getUser?.role;

    switch (role) {
        case RoleEnum.MANAGER:
            return [
                managerRoute,
                {
                    name: 'Home',
                    path: '/manager',
                    redirect: '/manager'
                },
                {
                    name: 'Members',
                    path: '/manager/members',
                    redirect: '/manager/members'
                },
                {
                    name: 'Meetings',
                    path: '/manager/meetings',
                    redirect: '/manager/meetings'
                },
                {
                    name: 'Reports',
                    path: '/manager/reports',
                    redirect: '/manager/reports'
                }
            ];
        
        default:
            return [];
    }
}

const allRoutes: RouteRecordRaw[] = [
    managerRoute,
    {
        name: 'AppRoot',
        path: '/',
        redirect: () => {
            const userStore = useUserStore();
            const role = userStore.getUser?.role;
            if (role === 'manager') return '/manager';
            return '/unauthorized';
        }
    },
    { name: 'Unauthorized', path: '/unauthorized', component: () => import('@/pages/_system/UnAuthorized.vue') },
    { name: 'NotFound', path: '/not-found', component: () => import('@/pages/_system/NotFound.vue') }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: allRoutes,
})
