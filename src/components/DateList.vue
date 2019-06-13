<template>
  <v-tabs dark color="cyan" show-arrows>
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i">Item {{ i }}</v-tab>

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
export default {
  name: "my-button-vuetify",
  data() {
    return {
      content: "text"
    };
  }
};
</script>