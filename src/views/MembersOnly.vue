<template>
  <div class="login">
    <h1>This is a Members Only page</h1>
    <p>The user needs to be logged in to view this page.</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component
export default class MembersOnly extends Vue {

}

</script>