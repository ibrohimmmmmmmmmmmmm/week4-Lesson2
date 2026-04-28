import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { ChevronDown } from "lucide-react";
import img from "../../assets/Logo (13).png";
import { useTranslation } from "react-i18next";
import ButtonBook from "../ButtonBook/ButtonBook";

export default function Footer() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:768px)");

  const Section = ({ title, children }) => {
    const [open, setOpen] = React.useState(false);

    return (
      <Box
        sx={{
          borderBottom: "1px solid #2a2a2a",
          pb: 1,
        }}
      >
        <Box
          onClick={() => setOpen(!open)}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            py: 2,
          }}
        >
          <p className="text-[17px] font-semibold tracking-wide">
            {title}
          </p>
          <ChevronDown
            size={18}
            color="#FCD54C"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s",
            }}
          />
        </Box>

        <Box
          sx={{
            maxHeight: open ? "500px" : "0px",
            overflow: "hidden",
            transition: "0.3s ease",
          }}
        >
          <Box className="flex flex-col gap-2 text-gray-400 text-sm pb-3">
            {children}
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        background: "#1c1c1c",
        borderTop: "1px solid #2a2a2a",
        mt: 10,
      }}
    >
      <Box sx={{ maxWidth: "1300px", margin: "auto", px: 3, py: 6 }}>

        <Box className="flex justify-center mb-10">
          <img src={img} alt="" className="w-[140px] opacity-90" />
        </Box>

        {isMobile ? (
          <Box className="space-y-2">

            <Section title={t("buy")}>
              <p>{t("apartment")}</p>
              <p>{t("house")}</p>
              <p>{t("apartments")}</p>
              <p>{t("loft")}</p>
            </Section>

            <Section title={t("services_title")}>
              <p>{t("service_1")}</p>
              <p>{t("service_2")}</p>
              <p>{t("service_3")}</p>
              <p>{t("service_4")}</p>
              <p>{t("service_5")}</p>
              <p>{t("service_6")}</p>
            </Section>

            <Section title={t("info_title")}>
              <p>{t("info_video")}</p>
              <p>{t("info_podcasts")}</p>
              <p>{t("info_laws")}</p>
              <p>{t("info_qa")}</p>
              <p>{t("info_books")}</p>
              <p>{t("info_articles")}</p>
            </Section>

            <Section title={t("about_title")}>
              <p>{t("about_jobs")}</p>
              <p>{t("about_story")}</p>
              <p>{t("about_licenses")}</p>
              <p>{t("about_why")}</p>
              <p>{t("about_agency")}</p>
            </Section>

            <Section title={t("contact_title")}>
              <p>{t("contact_address")}</p>
              <p>{t("contact_email")}</p>
              <div className="mt-3">
                <ButtonBook title={t("contact_book")} />
              </div>
            </Section>

          </Box>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 6,
            }}
          >

            <Box className="space-y-3">
              <p className="text-[18px] font-semibold text-white mb-4">
                {t("buy")}
              </p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("apartment")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("house")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("apartments")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("loft")}</p>
            </Box>

            <Box className="space-y-3">
              <p className="text-[18px] font-semibold text-white mb-4">
                {t("services_title")}
              </p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("service_1")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("service_2")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("service_3")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("service_4")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("service_5")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("service_6")}</p>
            </Box>

            <Box className="space-y-3">
              <p className="text-[18px] font-semibold text-white mb-4">
                {t("info_title")}
              </p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("info_video")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("info_podcasts")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("info_laws")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("info_qa")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("info_books")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("info_articles")}</p>
            </Box>

            <Box className="space-y-3">
              <p className="text-[18px] font-semibold text-white mb-4">
                {t("about_title")}
              </p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("about_jobs")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("about_story")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("about_licenses")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("about_why")}</p>
              <p className="text-gray-400 hover:text-[#FCD54C] transition">{t("about_agency")}</p>
            </Box>

            <Box className="space-y-3">
              <p className="text-[18px] font-semibold text-white mb-4">
                {t("contact_title")}
              </p>
              <p className="text-gray-400">{t("contact_address")}</p>
              <p className="text-gray-400 mb-3">{t("contact_email")}</p>
              <ButtonBook title={t("contact_book")} />
            </Box>

          </Box>
        )}

        <Box className="text-center text-gray-500 text-xs mt-12 border-t border-[#2a2a2a] pt-6">
          © 2026 — All rights reserved
        </Box>

      </Box>
    </Box>
  );
}
