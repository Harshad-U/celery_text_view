const routes=[
          {path:'/home',component:home},
          {path:'/files',component:files},
          {path:'/data/:id',name:'data',component:data},



]
const router=new VueRouter({
     routes
})
const app =new Vue({
       router
}).$mount('#app')