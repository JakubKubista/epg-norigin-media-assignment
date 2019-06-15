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

import CardSchedule from "@/components/base/CardSchedule.vue";
import SquareButton from "@/components/base/SquareButton.vue";
import SquareLogo from "@/components/base/SquareLogo.vue";
import Timeline from "@/components/base/Timeline.vue";

import "@/assets/styles/main.scss";

storiesOf("Base", module)
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
        action: linkTo("Components", "SquareButton")
      }
    }), {
      notes: "Single element for each show."
    })
  .add(
    "SquareButton",
    () => ({
      components: {
        SquareButton
      },
      computed: {
        icon: () => "star",
      },
      template: '<SquareButton @click="action" :icon="icon" />',
      methods: {
        action: action("clicked")
      }
    }), {
      notes: "Square toggle button for change EPG content."
    })
  .add(
    "SquareLogo",
    () => ({
      components: {
        SquareLogo
      },
      computed: {
        logo: () => "https://img.noriginmedia.com/cloudberry/logo_sky1.png",
      },
      template: '<SquareLogo :logo="logo" />',
      methods: {
        action: action("clicked")
      }
    }), {
      notes: "Square toggle button for change EPG content."
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