<template>
  <div>
    <v-btn dark
           fab
           class="md-button-square md-button-logo">
      <v-img :src="logo"
             :max-width="36" />
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "button-logo",
  props: {
    logo: String
  }
};
</script>