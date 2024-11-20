import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/Homepage')),
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog')),
    },
];

export default routers;
