<template>
  <v-bottom-nav :active.sync="activeNavigation"
                :value="true"
                absolute
                color="#252525"
                dark
                shift
                @update:active="$emit('navigationChanged', $event)">

    <v-btn v-for="icon in icons"
           :key="icon"
           color="#E8A61D"
           flat
           :value="icon">

      <span>{{ getTitle(icon) }}</span>
      <v-icon> {{ icon }} </v-icon>
    </v-btn>

  </v-bottom-nav>
</template>

<script>
export default {
  name: "tabs-footer",
  data() {
    return {
      activeNavigation: "list",
      icons: ["home", "live_tv", "list", "replay", "local_library"]
    };
  },
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    getTitle(icon) {
      return this.capitalize(icon.split("_")[0]);
    }
  }
};
</script>
