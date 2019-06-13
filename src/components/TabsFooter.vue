<template>
  <div>
    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="i in 5"
                  :key="i"
                  :value="'mobile-tabs-5-' + i">
        <v-card>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-tabs v-model="tabs"
            fixed-tabs
            hide-slider
            grow
            dark
            color="#252525">

      <v-tab v-for="i in 5"
             :key="i"
             :href="'#mobile-tabs-5-' + i"
             class="primary--text">
        <v-icon v-if="tabs=='mobile-tabs-5-' + i"
                color="#E8A61D"> {{ icons[i-1] }} </v-icon>
        <v-icon v-else> {{ icons[i-1] }} </v-icon>
      </v-tab>

    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: "mobile-tabs-5-3",
      icons: ["home", "live_tv", "list", "replay", "local_library"],
      text: "Element"
    };
  }
};
</script>
