<template>
  <v-card @click="onClick">
    <span> {{ title }} </span>
    <span class="subtitle"> {{ subtitle }} </span>
  </v-card>
</template>

<script>
export default {
  name: "button-square",
  props: {
    title: String,
    subtitle: String
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>