import { Box } from "@chakra-ui/react";
import { NavBar } from "./components/Navbar";
import { CreatePost } from "./components/CreatePost";
import { PostList } from "./components/PostList";
import data from "./data";

function App() {
  return (
    <Box>
      <NavBar />
      <PostList posts={data.posts} avatar={data.rustLogo} />
    </Box>
  );
}

export default App;
