import { styled } from "@mui/material/styles";

const MainContainerWrapper = styled("div")(({ theme }) => ({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "16px",
  width: "100%",
  height: "100%",
  overflowY: "auto",
  "& .form__main": {
    width: "100%",
    "& .submit__btn": {
      width: "100%",
      padding: "8px",
      backgroundColor: "#ff5983",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: 500,
      letterSpacing: "0.5px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#fd3f6c",
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "8px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "2px",
  },
}));

export { MainContainerWrapper };
