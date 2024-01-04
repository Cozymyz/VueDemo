/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2024-01-01 12:28:30
 * @LastEditTime: 2024-01-04 14:24:41
 */
function vuexLazyLoad(Vue){
    Vue.mixin({
        beforeCreate() {
            let vuexMoudleName = this.$options.vuexMoudleName
            if(vuexMoudleName && !this.$store.state[vuexMoudleName]){
                import(/* @vite-ignore */`../store/modules/${vuexMoudleName}`).then((res) =>{
                    console.log("res", res)
                    this.$store.registerModule(`${vuexMoudleName}`, res.default)
                })
            }
        },
    })
}
export default vuexLazyLoad