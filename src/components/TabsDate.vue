<template>
  <v-tabs v-model="active"
          show-arrows
          dark
          hide-slider
          color="#252525">

    <v-tab v-for="i in constants.count"
           :key="i"
           :href="'#tab-' + i"
           class="md-tabs-date">
      {{ base.getDayOfWeekInOrder(i) }}
      <br />
      {{ base.getDayAndMonthInOrder(i) }}
    </v-tab>

    <v-tabs-items>
      <v-tab-item v-for="i in constants.count"
                  :key="i"
                  :value="'tab-' + i">
        <div v-dragscroll class="tab-content">
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
import { dragscroll } from 'vue-dragscroll';

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
