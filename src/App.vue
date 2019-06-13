<template>
  <v-app>
    <Toolbar :iconLeft="toolbarIconLeft"
             :background="toolbarBackground" />

    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="i in 5"
                  :key="i"
                  :value="'mobile-tabs-5-' + i">

        <v-content>
          <Home v-if="tabs=='mobile-tabs-5-3'" />
          <h2 v-else class="message-centred"> {{ defaultText }} </h2>
        </v-content>

      </v-tab-item>
    </v-tabs-items>

    <TabsFooter @navigationChanged="updateTabs(field = $event)" />
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import TabsFooter from "@/components/TabsFooter";

import Home from "@/views/Home";

export default {
  name: "App",
  components: {
    Toolbar,
    TabsFooter,
    Home
  },
  data() {
    return {
      toolbarIconLeft: "person",
      toolbarBackground: "#000000",
      tabs: "mobile-tabs-5-3",
      defaultText: "Comming soon"
    };
  },
  methods: {
    updateTabs(input) {
      this.tabs = input;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
