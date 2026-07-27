import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "public/uploads",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 512,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: false,
      label: "توضیح تصویر (Alt Text)",
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "لوگوها", value: "LOGO" },
        { label: "تصاویر اسلایدر هیرو", value: "HERO" },
        { label: "اسکرین‌شات ویژگی‌ها", value: "FEATURE" },
        { label: "عمومی", value: "GENERAL" },
      ],
      defaultValue: "GENERAL",
    },
  ],
}
