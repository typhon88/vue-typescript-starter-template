<template>
  <div class="login">
    <h1>This is a login page</h1>
    <p>Anyone can see this page</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component
export default class LogIn extends Vue {

}

</script>