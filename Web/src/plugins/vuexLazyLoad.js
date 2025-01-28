/*
 * @Descripttion: 
 * @version: 
 * @Author: Meiyizhi
 * @Date: 2024-01-01 12:28:30
 * @LastEditTime: 2025-01-18 21:30:20
 */
function vuexLazyLoad(Vue){
    Vue.mixin({
        beforeMount() {
            const vuexModule = this.$options.vuexModule
            console.log("插件的vuexmodule", vuexModule)
            if(vuexModule && vuexModule.name){
                console.log("插件的name", vuexModule.name)
                console.log("插件的extent", vuexModule.extent)
                const vuexModuleName = vuexModule.name
                if(!this.$store.hasModule(vuexModuleName)){
                    import(/* @vite-ignore */`../store/modules/${vuexModuleName}`).then((res) =>{
                        console.log("res beforemount", res)
                        this.$store.registerModule(`${vuexModuleName}`, res.default)
                    })
                    console.log("测试注销module", vuexModule.extent)
                    switch (vuexModule.extent) {
                        case 'session':
                          // 当页面关闭或刷新时注销模块
                          console.log("choose session")
                          window.addEventListener('beforeunload', () => {
                                if (this.$store.hasModule(vuexModuleName)) {
                                    this.$store.unregisterModule(vuexModuleName);
                                    console.log(`Module "${vuexModuleName}" unregistered on session end.`);
                                }
                            })
                          break;
                        case 'timeLimit':
                          // 一定时间后自动注销模块
                          setTimeout(() => {
                            if (this.$store.hasModule(vuexModuleName)) {
                                this.$store.unregisterModule(vuexModuleName);
                                console.log(`Module "${vuexModuleName}" unregistered on time limit.`);
                            }
                          }, 10000);
                        //   setTimeout(() => alert("timelimit"), 10000);
                          break;
                        default:
                          console.warn(`Unknown extent type "${vuexModule.extent}" for module "${vuexModuleName}".`)
                      }
                }
            }
        },
        beforeUnmount() {
            const vuexModule = this.$options.vuexModule
            if(vuexModule && vuexModule.name){
                const vuexModuleName = vuexModule.name
                if(this.$store.hasModule(vuexModuleName)){
                    switch (vuexModule.extent) {
                        case 'session':
                          break;
                        case 'component':
                            console.log(`Unregistering module "${vuexModuleName}" on component unmount.`)
                            this.$store.unregisterModule(vuexModuleName)
                            break;
                        default:
                          console.warn(`Unknown extent type "${vuexModule.extent}" for module "${vuexModuleName}".`)
                          this.$store.unregisterModule(vuexModuleName)
                      }
                    
                }
            }
        },
    })
}
export default vuexLazyLoad