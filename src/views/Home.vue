<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term = {{search}}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
  </div>
</template>

<script>

import {computed, ref, watchEffect} from 'vue'

export default {
  name:'Home',
  setup(){
    const search = ref('')
    const names = ref(['mario','luigi','yoshy' , 'bowser', 'koopa','tody'])

    watch(search,()=>{
      console.log('a')
    })

    watchEffect(()=>{
      console.log()
    })

    const matchingNames = computed(()=>{
      return names.value.filter((name)=>name.includes(search.value))
    })

      return {names, search, matchingNames}
  }
}
</script>

<style>
</style>