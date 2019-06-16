<template>
  <v-card class="md-card-schedule"
          @click="onClick">
    <div><b> {{ title }} </b></div>
    <div class="subtitle"> {{ subtitle }} </div>
  </v-card>
</template>

<script>
import Dates from "@/utils/base/dates";

export default {
  name: "card-schedule",
  props: {
    title: String,
    start: String,
    end: String
  },
  data() {
    return {
      active: false,
      subtitle: "",
      length: null
    };
  },
  watch: {
    active() {
      this.toggleActive();
    }
  },
  computed: {
    dates: () => Dates
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
    setWidth() {
      this.length = Dates.getMinuteDiffOfDates(this.start, this.end);
      this.$el.style.width = this.length * 4 + "px"; // range: 20 - 240
    },
    setActive() {
      let current = new Date();
      this.active = (current >= this.start && current <= this.end);
      if (this.active) this.toggleActive();
    },
    toggleActive() {
      this.$el.classList.toggle("md-card-schedule-active");
    }
  },
  mounted() {
    this.setWidth();
    this.setActive();
    this.subtitle = this.end;
  }
};
</script>

<style lang="scss">
.subtitle {
  opacity: 0.6;
  font-size: 10px;
}
</style>
