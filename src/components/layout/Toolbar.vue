<template>
  <v-toolbar :color="background"
             dark
             fixed>
    <v-btn icon
           @click="goBack">
      <v-icon> {{ iconLeft }} </v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-img :src="img" />
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
    iconLeft: String, // person or back
    background: String // transparent or #000000
  },
  computed: {
    img: () => require("@/assets/images/logo.png")
  },
  methods: {
    goBack() {
      if (this.$route.name === "details") this.$router.back();
      document.getElementById("app").style.backgroundColor = "#181818";
    }
  }
};
</script>
