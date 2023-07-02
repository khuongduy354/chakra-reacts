import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { MainCarousel } from "./components/MainCarousel";
import { Category } from "./components/Category";

function App() {
  return (
    <Box>
      <Header />
      <MainCarousel />
      <Category />
    </Box>
  );
}

export default App;
