<template>
  <div div class="md-content">
    <Timeline />
    <div class="md-list-schedule">
      <ButtonLogo :logo="'https://img.noriginmedia.com/cloudberry/logo_sky1.png'" />
      <CardSchedule :title="card.title"
                    :subtitle="card.subtitle"
                    :active="card.active"
                    :length="card.length" />
      <CardSchedule :title="card.title"
                    :subtitle="card.subtitle"
                    :active="card.active"
                    :length="card.length" />
      <CardSchedule :title="card.title"
                    :subtitle="card.subtitle"
                    :active="card.active"
                    :length="card.length" />
      <CardSchedule :title="card.title"
                    :subtitle="card.subtitle"
                    :active="card.active"
                    :length="card.length" />
    </div>
    <div class="md-list-schedule">
      <ButtonLogo :logo="'https://img.noriginmedia.com/cloudberry/logo_sky1.png'" />
      <CardSchedule :title="card.title"
                    :subtitle="card.subtitle"
                    :active="card.active"
                    :length="card.length" />
      <CardSchedule :title="card.title"
                    :subtitle="card.subtitle"
                    :active="true"
                    :length="card.length" />
    </div>
  </div>
</template>

<script>
import Api from "@/utils/config/api";
import Axios from "axios";
import Timeline from "@/components/base/Timeline";
import ButtonLogo from "@/components/base/ButtonLogo";
import CardSchedule from "@/components/base/CardSchedule";

export default {
  name: "list-content",
  components: {
    Timeline,
    ButtonLogo,
    CardSchedule
  },
  data() {
    return {
      channels: null,
      card: {
        title: "Vikings",
        subtitle: "14:20 - 15:20",
        active: false,
        length: 60
      }
    };
  },
  methods: {
    getChannels() {
      Api.callService({ method: "get", service: "epg" }).then(response => {
        this.channels = response.data.channels;
        console.log(this.channels);
      });
    }
  },
  mounted() {
    this.getChannels();
  }
};
</script>
