import { readFile, writeFile, mkdir } from "fs/promises"
import path from "path"

export interface HeaderNavItem {
  id: string
  label: string
  url: string
  order: number
}

export interface HeroSectionConfig {
  headline: string
  subtitle: string
  badgeText: string
  trialDays: number
  primaryCtaText: string
  primaryCtaUrl: string
  secondaryCtaText: string
  secondaryCtaUrl: string
}

export interface HeroSlideItem {
  id: string
  title: string
  badge: string
  iconName: string
  imageUrl: string
  metricLabel1: string
  metricValue1: string
  metricLabel2: string
  metricValue2: string
  highlightText: string
  order: number
}

export interface FeatureItemConfig {
  id: string
  title: string
  description: string
  iconName: string
  badge: string
  imageUrl: string
  order: number
}

export interface PricingPlanConfig {
  id: string
  name: string
  price: number
  badge?: string
  isPopular: boolean
  features: string[]
  ctaText: string
  ctaUrl: string
  order: number
}

export interface FaqItemConfig {
  id: string
  question: string
  answer: string
  order: number
}

export interface MediaAssetItem {
  id: string
  title: string
  category: string
  url: string
  mimeType: string
  sizeBytes: number
  uploadedAt: string
}

export interface FullCMSPayload {
  headerNav: HeaderNavItem[]
  hero: HeroSectionConfig
  heroSlides: HeroSlideItem[]
  features: FeatureItemConfig[]
  pricing: PricingPlanConfig[]
  faqs: FaqItemConfig[]
  assets: MediaAssetItem[]
}

const defaultCMSPayload: FullCMSPayload = {
  headerNav: [
    { id: "nav1", label: "امکانات پلتفرم", url: "#features", order: 0 },
    { id: "nav2", label: "دموی ۳D زنده", url: "#demo", order: 1 },
    { id: "nav3", label: "آنالیز فیزیولوژیک", url: "#analytics", order: 2 },
    { id: "nav4", label: "تعرفه و اشتراک", url: "#pricing", order: 3 },
    { id: "nav5", label: "سوالات متداول", url: "#faq", order: 4 },
  ],
  hero: {
    headline: "مهندسی علم تغذیه و تمرین، در دست مربیان حرفه‌ای",
    subtitle: "تنظیم دقیق برنامه غذایی هوشمند بر اساس استانداردهای ISSN، مدیریت زنده ست‌های تمرینی با تایمر صوتی، آنالیز کامل شاخص‌های فیزیولوژیک بدنی و صدور نسخه چاپی شکیل PDF.",
    badgeText: "پلتفرم تخصصی مربیان ورزشی و متخصصین تغذیه",
    trialDays: 7,
    primaryCtaText: "شروع تست رایگان ۷ روزه مربیان",
    primaryCtaUrl: "http://localhost:3000/login?mode=register",
    secondaryCtaText: "مشاهده دموی زنده و قیمت‌ها",
    secondaryCtaUrl: "#demo",
  },
  heroSlides: [
    {
      id: "slide1",
      title: "موتور هوشمند تنظیم رژیم تغذیه (Scientific AI Diet Engine)",
      badge: "طراحی بر اساس استانداردهای ISSN",
      iconName: "BrainCircuit",
      imageUrl: "",
      metricLabel1: "پروتئین روزانه",
      metricValue1: "۳۵ گرم در هر وعده",
      metricLabel2: "کالری کل",
      metricValue2: "۴۵۰ kcal",
      highlightText: "💡 مقیاس خودکار حجم غذاها با دقت ۱۰۰٪ بر اساس سفره ایرانی",
      order: 0,
    },
    {
      id: "slide2",
      title: "تایمر زنده استراحت و بازخورد صوتی (Live Rest Cues)",
      badge: "صوت سنتز شده Web Audio API & ویبره",
      iconName: "Timer",
      imageUrl: "",
      metricLabel1: "تایمر معکوس",
      metricValue1: "00:45",
      metricLabel2: "هشدار پایانی",
      metricValue2: "بیپ صوتی + ویبره",
      highlightText: "⚡ ثبت زنده ست‌ها همراه با هشدار هوشمند استراحت",
      order: 1,
    },
    {
      id: "slide3",
      title: "آنالیز هوشمند آنتروپومتریک (Physiological Analytics)",
      badge: "BMI, BMR, TDEE, Fat %, Lean Mass",
      iconName: "Scale",
      imageUrl: "",
      metricLabel1: "شاخص توده بدنی (BMI)",
      metricValue1: "24.2 (وزن ایده‌آل)",
      metricLabel2: "سوخت‌وساز کل (TDEE)",
      metricValue2: "۲,۵۳۰ کیلوکالری",
      highlightText: "📊 محاسبه خودکار جرم عضلانی، چربی بدنی و WtHR",
      order: 2,
    },
    {
      id: "slide4",
      title: "صدور نسخه چاپی PDF با برند مربی (Branded PDF Export)",
      badge: "دانلود یک‌کلیکه نسخه چاپی رسمی",
      iconName: "FileSpreadsheet",
      imageUrl: "",
      metricLabel1: "کد اختصاصی مربی",
      metricValue1: "NT-9842",
      metricLabel2: "استعلام هویت",
      metricValue2: "QR کد تایید آنلاین",
      highlightText: "📄 خروجی شکیل A4 با نام و لوگوی اختصاصی مربی",
      order: 3,
    },
  ],
  features: [
    {
      id: "f1",
      title: "موتور هوشمند رژیم‌ساز (ISSN)",
      description: "تنظیم دقیق درشت‌مغذی‌ها، رعایت آستانه لوسین برای حفظ بافت عضلانی و مقیاس خودکار تمام مواد غذایی ایرانی با ۱ کلیک.",
      iconName: "BrainCircuit",
      badge: "تخصصی",
      imageUrl: "",
      order: 0,
    },
    {
      id: "f2",
      title: "حالت زنده تمرین و تایمر صوتی",
      description: "ثبت ست‌ها در حین انجام تمرین همراه با تایمر استراحت صوتی سنتز شده و ویبره موبایل جهت حفظ ریتم تمرینی شاگرد.",
      iconName: "Timer",
      badge: "زنده",
      imageUrl: "",
      order: 1,
    },
    {
      id: "f3",
      title: "آنالیز آنتروپومتریک و ترکیب بدن",
      description: "محاسبه خودکار BMI، BMR، TDEE، درصد چربی تخمینی، جرم عضلانی (LBM) و شاخص سلامت WtHR از روی اندازه‌گیری‌ها.",
      iconName: "Scale",
      badge: "فیزیولوژیک",
      imageUrl: "",
      order: 2,
    },
    {
      id: "f4",
      title: "دانلود نسخه چاپی PDF با برند مربی",
      description: "صدور فایل PDF شکیل A4 همراه با نام، لوگو، کد اختصاصی مربی و QR کد استعلام هویت شاگرد.",
      iconName: "FileSpreadsheet",
      badge: "رسمی",
      imageUrl: "",
      order: 3,
    },
    {
      id: "f5",
      title: "پیام‌رسان اختصاصی مربی و شاگرد",
      description: "ارتباط مستقیم درون برنامه‌ای بدون نیاز به شبکه خارجی، ارسال هشدار تمدید و پشتیبانی آنلاین.",
      iconName: "MessageSquare",
      badge: "ارتباطات",
      imageUrl: "",
      order: 4,
    },
    {
      id: "f6",
      title: "بانک حرکات و غذاهای ایرانی",
      description: "بانک جامع حرکات ورزشی همراه با ویدیو/GIF آموزشی + بانک کامل مواد غذایی ایرانی با درشت‌مغذی‌ها.",
      iconName: "Dumbbell",
      badge: "بانک داده",
      imageUrl: "",
      order: 5,
    },
  ],
  pricing: [
    {
      id: "p1",
      name: "پلن آزمایشی ۷ روزه",
      price: 0,
      badge: "تست رایگان مربیان",
      isPopular: false,
      features: [
        "دسترسی کامل ۷ روزه بدون پرداخت",
        "تولید رژیم هوشمند با AI",
        "ثبت تا ۵ شاگرد اولیه",
        "دانلود نسخه چاپی PDF",
      ],
      ctaText: "فعالسازی تست رایگان",
      ctaUrl: "http://localhost:3000/login?mode=register",
      order: 0,
    },
    {
      id: "p2",
      name: "پلن مربی حرفه‌ای (PRO)",
      price: 290000,
      badge: "⭐ پرفروش‌ترین پلن مربیان",
      isPopular: true,
      features: [
        "شاگردان نامحدود بدون سقف",
        "۳۰ سهمیه روزانه رژیم‌ساز هوشمند AI",
        "کد اختصاصی مربیگری و برندسازی PDF",
        "پیام‌رسان مستقیم و هشدار تمدید",
        "تایمر زنده استراحت و صوتی",
      ],
      ctaText: "خرید و شروع کار",
      ctaUrl: "http://localhost:3000/login?mode=register",
      order: 1,
    },
    {
      id: "p3",
      name: "پلن باشگاهی (Enterprise)",
      price: 690000,
      badge: "کلینیک‌ها و باشگاه‌ها",
      isPopular: false,
      features: [
        "تمام امکانات پلن PRO",
        "اکانت‌های همکار و مدیریت ارشد",
        "سهمیه نامحدود هوش مصنوعی",
        "پشتیبانی اختصاصی ۲۴/۷",
      ],
      ctaText: "تماس و فعالسازی باشگاهی",
      ctaUrl: "http://localhost:3000/login?mode=register",
      order: 2,
    },
  ],
  faqs: [
    {
      id: "q1",
      question: "آیا رژیم‌های غذایی تولید شده توسط هوش مصنوعی با سفره ایرانی سازگار است؟",
      answer: "بله، موتور رژیم‌ساز NutriTrain دقیقاً بر اساس غذاهای قابل دسترس در بازار و سفره ایرانی (انواع کباب‌ها، برنج ایرانی، خورشت‌ها، اوتمیل، مکمل‌های موجود) برنامه‌ریزی می‌کند و کالری و درشت‌مغذی‌ها را با میزان دقیق گرم غذا تنظیم می‌نماید.",
      order: 0,
    },
    {
      id: "q2",
      question: "تست رایگان ۷ روزه مربیان به چه صورت فعال می‌شود؟",
      answer: "بلافاصله پس از ثبت‌نام اولیه شما به عنوان مربی، دسترسی کامل ۷ روزه به تمام بخش‌های پنل (رژیم‌ساز هوشمند، بانک حرکات، صدور PDF، تایمر استراحت و ثبت شاگردان) بدون نیاز به پرداخت هیچ هزینه‌ای فعال می‌گردد.",
      order: 1,
    },
    {
      id: "q3",
      question: "آیا امکان صدور فایل PDF با نام، برند و کد مربیگری من وجود دارد؟",
      answer: "بله، تمام برنامه‌های تمرینی و تغذیه دانلود شده در فرمت PDF استاندارد، به صورت اختصاصی با نام مربی، لوگو، کد مربیگری و QR کد تایید هویت شاگرد تنظیم و خروجی گرفته می‌شوند.",
      order: 2,
    },
    {
      id: "q4",
      question: "شاگردان من چطور می‌توانند برنامه تمرینی خود را مشاهده کنند؟",
      answer: "علاوه بر فایل PDF چاپی، هر شاگرد دارای یک پنل اختصاصی آنلاین روی موبایل است که می‌تواند تمرینات زنده، تایمر استراحت صوتی، تصاویر حرکات و تاریخچه پیشرفت خود را مشاهده نماید.",
      order: 3,
    },
  ],
  assets: [],
}

const dataFilePath = path.join(process.cwd(), "data", "cms.json")

export async function getCMSPayload(): Promise<FullCMSPayload> {
  try {
    const content = await readFile(dataFilePath, "utf-8")
    const parsed = JSON.parse(content)
    return {
      headerNav: parsed.headerNav || defaultCMSPayload.headerNav,
      hero: { ...defaultCMSPayload.hero, ...(parsed.hero || {}) },
      heroSlides: parsed.heroSlides || defaultCMSPayload.heroSlides,
      features: parsed.features || defaultCMSPayload.features,
      pricing: parsed.pricing || defaultCMSPayload.pricing,
      faqs: parsed.faqs || defaultCMSPayload.faqs,
      assets: parsed.assets || defaultCMSPayload.assets,
    }
  } catch {
    await saveCMSPayload(defaultCMSPayload)
    return defaultCMSPayload
  }
}

export async function saveCMSPayload(data: Partial<FullCMSPayload>): Promise<FullCMSPayload> {
  const current = await getCMSPayload().catch(() => defaultCMSPayload)
  const updated: FullCMSPayload = {
    headerNav: data.headerNav || current.headerNav,
    hero: { ...current.hero, ...(data.hero || {}) },
    heroSlides: data.heroSlides || current.heroSlides,
    features: data.features || current.features,
    pricing: data.pricing || current.pricing,
    faqs: data.faqs || current.faqs,
    assets: data.assets || current.assets,
  }

  const dataDir = path.join(process.cwd(), "data")
  await mkdir(dataDir, { recursive: true })
  await writeFile(dataFilePath, JSON.stringify(updated, null, 2), "utf-8")
  return updated
}
