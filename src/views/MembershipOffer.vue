<template>
  <div class="login">
    <h1>This is a Membership Offer page, redirect non members here to sign up</h1>
    <p>Anyone can see this page</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component
export default class MembershipOffer extends Vue {

}

</script>