<template>
  <v-app>
    <Toolbar :iconLeft="toolbarIconLeft"
             :background="toolbarBackground" />

    <v-content>
      <Home v-if="activeNavigation=='list'" />
      <h2 v-else
          class="message-centred"> {{ defaultText }} </h2>
    </v-content>

    <BottomNavigation @navigationChanged="activeNavigation=$event" />
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import BottomNavigation from "@/components/BottomNavigation";

import Home from "@/views/Home";

export default {
  name: "App",
  components: {
    Toolbar,
    BottomNavigation,
    Home
  },
  data() {
    return {
      toolbarIconLeft: "person",
      toolbarBackground: "#000000",
      activeNavigation: "list",
      defaultText: "Comming soon"
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
