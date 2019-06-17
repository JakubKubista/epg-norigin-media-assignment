<template>
  <v-app>
    <Toolbar :iconLeft="toolbarIconLeft"
             :background="toolbarBackground" />

    <v-content>
      <router-view />
    </v-content>

    <BottomNavigation @navigationChanged="goTo($event)" />
  </v-app>
</template>

<script>
import Toolbar from "@/components/layout/Toolbar";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default {
  name: "App",
  components: {
    Toolbar,
    BottomNavigation
  },
  computed: {
    toolbarIconLeft() {
      return this.$route.name === "list" ? "person" : "arrow_back_ios";
    },
    toolbarBackground() {
      return this.$route.name === "list" ? "#000000" : "rgba(0,0,0,0.7)";
    }
  },
  methods: {
    goTo(event) {
      let url = event !== "list" ? "/not-implemented" : "/";
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
