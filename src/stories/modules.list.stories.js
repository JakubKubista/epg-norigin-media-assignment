/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  linkTo
} from "@storybook/addon-links";

import Tabs from "@/components/modules/list/Tabs.vue";
import TabsContent from "@/components/modules/list/TabsContent.vue";
import TabsContentCard from "@/components/modules/list/TabsContentCard.vue";
import TabsContentScrollbar from "@/components/modules/list/TabsContentScrollbar.vue";
import TabsTab from "@/components/modules/list/TabsTab.vue";

import "@/assets/styles/main.scss";

storiesOf("Modules/List", module)
  .add(
    "Tabs",
    () => ({
      components: { Tabs },
      template: '<Tabs />'
    }),
    {
      notes: "Tabs for date selection. Today is default."
    }
  )
  .add(
    "TabsContent",
    () => ({
      components: { TabsContent },
      template: '<TabsContent />'
    }),
    {
      notes: "Content for a whole schedule in each tab."
    }
  )
  .add(
    "TabsContentCard",
    () => ({
      components: {
        TabsContentCard
      },
      computed: {
        title: () => "Vikings",
        start: () => "2018-10-26T23:58:00+02:00",
        end: () => "2018-10-26T23:59:00+02:00"
      },
      template: '<TabsContentCard @click="action" :title="title" :start="start" :end="end" style="width:200px;" />',
      methods: {
        action: linkTo("Components", "TabsTab")
      }
    }), {
      notes: "Single element for each show."
    })
    .add(
      "TabsContentScrollbar",
      () => ({
        components: { TabsContentScrollbar },
        template: '<TabsContentScrollbar />'
      }),
      {
        notes: "Special scrollbar for above position."
      }
    )
    .add(
      "TabsTab",
      () => ({
        components: { TabsTab },
        computed: {
          order: () => '1'
        },
        template: '<TabsTab :order="order" />'
      }),
      {
        notes: "Tab is simple component for each field of tabs."
      }
    );
