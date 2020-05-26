<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>This is the Home page</h2>
    <p>Anyone can see this page</p>
    <HelloWorld></HelloWorld>
    <ul>
      <li><router-link to="/about">Go to About</router-link></li>
      <li><router-link to="/login">Go to LogIn</router-link></li>
      <li><router-link to="/members">Go to Members</router-link></li>
      <li><router-link to="/memberships">Go to Memberships</router-link></li>
      <li><router-link to="/profile/34">Go to Profile</router-link></li>
    </ul>
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
