import {lazy} from 'react';

const Projects = lazy(() => import('../pages/projects/Index'))
const Clients = lazy(() => import('../pages/clients/Index'))

export const routes = {
    projects:{
        path: '\projects',
        component: Projects,
        name: 'Projects',
    },
    Clients:{
        path: '\clients',
        component: Clients,
        name: 'Clients'
    },
}