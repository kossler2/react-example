import Box from "@mui/material/Box";
import Header from "../components/Header";

export default function Designer() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header appBarTitle="Designer" />
      <div>Designer</div>
    </Box>
  );
}