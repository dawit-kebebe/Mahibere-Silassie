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
            name: 'ManagerContribution',
            path: 'contribution',
            component: () => import('@/pages/manager/Contribution.vue')
        },
        {
            name: 'ManagerEmergencyFund',
            path: 'emergency-fund',
            component: () => import('@/pages/manager/EmergencyFund.vue')
        },
        {
            name: 'ManagerGospel',
            path: 'gospel',
            component: () => import('@/pages/manager/Gospel.vue')
        },
        {
            name: 'ManagerPilgrim',
            path: 'pilgrim',
            component: () => import('@/pages/manager/Pilgrim.vue')
        },
        {
            name: 'ManagerTribute',
            path: 'tribute',
            component: () => import('@/pages/manager/Tribute.vue')
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
                    name: 'Contribution',
                    path: '/manager/contribution',
                    redirect: '/manager/contribution'
                },
                {
                    name: 'Emergency Fund',
                    path: '/manager/emergency-fund',
                    redirect: '/manager/emergency-fund'
                },
                {
                    name: 'Gospel',
                    path: '/manager/gospel',
                    redirect: '/manager/gospel'
                },
                {
                    name: 'Pilgrim',
                    path: '/manager/pilgrim',
                    redirect: '/manager/pilgrim',
                },
                {
                    name: 'Tribute',
                    path: '/manager/tribute',
                    redirect: '/manager/tribute',
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
