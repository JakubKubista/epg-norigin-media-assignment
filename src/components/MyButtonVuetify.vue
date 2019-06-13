<template>
  <v-btn @click="onClick" color="success">Success</v-btn>
</template>

<script>
export default {
  name: "my-button-vuetify",

  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>