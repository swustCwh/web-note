import VueRouter from "vue-router";
const vuerouter = new VueRouter({
    routes:[
        {
            path:'/MyRouter1',
            meta:{},
            component:()=>import('../src/pages/MyRouter1.vue')
        },
        {
            path:'/MyRouter2',
            meta:{},
            component:()=>import('../src/pages/MyRouter2.vue')
        },
    ]
})

export default vuerouter