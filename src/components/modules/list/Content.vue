<template>
  <div>
    <Scrollbar />
    <div class="md-content">
      <Timeline />

      <div v-for="channel in channels"
           :key="channel.id">
        <div class="md-list-schedule">
          <ButtonLogo :logo="channel.images.logo"
                      :title="channel.title" />
          <div v-for="(schedule, index)  in channel.schedules"
               :key="index"
               class="md-schedule">
            <CardSchedule :title="schedule.title"
                          :start="schedule.start"
                          :end="schedule.end" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Api from "@/utils/config/api";
import Axios from "axios";
import Timeline from "@/components/base/Timeline";
import ButtonLogo from "@/components/base/ButtonLogo";
import CardSchedule from "@/components/base/CardSchedule";
import Scrollbar from "@/components/modules/list/Scrollbar";

export default {
  name: "list-content",
  components: {
    Timeline,
    ButtonLogo,
    CardSchedule,
    Scrollbar
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
        console.log(this.channels);
      });
    }
  },
  mounted() {
    this.getChannels();
  }
};
</script>
