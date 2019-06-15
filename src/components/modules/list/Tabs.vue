<template>
  <v-tabs v-model="active"
          show-arrows
          dark
          hide-slider
          class="md-content-program"
          color="#252525">

    <v-tab v-for="i in constants.count"
           :key="i"
           :href="'#tab-' + i">
      <Tab :order="i" />
    </v-tab>

    <v-tabs-items v-dragscroll
                  class="md-tab-date-content">
      <v-tab-item v-for="i in constants.count"
                  :key="i"
                  :value="'tab-' + i">
          <Content />
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import Constants from "@/utils/constants/dates";
import Content from "@/components/modules/list/Content";
import Tab from "@/components/modules/list/Tab";
import { dragscroll } from "vue-dragscroll";

export default {
  name: "tabs-date",
  components: {
    Content,
    Tab
  },
  data() {
    return {
      active: null
    };
  },
  computed: {
    constants: () => Constants
  },
  methods: {
    defaultTab() {
      this.active = "tab-" + Constants.count / 2;
    },
  },
  directives: {
    dragscroll: dragscroll
  },
  mounted() {
    this.defaultTab();
  }
};
</script>
