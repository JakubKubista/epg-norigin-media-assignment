/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Toolbar from "@/components/Toolbar.vue";
import TabsDate from "@/components/TabsDate.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";
import ButtonToggle from "@/components/ButtonToggle.vue";
import CardSchedule from "@/components/CardSchedule.vue";

import "@/assets/styles/main.scss";

storiesOf("Components", module)
  .add(
    "Toolbar",
    () => ({
      components: { Toolbar },
      computed: {
        iconLeft: () => 'person',
        background: () => '#000000'
      },
      template: '<Toolbar :iconLeft="iconLeft" :background="background" />'
    }),
    {
      notes: "Modified Toolbar for home and detail page."
    }
  )
  .add(
    "TabsDate",
    () => ({
      components: { TabsDate },
      template: '<TabsDate />'
    }),
    {
      notes: "Tabs for date selection. Today is default."
    }
  )
  .add(
    "BottomNavigation",
    () => ({
      components: { BottomNavigation },
      template: '<BottomNavigation />'
    }),
    {
      notes: "The main navigation of application."
    }
  )
  .add(
    "ButtonToggle",
    () => ({
      components: { ButtonToggle },
      computed: {
        icon: () => 'star',
      },
      template: '<ButtonToggle @click="action" :icon="icon" />>',
      methods: { action: action("clicked") }
    }))
  .add(
    "CardSchedule",
    () => ({
      components: { CardSchedule },
      computed: {
        title: () => 'Vikings',
        subtitle: () => '14:20 - 15:20',
      },
      template: '<CardSchedule @click="action" :title="title" :subtitle="subtitle" />>',
      methods: { action: linkTo("Components", "ButtonToggle") }
    }));
