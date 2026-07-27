import type { CollectionConfig } from "payload"

export const PricingPlans: CollectionConfig = {
  slug: "pricing-plans",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "نام پلن",
    },
    {
      name: "price",
      type: "number",
      required: true,
      label: "قیمت ماهانه (تومان)",
    },
    {
      name: "badge",
      type: "text",
      label: "نشان ویژه (پرفروش‌ترین و...)",
    },
    {
      name: "isPopular",
      type: "checkbox",
      defaultValue: false,
      label: "پلن برجسته / پرفروش",
    },
    {
      name: "featuresList",
      type: "textarea",
      required: true,
      label: "ویژگی‌ها (هر سطر ۱ مورد)",
    },
    {
      name: "ctaText",
      type: "text",
      defaultValue: "انتخاب پلن",
      label: "متن دکمه خرید",
    },
    {
      name: "ctaUrl",
      type: "text",
      defaultValue: "http://localhost:3000/login?mode=register",
      label: "لینک دکمه خرید",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "ترتیب نمایش",
    },
  ],
}
