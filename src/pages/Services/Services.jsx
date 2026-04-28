import React from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1c1c1c] text-white">

      <div
        className="w-full h-100 md:h-150 bg-cover bg-center flex items-end"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae')",
        }}
      >
        <div className="bg-black/50 w-full p-6 md:p-16">
          <p className="text-xs mb-2">{t("rent")}</p>
          <h1 className="text-2xl md:text-4xl font-bold">
            {t("furnished")} <br />
            <span className="text-yellow-400">{t("inDubai")}</span>
          </h1>
        </div>
      </div>

      <div className="px-4 md:px-20 py-12 space-y-10">

        <div className="max-w-3xl text-gray-400 text-sm leading-6">
          <p>{t("serviceText1")}</p>
          <br />
          <p>{t("serviceText2")}</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1504215680853-026ed2a45def"
          className="w-full max-w-4xl mx-auto"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-lg font-semibold">{t("methods")}</h2>
          <p className="text-gray-400 text-sm leading-6">
            {t("methodsText")}
          </p>
        </div>

        <div className="border border-yellow-400 p-6 max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-300">
            {t("quote")}
          </p>
          <p className="text-xs text-gray-500 mt-3">Paul Allen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" />
          <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10">
          <div>
            <p className="text-yellow-400 text-2xl font-bold">20</p>
            <p className="text-gray-400 text-xs">{t("yearsWorking")}</p>
          </div>
          <div>
            <p className="text-yellow-400 text-2xl font-bold">7</p>
            <p className="text-gray-400 text-xs">{t("managers")}</p>
          </div>
          <div>
            <p className="text-yellow-400 text-2xl font-bold">100+</p>
            <p className="text-gray-400 text-xs">{t("projects")}</p>
          </div>
          <div>
            <p className="text-yellow-400 text-2xl font-bold">50</p>
            <p className="text-gray-400 text-xs">{t("clients")}</p>
          </div>
        </div>

        <div className="space-y-6 max-w-3xl">
          <h3 className="text-lg font-semibold">{t("challenge")}</h3>
          <p className="text-gray-400 text-sm">
            {t("challengeText")}
          </p>

          <h3 className="text-lg font-semibold">{t("everythingWay")}</h3>
          <p className="text-gray-400 text-sm">
            {t("everythingWayText")}
          </p>
        </div>

        <div className="bg-[#FCD54C] text-black py-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm">{t("questions")}</p>
            <h2 className="text-2xl md:text-3xl font-bold">{t("contactUs")}</h2>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder={t("enterMail")}
              className="px-4 py-2 w-full md:w-64 outline-none"
            />
            <button className="bg-black text-white px-6">{t("send")}</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-[#2a2a2a] text-gray-300">
                <th className="p-3">{t("included")}</th>
                <th className="p-3">{t("core")}</th>
                <th className="p-3">{t("premium")}</th>
              </tr>
            </thead>
            <tbody>
              {[
                t("adv"),
                t("tenants"),
                t("agreement"),
                t("control"),
                t("management"),
              ].map((item, i) => (
                <tr key={i} className="border-b border-gray-700">
                  <td className="p-3">{item}</td>
                  <td className="p-3 text-yellow-400">✔</td>
                  <td className="p-3 text-yellow-400">✔</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-10">
          <h2 className="mb-6">{t("propose")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" />
              <p className="absolute bottom-3 left-3 text-sm">
                {t("mortgage")}
              </p>
            </div>

            <div className="bg-[#FCD54C] text-black p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold mb-3">
                  {t("mortgage")}
                </h3>
                <p className="text-sm">
                  {t("mortgageText")}
                </p>
              </div>
              <p className="mt-4 text-sm">{t("learnMore")}</p>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156" />
              <p className="absolute bottom-3 left-3 text-sm">
                {t("mortgage")}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
