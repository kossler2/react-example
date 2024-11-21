import Box from "@mui/material/Box";
import Header from "../components/Header";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
        <Header appBarTitle="Home" />
        <div>Home</div>
    </Box>
  );
}