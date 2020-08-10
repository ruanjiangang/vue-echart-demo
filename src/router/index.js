import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import First from '../components/First.vue'
import Second from '../components/Second.vue'
import Third from '../components/Third.vue'

const router = new VueRouter({
    // 路由匹配规则
    routes: [
        {
            path: '/',
            redirect: '/first'  // 路由重定向
        },
        {
            name: 'first',
            path: '/first',
            component: First,
            meta: {  // 路由元信息
                auth: false
            }
        },
        {
            name: 'second',
            path: '/second',
            component: Second,  
            meta: {  // 路由元信息
                auth: false
            }
        },
        {
            name: 'third',
            path: '/third',
            component: Third,  
            meta: {  // 路由元信息
                auth: false
            }
        },
    ]
});

export default router;