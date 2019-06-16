<template>
  <div>
    <Scrollbar />
    <div class="md-content">
      <Timeline />

      <div v-for="(channel, index) in channels"
           :key="index">
        <div class="md-list-schedule">
          <ButtonLogo :logo="channel.images.logo"
                      :title="channel.title"
                      :index="index" />
          <div v-for="(schedule, index)  in channel.schedules"
               :key="index"
               class="md-schedule">
            <Card :title="schedule.title"
                  :start="schedule.start"
                  :end="schedule.end" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Api from "@/utils/config/api";
import Axios from "axios";
import Timeline from "@/components/base/Timeline";
import ButtonLogo from "@/components/base/ButtonLogo";
import Card from "@/components/modules/list/TabsContentCard";
import Scrollbar from "@/components/modules/list/TabsContentScrollbar";

export default {
  name: "list-content",
  components: {
    Timeline,
    ButtonLogo,
    Card,
    Scrollbar
  },

  computed: {
    ...mapState('list', ['channels']),
  },
  methods: {
    ...mapActions('list', ['updateChannels']),
    getChannels() {
      Api.callService({ method: "get", service: "epg" }).then(response => {
        this.updateChannels(response.data.channels);
        console.log(this.channels);
      });
    }
  },
  mounted() {
    this.getChannels();
  }
};
</script>
