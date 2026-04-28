import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navlists() {
  const { t } = useTranslation();

  const navLists = [
    { path: "/", title: t("nav_home") },
    { path: "/blog", title: t("nav_blog") },
    { path: "/services", title: t("nav_services") },
    { path: "/contact", title: t("nav_contact") },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5">
      {navLists.map((navList) => (
        <NavLink
          key={navList.title}
          to={navList.path}
          style={({ isActive }) => ({
            color: "#FFFFFF",
            textDecoration: "none",
            borderBottom: isActive
              ? "2px solid #FCD54C"
              : "2px solid transparent",
            paddingBottom: "4px",
          })}
        >
          {navList.title}
        </NavLink>
      ))}
    </div>
  );
}
