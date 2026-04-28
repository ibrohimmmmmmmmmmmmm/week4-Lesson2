import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

export default function SectionFull() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1c1c1c] text-white px-4 md:px-10 py-16">

      <div className="mb-16">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
        >
          {[1,2,3,4,5,6].map((item) => (
            <SwiperSlide key={item}>
              <div className="border border-yellow-400 p-5 h-full">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  className="w-full h-40 object-cover mb-4"
                />
                <p className="text-sm text-gray-400 mb-3">
                  {t("card_text_1")}
                </p>
                <p className="text-xs text-gray-500">
                  {t("card_text_2")}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-[#FCD54C] text-black py-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm">{t("contact_question")}</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("contact_title")}
          </h2>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder={t("contact_placeholder")}
            className="px-4 py-2 w-full md:w-64 outline-none"
          />
          <button className="bg-black text-white px-6">
            {t("contact_button")}
          </button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-xl md:text-2xl mb-6">
          {t("articles_title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3].map((item) => (
            <div key={item} className="border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-400 mb-2">
                  {t("article_text")}
                </p>
                <p className="text-yellow-400 text-sm">
                  {t("learn_more")} →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {[1,2,3,4].map((item) => (
            <SwiperSlide key={item}>
              <div className="border border-yellow-400 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-10 h-10 rounded-full"
                  />
                  <p>{t("user_name")}</p>
                </div>
                <p className="text-sm text-gray-400">
                  {t("testimonial_text")}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <h2 className="text-xl md:text-2xl mb-6">
          {t("faq_title")}
        </h2>

        <div className="space-y-4">
          {[1,2,3,4].map((item, i) => (
            <details
              key={i}
              className="border-b border-gray-600 pb-3 cursor-pointer"
            >
              <summary className="flex justify-between items-center">
                {t(`faq_q_${item}`)}
                <span className="text-yellow-400">+</span>
              </summary>
              <p className="text-gray-400 mt-2 text-sm">
                {t(`faq_a_${item}`)}
              </p>
            </details>
          ))}
        </div>
      </div>

    </div>
  );
}
