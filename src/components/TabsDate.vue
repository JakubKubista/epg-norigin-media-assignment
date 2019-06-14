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
        <v-card flat>
          <v-card-text>
            <!-- Content Component -->
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import Base from "@/utils/base/dates";
import Constants from "@/utils/constants/dates";

export default {
  name: "tabs-date",
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
  mounted() {
    this.defaultTab();
  }
};
</script>
