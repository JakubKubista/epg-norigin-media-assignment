<template>
  <v-btn dark
         fab
         @click="onClick"
         class="md-button-square md-button-icon">
    <v-icon class="md-color-button-off"> {{ icon }} </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "button-icon",
  props: {
    icon: String,
  },
  data() {
    return {
      active: false
    };
  },
  watch: {
    active() {
      this.toggleActive();
    }
  },
  methods: {
    onClick() {
      this.active = !this.active;
      this.$emit("click", this.active);
    },
    toggleActive() {
      document
        .querySelector(".md-color-button-off")
        .classList.toggle("md-color-button-on");
    }
  }
};
</script>