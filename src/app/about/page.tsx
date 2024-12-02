import React from "react";
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          {/* imag */}
          <div className="w-[500px] h-[300px] relative order-2 self-end">
            <Image src={about1} fill className="absolute" alt="about1" />
          </div>
          {/* content */}
          <div className="w-1/2">
            <h1 className="text-[#DF5829] font-bold text-4xl mb-10">من نحن </h1>
            <p className="text-lg">
              <span className="text-[#DF5829]">QuickMat</span> هي منصتك الذكية
              لتوفير جميع احتياجاتك من مواد البناء والمواد الخام بأعلى معايير
              الجودة. تأسسنا بهدف تبسيط عمليات الشراء في قطاع البناء وربط
              الموردين بالمقاولين والشركات عبر حلول تقنية مبتكرة وسهلة
              الاستخدام.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          {/* imag */}
          <div className="w-[500px] h-[300px] relative self-start">
            <Image src={about2} fill className="absolute" alt="about1" />
          </div>
          {/* content */}
          <div className="w-1/2">
            <h1 className="text-[#DF5829] font-bold text-4xl mb-10">
              {" "}
              رؤيتنا{" "}
            </h1>
            <p className="text-lg">
              <span className="text-[#DF5829]">QuickMat</span> نطمح إلى أن نصبح
              الخيار الأول في مجال توفير مواد البناء بفضل خدماتنا الذكية،
              وسرعتنا في التوصيل، والتزامنا بتقديم أفضل الأسعار التنافسية
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
