import React from "react";
import SectionHeader from "../layout/SectionHeader";

import Oip from "@/assets/icons/OIP-removebg-preview_upscayl_5x_realesrgan-x4plus 4.svg";
import cart from "@/assets/icons/Screenshot_2024-12-01_040538-removebg-preview_upscayl_5x_realesrgan-x4plus.svg";
import delivery from "@/assets/icons/Screenshot_2024-12-01_040604-removebg-preview_upscayl_5x_realesrgan-x4plus.svg";
import chatBot from "@/assets/icons/Ai-Chat-Robot--Streamline-Flex-Remix 1.svg";
import fast from "@/assets/icons/speed-grader-svgrepo-com 1.svg";
import check from "@/assets/icons/shield-check-svgrepo-com 1.svg";
import ServicesCard from "../layout/ServicesCard";
import { ServiceType } from "@/lib/types";

const services: ServiceType[] = [
  {
    id: 1,
    name: "التسعير التلقائي",
    description:
      "نقدم خدمة التسعير التلقائي لضمان توفير أفضل الأسعار تنافسية لجميع العملاء. تعتمد آليتنا على تحليل السوق والطلب لضبط الأسعار بشكل ديناميكي ودقيق، مما يضمن شفافية وسهولة الشراء لجميع شركائنا.",

    image: Oip,
  },
  {
    id: 2,
    name: "التسوق المباشر",
    description:
      "يمكنك تصفح المنتجات، مقارنة الأسعار، وإتمام طلباتك بسهولة تامة بضغطة زر. نضمن لك تجربة سلسة تلبي احتياجات مشاريعك بسرعة وكفاءة، مع متابعة الطلب خطوة بخطوة.",

    image: cart,
  },
  {
    id: 3,
    name: "توصيل مجاني",
    description:
      "استمتع بخدمة التوصيل المجاني لجميع طلباتك. نضمن لك وصول المواد المطلوبة بسرعة وكفاءة مباشرة إلى موقعك، لتسهيل عمليات البناء وتوفير الوقت والتكاليف.",

    image: delivery,
  },

  {
    id: 4,
    name: "دعم الذكاء الاصطناعي",
    description:
      "نقدم لك اقتراحات ذكية للطلبيات بناءً على احتياجات مشروعك السابقة وتاريخ مشترياتك. نوفر لك تجربة شراء مخصصة تُسهل اختيار المواد المناسبة وتوفير الوقت والجهد.",

    image: chatBot,
  },
  {
    id: 5,
    name: "خدمة سريعة",
    description:
      "نضمن لك سرعة توصيل استثنائية لتلبية احتياجات مشاريعك في الوقت المناسب. نوفر خدمة توصيل مباشرة إلى موقعك بأعلى كفاءة، مما يساعدك على توفير الوقت والحفاظ على سير العمل دون تأخير.",

    image: fast,
  },
  {
    id: 6,
    name: "نظام النقاط",
    description:
      "احصل على مكافآت مع كل طلبية! مع نظام النقاط نجعل تجربتك أكثر فائدة. قم باستخدام الموقع أو التطبيق لتجميع النقاط عند كل عملية شراء، واستبدلها بمزايا حصرية وخصومات مميزة في المستقبل. لأنك تستحق الأفضل دائمًا.",

    image: check,
  },
];

const Services = () => {
  return (
    <div>
      <SectionHeader title="ابرز خدماتنا" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
