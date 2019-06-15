/* eslint-disable import/no-extraneous-dependencies */
import {
  storiesOf
} from "@storybook/vue";
import {
  action
} from "@storybook/addon-actions";
import {
  linkTo
} from "@storybook/addon-links";

import ButtonToggle from "@/components/base/ButtonToggle.vue";
import CardSchedule from "@/components/base/CardSchedule.vue";
import Timeline from "@/components/base/Timeline.vue";

import "@/assets/styles/main.scss";

storiesOf("Base", module)
  .add(
    "ButtonToggle",
    () => ({
      components: {
        ButtonToggle
      },
      computed: {
        icon: () => "star",
      },
      template: '<ButtonToggle @click="action" :icon="icon" />',
      methods: {
        action: action("clicked")
      }
    }), {
      notes: "Square toggle button for change EPG content."
    })
  .add(
    "CardSchedule",
    () => ({
      components: {
        CardSchedule
      },
      computed: {
        title: () => "Vikings",
        subtitle: () => "14:20 - 15:20",
        active: () => true,
        length: () => 60
      },
      template: '<CardSchedule @click="action" :title="title" :subtitle="subtitle" :active="active" :length="length" />',
      methods: {
        action: linkTo("Components", "ButtonToggle")
      }
    }), {
      notes: "Single element for each show."
    })
  .add(
    "Timeline",
    () => ({
      components: {
        Timeline
      },
      template: '<Timeline />'
    }), {
      notes: "Static timeline for program walkthrow."
    }
  );