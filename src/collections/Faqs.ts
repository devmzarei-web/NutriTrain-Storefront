import type { CollectionConfig } from "payload"

export const Faqs: CollectionConfig = {
  slug: "faqs",
  admin: {
    useAsTitle: "question",
  },
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
      label: "سوال",
    },
    {
      name: "answer",
      type: "textarea",
      required: true,
      label: "پاسخ",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "ترتیب نمایش",
    },
  ],
}
