/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import ButtonSquare from "@/components/ButtonSquare.vue";
import Toolbar from "@/components/Toolbar.vue";
import TabsDate from "@/components/TabsDate.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";

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
    "ButtonSquare",
    () => ({
      components: { ButtonSquare },
      template: '<ButtonSquare @click="action">Hello Button</ButtonSquare>',
      methods: { action: action("clicked") }
    }));
