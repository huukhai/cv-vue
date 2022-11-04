import Vue from 'vue';
import Router from 'vue-router';
import Resume from '@src/pages/resume.vue';
import Home from '@src/pages/home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/resume/:resumeid',
            name: 'resume',
            component: Resume
        }
    ]
});
