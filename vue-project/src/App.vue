<script setup>
import {ref} from "vue";
const count = ref(0) ; 

const addTocount = () =>{
  console.log("Hello form add to count")
  count.value =count.value +1
}
const substractFromCount=()=>{
  console.log("Hello form add to count")
  count.value = count.value -1
}

</script>

<template>
<main>
  <div>
    <h4>
    算數囉
    </h4>
    <h1>{{count}}</h1>
    <button @click="substractFromCount">-</button>
    <button @click="addTocount">+</button>
  </div>
</main>
</template>

<style scoped>
  main{
    background-color: black;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div{
    text-align: center;
  }
</style>