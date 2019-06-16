<template>
  <v-tabs v-model="active"
          show-arrows
          dark
          hide-slider
          centered
          color="#252525"
          @change="$emit('changed', $event)">

    <v-tab v-for="i in count"
           :key="i"
           :href="'#tab-' + i">
      <Tab :order="i" />
    </v-tab>

    <!-- It would be better to have epg service with a day parameter,
    because like this we would send very large amount of data. Then
    we can use lazyloading for each day and the app will be faster. -->
    <v-tabs-items v-dragscroll
                  class="md-tab-date-content">
      <v-tab-item v-for="i in count"
                  :key="i"
                  :value="'tab-' + i">
        <Content v-if="i===middle" />
        <h2 v-else
            class="md-message-content-centred">
          {{ notAvailable }}
        </h2>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import Dates from "@/utils/constants/dates";
import Labels from "@/utils/constants/labels";
import Content from "@/components/modules/list/TabsContent";
import Tab from "@/components/modules/list/TabsTab";
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
    count: () => Dates.count,
    middle: () => Dates.count / 2,
    notAvailable: () => Labels.message.fullScreen.notAvailable
  },
  methods: {
    defaultTab() {
      this.active = "tab-" + this.middle;
    }
  },
  directives: {
    dragscroll: dragscroll
  },
  mounted() {
    this.defaultTab();
  }
};
</script>
