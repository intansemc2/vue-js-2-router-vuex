import Home from '../components/Home.vue';
import Header from '../components/Header.vue';

const User = (resolve) => {
    require.ensure(
        ['../components/user/User.vue'],
        () => {
            resolve(require('../components/user/User.vue'));
        },
        'user'
    );
};

const UserStart = (resolve) => {
    require.ensure(
        ['../components/user/User.vue'],
        () => {
            resolve(require('../components/user/UserStart.vue'));
        },
        'user'
    );
};

const UserEdit = (resolve) => {
    require.ensure(
        ['../components/user/User.vue'],
        () => {
            resolve(require('../components/user/UserEdit.vue'));
        },
        'user'
    );
};

const UserDetail = (resolve) => {
    require.ensure(
        ['../components/user/User.vue'],
        () => {
            resolve(require('../components/user/UserDetail.vue'));
        },
        'user'
    );
};

export const routers = [
    {
        path: '/',
        components: {
            default: Home,
            'header-top': Header,
        },
        name: 'Home',
    },
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header,
        },
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' },
        ],
    },
    {
        path: '/redirect-me',
        redirect: { name: 'Home' },
    },
    {
        path: '*',
        redirect: { name: 'Home' },
    },
];
