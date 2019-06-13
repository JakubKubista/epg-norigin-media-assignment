<template>
  <v-toolbar :color="background"
             dark>
    <v-btn icon>
      <v-icon> {{ iconLeft }} </v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-img :src="imgPath"></v-img>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "toolbar",
  props: {
    iconLeft: String,
    background: String
  },
  data() {
    return {
      //
    };
  },
  computed: {
    imgPath: () => require("@/assets/images/logo.png")
  }
};
</script>
