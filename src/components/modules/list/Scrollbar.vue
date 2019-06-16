<template>
  <div class="md-scrollbar">
    <div class="md-invisibile">
      <Timeline />
    </div>
  </div>
</template>

<script>
import Timeline from "@/components/base/Timeline";

export default {
  name: "scrollbar",
  components: {
    Timeline
  },
  methods: {
    handleScroll(event) {
      document.querySelector(".md-content").scrollLeft = document.querySelector(
        ".md-scrollbar"
      ).scrollLeft;
    }
  },
  mounted() {
    document
      .querySelector(".md-scrollbar")
      .addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document
      .querySelector(".md-scrollbar")
      .removeEventListener("scroll", this.handleScroll);
  }
};
</script>
