import type { GlobalConfig } from "payload"

export const HeroSection: GlobalConfig = {
  slug: "hero-section",
  label: "شعار اصلی و بخش هیرو",
  fields: [
    {
      name: "headline",
      type: "text",
      required: true,
      defaultValue: "مهندسی علم تغذیه و تمرین، در دست مربیان حرفه‌ای",
      label: "عنوان اصلی (H1)",
    },
    {
      name: "subtitle",
      type: "textarea",
      required: true,
      defaultValue: "تنظیم دقیق برنامه غذایی هوشمند بر اساس استانداردهای ISSN، مدیریت زنده ست‌های تمرینی با تایمر صوتی، آنالیز کامل شاخص‌های فیزیولوژیک بدنی و صدور نسخه چاپی شکیل PDF.",
      label: "توضیحات فرعی (Subtitle)",
    },
    {
      name: "badgeText",
      type: "text",
      defaultValue: "پلتفرم تخصصی مربیان ورزشی و متخصصین تغذیه",
      label: "نشان بالای تیتر (Badge)",
    },
    {
      name: "trialDays",
      type: "number",
      defaultValue: 7,
      label: "تعداد روزهای تست رایگان",
    },
    {
      name: "primaryCtaText",
      type: "text",
      defaultValue: "شروع تست رایگان ۷ روزه مربیان",
      label: "متن دکمه اصلی CTA",
    },
    {
      name: "primaryCtaUrl",
      type: "text",
      defaultValue: "http://localhost:3000/login?mode=register",
      label: "لینک دکمه اصلی CTA",
    },
  ],
}
