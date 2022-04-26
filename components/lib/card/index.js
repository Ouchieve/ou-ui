import Card from './src/main.vue'
Card.install=(Vue)=>{
    console.log(Card)
    Vue.component(Card.name,Card)
}
export default Card;
