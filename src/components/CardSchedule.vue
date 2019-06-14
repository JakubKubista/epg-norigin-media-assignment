<template>
  <v-card class="md-card-schedule"
          @click="onClick">
    <div><b> {{ title }} </b></div>
    <div class="subtitle"> {{ subtitle }} </div>
  </v-card>
</template>

<script>
export default {
  name: "card-schedule",
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
      this.$el.classList.toggle("md-card-schedule-active");
    }
  },
  mounted() {
    if (this.active) this.toggleActive();
  }
};
</script>

<style lang="scss">
.subtitle {
  opacity: 0.6;
}
</style>
