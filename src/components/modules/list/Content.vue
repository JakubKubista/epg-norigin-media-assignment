<template>
  <div>
    <Timeline />
    <ButtonLogo :logo="'https://img.noriginmedia.com/cloudberry/logo_sky1.png'" />
  </div>
</template>

<script>
import Api from "@/utils/config/api";
import Axios from "axios";
import Timeline from "@/components/base/Timeline";
import ButtonLogo from "@/components/base/ButtonLogo";

export default {
  name: "list-content",
  components: {
    Timeline,
    ButtonLogo
  },
  data() {
    return {
      channels: null,
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
