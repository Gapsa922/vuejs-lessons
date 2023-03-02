<template>
  <h1>{{title}}</h1>
<!--   <input type="text" ref="name">
  <button @click="handleClick">Click me</button> -->
  <Modal :header="header" :text="text" theme='sale'/> <!-- the two dots means binding; example-binding a string with boolean  -->
  <br/>
  <Modal :header="header" :text="text" :theme='dark'/>  <!-- Why it prints dark if theres a binding? -->
  
</template>
<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{ Modal },
  data(){
    return{
      title:'My First Vue app',
      header:'Sign in the give away',
      text:'Buy for half price'
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      //is going to add a class in input as active
      this.$refs.name.focus()
      //is going to focus the input field
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
