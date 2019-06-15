<template>
  <div>
    <Timeline />
  </div>
</template>

<script>
import Api from "@/utils/config/api";
import Axios from "axios";

import Timeline from "@/components/base/Timeline";

export default {
  name: "list-content",
  components: {
    Timeline
  },
  data() {
    return {
      channels: null
    };
  },
  methods: {
    getChannels() {
      Api.callService({ method: "get", service: "epg" }).then(response => {
        this.channels = response.data.channels;
        console.log(this.channels)
      });
    }
  },
  mounted() {
    this.getChannels();
  }
};
</script>
