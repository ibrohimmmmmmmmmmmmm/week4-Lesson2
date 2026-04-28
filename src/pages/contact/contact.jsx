import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen">

      <div className="px-4 md:px-20 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-10">
          {t("contact")}
        </h1>

        <div className="relative w-full h-[300px] md:h-[450px]">

          <iframe
            src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
            className="w-full h-full"
          />

          <div className="absolute top-1/2 left-5 md:left-20 transform -translate-y-1/2 bg-[#1f1f1f] p-6 md:p-10 w-[280px] md:w-[350px]">

            <h2 className="text-lg font-semibold mb-4">
              {t("city")} <span className="text-yellow-400">UAE</span>
            </h2>

            <p className="text-xs text-gray-400 mb-4">
              {t("address")}
            </p>

            <p className="text-lg font-semibold mb-4">
              +99 (0) 344 956 4050
            </p>

            <p className="text-xs text-gray-400 mb-2">
              {t("email")}: info@agency.ae
            </p>

            <p className="text-xs text-gray-400 mb-2">
              {t("follow")}
            </p>

            <p className="text-xs text-gray-400">
              {t("workHours")}
            </p>

          </div>

        </div>

        <div className="mt-20 max-w-5xl">

          <h2 className="text-lg mb-6">
            <span className="text-yellow-400">{t("beInTouch")}</span> <br />
            {t("withUs")}
          </h2>

          <form className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <input
                type="text"
                placeholder={t("name")}
                className="bg-transparent border border-gray-600 px-4 py-2 outline-none"
              />

              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="bg-transparent border border-gray-600 px-4 py-2 outline-none"
              />

              <input
                type="text"
                placeholder={t("subject")}
                className="bg-transparent border border-gray-600 px-4 py-2 outline-none"
              />

            </div>

            <textarea
              placeholder={t("message")}
              rows={6}
              className="w-full bg-transparent border border-gray-600 px-4 py-2 outline-none"
            />

            <button className="bg-[#FCD54C] text-black px-6 py-2 text-sm font-semibold">
              {t("submit")}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
