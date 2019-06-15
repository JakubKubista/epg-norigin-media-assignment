<template>
  <v-btn dark
         fab
         class="md-button-square">
    <v-img :src="logo" :max-width="36" />
  </v-btn>
</template>

<script>
export default {
  name: "square-logo",
  props: {
    logo: String,
  },
};
</script>