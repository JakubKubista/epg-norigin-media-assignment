<template>
  <v-app>
    <Toolbar :iconLeft="toolbarIconLeft"
             :background="toolbarBackground" />

    <v-content>
      <List v-if="activeNavigation=='list'" />
      <h2 v-else
          class="md-message-centred"> {{ defaultText }} </h2>
    </v-content>

    <BottomNavigation @navigationChanged="activeNavigation=$event" />
  </v-app>
</template>

<script>
import Toolbar from "@/components/layout/Toolbar";
import BottomNavigation from "@/components/layout/BottomNavigation";

import List from "@/views/List";

export default {
  name: "App",
  components: {
    Toolbar,
    BottomNavigation,
    List
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
