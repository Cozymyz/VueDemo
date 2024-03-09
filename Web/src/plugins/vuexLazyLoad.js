/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2024-01-01 12:28:30
 * @LastEditTime: 2024-03-09 20:44:50
 */
function vuexLazyLoad(Vue){
    Vue.mixin({
        beforeMount() {
            let vuexMoudleName = this.$options.vuexMoudleName
            if(vuexMoudleName && !this.$store.state[vuexMoudleName]){
                import(/* @vite-ignore */`../store/modules/${vuexMoudleName}`).then((res) =>{
                    console.log("res beforemount", res)
                    this.$store.registerModule(`${vuexMoudleName}`, res.default)
                })
            }
        },
        beforeUnmount() {
            let vuexMoudleName = this.$options.vuexMoudleName
            if(vuexMoudleName && this.$store.state[vuexMoudleName]){
                import(/* @vite-ignore */`../store/modules/${vuexMoudleName}`).then((res) =>{
                    console.log("res beforeUnmount", res)
                    this.$store.unregisterModule(`${vuexMoudleName}`, res.default)
                })
            }
        },
    })
}
export default vuexLazyLoad