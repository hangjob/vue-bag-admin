import router from "@/packages/router"

router.beforeEach((to,from,next)=>{
    console.log("%c应用层拦截", "color: green;")
    next()
})
router.beforeEach(()=>{

})
export default router
