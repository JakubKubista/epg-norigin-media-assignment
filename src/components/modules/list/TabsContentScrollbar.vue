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
import { clearTimeout } from 'timers';

export default {
  name: "scrollbar",
  components: {
    Timeline
  },
  data() {
    return {
      position: 0,
      timeout: null
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
    let that = this;
     // timout is added because of 1st mounted loop delay about DOM
    clearTimeout(this.timeout);
    this.timeout = null;
    this.timeout = setTimeout(() => {
      that.setDefaultScrollPosition();
    }, 1);
  },
  beforeDestroy() {
    this.scrollbar.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
