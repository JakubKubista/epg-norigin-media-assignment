<template>
  <v-card class="md-card-schedule"
          @click="onClick">
    <div><b> {{ title }} </b></div>
    <div class="subtitle"> {{ subtitle }} </div>
  </v-card>
</template>

<script>
export default {
  name: "button-square",
  props: {
    title: String,
    subtitle: String,
    active: Boolean,
    length: Number
  },
  watch: {
    active() {
      this.toggleActive();
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
    toggleActive() {
      document
        .querySelector(".md-card-schedule")
        .classList.toggle("md-card-schedule-on");
    }
  },
  mounted() {
    if (this.active) this.toggleActive();
  }
};
</script>

<style>
.subtitle {
  opacity: 0.6;
}
</style>
