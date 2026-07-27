import type { CollectionConfig } from "payload"

export const Features: CollectionConfig = {
  slug: "features",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "عنوان ویژگی",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "توضیحات کامل",
    },
    {
      name: "badge",
      type: "text",
      defaultValue: "تخصصی",
      label: "نشان/برچسب",
    },
    {
      name: "mediaImage",
      type: "upload",
      relationTo: "media",
      required: false,
      label: "تصویر/اسکرین‌شات اختصاصی ویژگی",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "ترتیب نمایش",
    },
  ],
}
