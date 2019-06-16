<template>
  <div class="md-scrollbar">
    <div class="md-invisibile">
      <Timeline />
    </div>
  </div>
</template>

<script>
import Dates from "@/utils/base/dates";
import Timeline from "@/components/base/Timeline";

export default {
  name: "scrollbar",
  components: {
    Timeline
  },
  data() {
    return {
      position: 0
    };
  },
  computed: {
    scrollbar: () => document.querySelector(".md-scrollbar")
  },
  methods: {
    handleScroll(event) {
      document.querySelector(
        ".md-content"
      ).scrollLeft = this.scrollbar.scrollLeft;
    },
    setDefaultScrollPosition() {
      let scrollbarMax =
        this.scrollbar.scrollWidth - this.scrollbar.clientWidth;
      let timeProportion = Dates.getTodayTimeProportion();
      this.scrollbar.scrollLeft = (scrollbarMax * timeProportion) / 100;
    }
  },
  mounted() {
    this.scrollbar.addEventListener("scroll", this.handleScroll);
  },
  updated() {
    this.setDefaultScrollPosition();
  },
  beforeDestroy() {
    this.scrollbar.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
