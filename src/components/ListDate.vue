<template>
  <v-tabs dark color="cyan" show-arrows>
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i">{{ dates.getDate() }} {{ i }}</v-tab>

    <v-tabs-items>
      <v-tab-item v-for="i in 30" :key="i" :value="'tab-' + i">
        <v-card flat>
          <v-card-text>{{ content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import Dates from "@/utils/base/dates";

export default {
  name: "my-button-vuetify",
  data() {
    return {
      content: "text"
    };
  },
  computed: {
    dates: () => Dates
  }
};
</script>