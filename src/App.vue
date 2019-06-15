<template>
  <v-app>
    <Toolbar :iconLeft="toolbarIconLeft"
             :background="toolbarBackground" />

    <v-content>
      <List v-if="activeNavigation==='list'" />
      <h2 v-else
          class="md-message-centred">
        {{ notImplemented }}
      </h2>
    </v-content>

    <BottomNavigation @navigationChanged="activeNavigation=$event" />
  </v-app>
</template>

<script>
import Labels from "@/utils/constants/labels";
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
      activeNavigation: "list"
    };
  },
  computed: {
    notImplemented: () => Labels.message.fullScreen.notImplemented
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
