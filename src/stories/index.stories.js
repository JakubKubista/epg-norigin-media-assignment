/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MyButton from "@/components/MyButton.vue";
import Toolbar from "@/components/Toolbar.vue";
import TabsDate from "@/components/TabsDate.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";

storiesOf("Button", module)
  .add("with text", () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action("clicked") }
  }))
  .add("with JSX", () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo("Button", "with some emoji") }
  }))
  .add("with some emoji", () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action("clicked") }
  }));

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
  );
