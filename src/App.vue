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
  data() {
    return {
      toolbarIconLeft: "person",
      toolbarBackground: "#000000"
    };
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
