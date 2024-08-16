import { styled } from "@mui/material/styles";

const InputCardContainer = styled("div")(({ theme, boxShadow }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  boxShadow: boxShadow ? boxShadow : "0 2px 4px rgba(0,0,0,0.1)",
  borderRadius: "16px",
  padding: "16px",
  backgroundColor: "#fff",
  color: "#495057",
  "& .label__div": {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    "& img": {
      width: "24px",
      height: "24px",
    },
    "& h1": {
      margin: 0,
      fontSize: "20px",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
    "& p": {
      margin: 0,
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "0.5px",
      marginBottom: "16px",
    },
  },
}));

export { InputCardContainer };
