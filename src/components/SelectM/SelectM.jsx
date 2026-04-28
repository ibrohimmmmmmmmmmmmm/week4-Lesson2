import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";

export default function SelectM() {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ color: "#FCD54C" }}
      >
        {t("buy")}
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>
          {t("menu_profile")}
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          {t("menu_account")}
        </MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>
          {t("menu_logout")}
        </MenuItem>
      </Menu>
    </div>
  );
}
