import { escapeExpression } from "discourse/lib/utilities";
import layout from "select-kit/templates/components/selected-choice-color";
import SelectedChoiceComponent from "select-kit/components/selected-choice";
import { schedule } from "@ember/runloop";
import { computed } from "@ember/object";

export default SelectedChoiceComponent.extend({
  tagName: "",
  layout,

  escapedColor: computed("item", function () {
    let color = `${escapeExpression(this.item?.name || this.item)}`;
    return color.startsWith("#") ? color : `#${color}`;
  }),

  didInsertElement() {
    this._super(...arguments);

    schedule("afterRender", () => {
      const element = document.querySelector(
        `#${this.selectKit.uniqueID} .selected-choice-color[data-color="${this.escapedColor}"] button`
      );
      if (element) {
        element.style.borderBottom = "2px solid transparent";
        element.style.borderBottomColor = this.escapedColor;
      }
    });
  },
});
