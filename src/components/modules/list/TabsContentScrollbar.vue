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
  computed: {
    scrollbar: () => document.querySelector(".md-scrollbar")
  },
  methods: {
    handleScroll(event) {
      document.querySelector(".md-content").scrollLeft = this.scrollbar.scrollLeft;
    }
  },
  mounted() {
    this.scrollbar.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.scrollbar.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
