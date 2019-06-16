<template>
  <v-tooltip right>
    <template v-slot:activator="{ on }">
      <v-btn dark
             fab
             v-on="on"
             class="md-button-square md-button-logo">
        <v-img :src="logo"
               :max-width="36" />
      </v-btn>
    </template>
    <span> {{ title }} </span>
  </v-tooltip>
</template>

<script>
export default {
  name: "button-logo",
  props: {
    logo: String,
    title: String,
    index: Number
  },
  data() {
    return {
      top: null
    };
  },
  methods: {
    setPosition() {
      let topActual = Number(
        getComputedStyle(this.$el.children[0]).top.slice(0, -2)
      );
      this.top = topActual + this.index * 48 + "px";
      this.$el.children[0].style.top = this.top;
    }
  },
  mounted() {
    this.setPosition();
  }
};
</script>
