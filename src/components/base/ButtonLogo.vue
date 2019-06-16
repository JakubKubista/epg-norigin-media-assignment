<template>
  <v-tooltip right>
    <template v-slot:activator="{ on }">
      <v-btn dark
             fab
             v-on="on"
             class="md-button-square md-button-logo">
        <v-img :src="logo"
               :max-width="36" />
      </v-btn>
    </template>
    <span> {{ title }} </span>
  </v-tooltip>
</template>

<script>
export default {
  name: "button-logo",
  props: {
    logo: String,
    title: String
  }
};
</script>