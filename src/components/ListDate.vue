<template>
  <v-tabs dark
          color="$color-secondary"
          v-model="active"
          show-arrows>
    <v-tabs-slider color="$color-secondary"></v-tabs-slider>

    <v-tab v-for="i in constants.count"
           :key="i"
           :href="'#tab-' + i"
           style="text-transform: capitalize">
      {{ base.getDayOfWeekInOrder(i) }}
      <br />
      {{ base.getDayAndMonthInOrder(i) }}
    </v-tab>

    <v-tabs-items>
      <v-tab-item v-for="i in constants.count"
                  :key="i"
                  :value="'tab-' + i">
        <v-card flat>
          <v-card-text><!-- Content Component --></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import Base from "@/utils/base/dates";
import Constants from "@/utils/constants/dates";

export default {
  name: "my-button-vuetify",
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
        this.active = "tab-" + Constants.count/2;
    },
  },
  mounted() {
    this.defaultTab();
  }
};
</script>
