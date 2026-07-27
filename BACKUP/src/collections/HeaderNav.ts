import type { CollectionConfig } from "payload"

export const HeaderNav: CollectionConfig = {
  slug: "header-nav",
  admin: {
    useAsTitle: "label",
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      label: "عنوان منو",
    },
    {
      name: "url",
      type: "text",
      required: true,
      label: "آدرس یا انکر (#features, /login)",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "ترتیب نمایش",
    },
  ],
}
