import { mount } from "@vue/test-utils";
import Toolbar from "@/components/Toolbar.vue";

describe("Toolbar.vue", () => {
  const iconLeft = 'person';
  const background = "#000000";

  const wrapper = mount(Toolbar, {
    propsData: { iconLeft, background }
  });

  it("renders props.msg when passed", () => {
    expect(wrapper.isEmpty()).toBe(false);
    expect(wrapper.find('.v-toolbar').exists()).toBe(true);
    expect(wrapper.text()).toMatch(iconLeft);
  });
});
