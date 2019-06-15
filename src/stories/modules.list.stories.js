/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import Content from "@/components/modules/list/Content.vue";
import Tab from "@/components/modules/list/Tab.vue";
import Tabs from "@/components/modules/list/Tabs.vue";

import "@/assets/styles/main.scss";

storiesOf("Modules/List", module)
  .add(
    "Content",
    () => ({
      components: { Content },
      template: '<Content />'
    }),
    {
      notes: "Content for a whole schedule in each tab."
    }
  )
  .add(
    "Tab",
    () => ({
      components: { Tab },
      computed: {
        order: () => '1'
      },
      template: '<Tab :order="order" />'
    }),
    {
      notes: "Tab is simple component for each field of tabs."
    }
  )
  .add(
    "Tabs",
    () => ({
      components: { Tabs },
      template: '<Tabs />'
    }),
    {
      notes: "Tabs for date selection. Today is default."
    }
  );
