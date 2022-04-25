import Demo from './src/main.vue'
Demo.install=(Vue)=>{
    console.log(Demo)
    Vue.component(Demo.name,Demo)
}
export default Demo;
