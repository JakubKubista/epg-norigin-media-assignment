<template>
  <div>
    <div class="md-scrollbar">
      <div class="md-invisibile">
        <Timeline />
      </div>
    </div>
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

export default {
  name: "list-content",
  components: {
    Timeline,
    ButtonLogo,
    CardSchedule
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
    },
    handleScroll(event) {
      this.$el.querySelector(".md-content").scrollLeft = this.$el.querySelector(
        ".md-scrollbar"
      ).scrollLeft;
    }
  },
  mounted() {
    this.$el
      .querySelector(".md-scrollbar")
      .addEventListener("scroll", this.handleScroll);
    this.getChannels();
  },
  destroyed() {
    this.$el
      .querySelector(".md-scrollbar")
      .removeEventListener("scroll", this.handleScroll);
  }
};
</script>
