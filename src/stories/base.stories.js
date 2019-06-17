/* eslint-disable import/no-extraneous-dependencies */
import {
  storiesOf
} from "@storybook/vue";
import {
  action
} from "@storybook/addon-actions";

import ButtonIcon from "@/components/base/ButtonIcon.vue";
import ButtonLogo from "@/components/base/ButtonLogo.vue";
import Timeline from "@/components/base/Timeline.vue";

import "@/assets/styles/main.scss";

storiesOf("Base", module)
  .add(
    "ButtonIcon",
    () => ({
      components: {
        ButtonIcon
      },
      computed: {
        icon: () => "star",
      },
      template: '<ButtonIcon @click="action" :icon="icon" style="left: 0px;" />',
      methods: {
        action: action("clicked")
      }
    }), {
      notes: "Square toggle button for change EPG content."
    })
  .add(
    "ButtonLogo",
    () => ({
      components: {
        ButtonLogo
      },
      computed: {
        logo: () => "https://img.noriginmedia.com/cloudberry/logo_sky1.png",
        title: () => "Sky1",
      },
      template: '<ButtonLogo :logo="logo" :title="title" />',
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