<template>
  <v-tabs v-model="active"
          show-arrows
          dark
          hide-slider
          class="md-content-program"
          color="#252525">

    <v-tab v-for="i in constants.count"
           :key="i"
           :href="'#tab-' + i"
           class="md-tab-date">
      {{ base.getDayOfWeekInOrder(i) }}
      <br />
      {{ base.getDayAndMonthInOrder(i) }}
    </v-tab>

    <v-tabs-items v-dragscroll class="md-tab-date-content">
      <v-tab-item v-for="i in constants.count"
                  :key="i"
                  :value="'tab-' + i">
        <div>
          <Timeline />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import Base from "@/utils/base/dates";
import Constants from "@/utils/constants/dates";

import Timeline from "@/components/Timeline";
import { dragscroll } from "vue-dragscroll";

export default {
  name: "tabs-date",
  components: {
    Timeline
  },
  data() {
    return {
      active: null
    };
  },
  computed: {
    base: () => Base,
    constants: () => Constants
  },
  methods: {
    defaultTab() {
      this.active = "tab-" + Constants.count / 2;
    }
  },
  directives: {
    'dragscroll': dragscroll
  },
  mounted() {
    this.defaultTab();
  }
};
</script>
