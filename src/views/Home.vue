<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>This is the Home page</h2>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/login">Go to LogIn</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
