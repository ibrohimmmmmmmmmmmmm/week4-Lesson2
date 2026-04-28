import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { Menu } from "lucide-react";
import Navlists from "../NavLists/NavLists";
import { useTranslation } from "react-i18next";
import img from "../../assets/Logo (13).png";
import SelectM from "../SelectM/SelectM";
import ButtonBook from "../ButtonBook/ButtonBook";
export default function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };
  return (
    <nav className="w-full flex justify-between items-center px-4 md:px-10 py-4 bg-[#1c1c1c] text-white">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={img} alt="" className="w-[120px]" />
        <IconButton
          onClick={() => setOpen(true)}
          className="lg:hidden"
        >
          <Menu className="block md:block lg:hidden" color="white" />
        </IconButton>
      </div>
      <div className="hidden lg:flex items-center gap-10">
        <SelectM />
        <Navlists />
      </div>

      <div className="hidden lg:flex items-center gap-5">
        <ButtonBook />

        <div className="relative w-[90px]">
  <select
    value={i18n.language}
    onChange={(e) => changeLang(e.target.value)}
    className="
      w-full appearance-none
      bg-gradient-to-br from-[#2a2a2a] to-[#1c1c1c]
      text-white
      border border-[#FCD54C]/40
      rounded-xl
      px-4 py-2 pr-10
      text-sm font-semibold
      outline-none
      cursor-pointer
      transition duration-300

      hover:border-[#FCD54C]
      hover:shadow-[0_0_10px_#FCD54C55]

      focus:shadow-[0_0_15px_#FCD54Caa]
      focus:border-[#FCD54C]
    "
  >
    <option value="en" className="bg-[#1c1c1c]">EN</option>
    <option value="ru" className="bg-[#1c1c1c]">RU</option>
  </select>
  <span
    className="
      pointer-events-none
      absolute right-3 top-1/2 -translate-y-1/2
      text-[#FCD54C]
      text-xs
      transition
    "
  >
    ▼
  </span>
</div>
        <p className="font-bold">+7 (212) 674-25-10</p>
      </div>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-[250px] h-full bg-[#1c1c1c] text-white p-5 flex flex-col gap-5">
          
          <Navlists />
          <SelectM />
          <ButtonBook />

          <select
            value={i18n.language}
            onChange={(e) => changeLang(e.target.value)}
            className="bg-[#262626] text-white border border-[#FCD54C]/30 rounded-lg px-3 py-2"
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>

          <p className="font-bold">+7 (212) 674-25-10</p>

        </div>
      </Drawer>

    </nav>
  );
}
