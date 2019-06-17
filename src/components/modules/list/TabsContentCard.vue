<template>
  <v-card class="md-card-schedule"
          @click="$emit('clicked', $event)">
    <div class="md-title"> {{ title }} </div>
    <span class="md-subtitle"> {{ subtitle }} </span>
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
      length: null,
      interval: null
    };
  },
  computed: {
    dates: () => Dates
  },
  methods: {
    setSubtitle() {
      let start = Dates.getHourAndMinute(new Date(this.start));
      let end = Dates.getHourAndMinute(new Date(this.end));
      this.subtitle = start + " - " + end;
    },
    setWidth() {
      this.length = Dates.getMinuteDiffOfDates(this.start, this.end);
      this.$el.style.width = this.length * 4 + "px"; // range: 20 - 240
    },
    setActive() {
      let now = new Date();
      let active = now >= new Date(this.start) && now <= new Date(this.end);
      if (this.active != active) this.toggleActive();
    },
    toggleActive() {
      this.active = !this.active;
      this.$el.classList.toggle("md-card-schedule-active");
    },
    loopActive() {
      clearInterval(this.interval);
      this.interva = null;
      this.interval = setInterval(() => {
        this.setActive();
      }, 60000);
    }
  },
  mounted() {
    this.setSubtitle();
    this.setWidth();
    this.setActive();
    this.loopActive();
  }
};
</script>

<style lang="scss">
.md-title {
  overflow: hidden;
}
.md-subtitle {
  opacity: 0.6;
  font-size: 10px;
}
</style>
