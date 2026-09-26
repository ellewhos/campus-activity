import {
    createRouter,
    createWebHistory
} from 'vue-router'

import ActivityList from '../views/ActivityList.vue'
import ActivityDetail from '../views/ActivityDetail.vue'
import Apply from '../views/Apply.vue'
import MyApply from '../views/MyApply.vue'
import Success from '../views/Success.vue'

const routes = [
    {
        path: '/',
        name: 'ActivityList',
        component: ActivityList,
    },

    {
        path: '/activity/:id',
        name: 'ActivityDetail',
        component: ActivityDetail,
    },
    {
        path: '/apply/:id',
        name: 'Apply',
        component: Apply,
    },
    {
        path: '/my',
        name: 'MyApply',
        component: MyApply,
    },
    {
        path: '/success',
        name: 'Success',
        component: Success,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
