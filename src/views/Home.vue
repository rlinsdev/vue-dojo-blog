<template>
  <div class="home">
    <p ref="p">My name is {{name}} and my age is {{age}}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>

import {ref} from 'vue'

export default {
  name: 'Home',
  setup () {
  
  console.log('setup')

  const p = ref(null)

  let name = 'Mario'
  let age = 38

  const handleClick = () =>{
    console.log(p, p.value)
    p.value.classList.add('test')
    p.value.textContext='hello, ninjas'
  }

  return {name, age, p , handleClick}
  },
  
}
</script>
