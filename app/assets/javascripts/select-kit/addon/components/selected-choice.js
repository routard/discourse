import Component from "@ember/component";
import { computed } from "@ember/object";
import layout from "select-kit/templates/components/selected-choice";

export default Component.extend({
  tagName: "",
  layout,
  item: null,
  selectKit: null,

  translatedLabel: computed("item", function () {
    return this.item?.name || this.item;
  }),
});
