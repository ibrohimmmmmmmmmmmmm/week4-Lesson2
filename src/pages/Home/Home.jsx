import React from "react";
import SectionFull from "../../components/SectionFull/SectionFull";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1c1c1c] text-white px-4 md:px-10 py-10">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          {t("latest_projects")}
        </h2>

        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <span className="text-yellow-400">{t("filter_all")}</span>
          <span>{t("filter_building")}</span>
          <span>{t("filter_interior")}</span>
          <span>{t("filter_view_all")}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">

        <div className="relative">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" className="h-full w-full object-cover" />
          <p className="absolute bottom-3 left-3 text-sm">{t("villa")}</p>
        </div>

        <div className="bg-[#FCD54C] text-black p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              {t("dubai")}
            </h3>
            <p className="text-sm">
              {t("dubai_desc")}
            </p>
          </div>
          <p className="text-sm mt-4">{t("see_project")} →</p>
        </div>

        <div className="relative">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" className="h-full w-full object-cover" />
          <p className="absolute bottom-3 left-3 text-sm">{t("houses")}</p>
        </div>

        <div className="relative">
          <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227" className="h-full w-full object-cover" />
          <p className="absolute bottom-3 left-3 text-sm">{t("villa")}</p>
        </div>

      </div>

      <div className="max-w-3xl mx-auto text-center md:text-left mb-10">
        <p className="text-yellow-400 text-sm mb-2">
          {t("expertise")}
        </p>

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          {t("expertise_title")}
        </h2>

        <p className="text-gray-400 text-sm leading-6">
          {t("expertise_desc")}
        </p>
      </div>

      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] overflow-hidden rounded-lg">
        <video
          className="w-full h-full object-cover"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center text-black text-xl">
            ▶
          </button>
        </div>
      </div>

      <SectionFull />
    </div>
  );
}
