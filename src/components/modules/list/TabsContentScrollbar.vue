<template>
  <div class="md-scrollbar">
    <div class="md-invisibile">
      <Timeline />
    </div>
  </div>
</template>

<script>
import Scrollbar from "@/utils/base/scrollbar";
import Timeline from "@/components/base/Timeline";
import { clearTimeout } from "timers";

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
  },
  mounted() {
    this.scrollbar.addEventListener("scroll", this.handleScroll);

    // timout is added because of 1st mounted loop delay about DOM
    clearTimeout(this.timeout);
    this.timeout = null;
    this.timeout = setTimeout(() => {
      Scrollbar.setDefaultScrollPosition();
    }, 1);
  },
  beforeDestroy() {
    this.scrollbar.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
