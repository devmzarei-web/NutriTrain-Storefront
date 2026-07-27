import type { CollectionConfig } from "payload"

export const HeroSlides: CollectionConfig = {
  slug: "hero-slides",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "عنوان کارت اسلایدر",
    },
    {
      name: "badge",
      type: "text",
      required: true,
      label: "نشان ویژه (Badge)",
    },
    {
      name: "mediaImage",
      type: "upload",
      relationTo: "media",
      required: false,
      label: "تصویر / GIF اختصاصی اسلاید",
    },
    {
      name: "metricLabel1",
      type: "text",
      label: "عنوان شاخص ۱",
    },
    {
      name: "metricValue1",
      type: "text",
      label: "مقدار شاخص ۱",
    },
    {
      name: "metricLabel2",
      type: "text",
      label: "عنوان شاخص ۲",
    },
    {
      name: "metricValue2",
      type: "text",
      label: "مقدار شاخص ۲",
    },
    {
      name: "highlightText",
      type: "text",
      label: "متن هایلایت کادر پایین",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "ترتیب نمایش",
    },
  ],
}
