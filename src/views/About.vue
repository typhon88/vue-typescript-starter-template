<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Anyone can see this page</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {

}

</script>
