/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import Toolbar from "@/components/layout/Toolbar.vue";
import BottomNavigation from "@/components/layout/BottomNavigation.vue";

import "@/assets/styles/main.scss";

storiesOf("Layout", module)
  .add(
    "Toolbar",
    () => ({
      components: { Toolbar },
      computed: {
        iconLeft: () => "person",
        background: () => "#000000"
      },
      template: '<Toolbar :iconLeft="iconLeft" :background="background" />'
    }),
    {
      notes: "Modified Toolbar for home and detail page."
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
  );
