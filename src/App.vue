<script setup>
import { ref } from "@vue/reactivity";
import Header from "./components/Header/Header.vue";
</script>

<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <br />
    <div>
      
        <!-- <router-view></router-view> -->
      <router-view v-slot="{ Component  }">
        <keep-alive include="Home,Orders">
          <component :is="Component " />
        </keep-alive>
      </router-view>
      
    
     

    </div>
  </div>

</template>

<script>
 var {a,b,c}={"c":10,"b":9,"a":8}
 console.log({a,b,c});
console.log(ref.apply);
</script>
<style>

</style>
