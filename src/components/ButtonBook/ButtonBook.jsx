import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

export default function ButtonBook() {
  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      sx={{
        color: "black",
        fontWeight: "600",
        bgcolor: "#FCD54C",
      }}
    >
      {t("book")}
    </Button>
  );
}
