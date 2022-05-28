import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/homeV1";
import HomeV2 from "../pages/homeV2";
import HomeV3 from "../pages/homeV3";
import Blogs from "../pages/blogs";
import BlogDetails from "../pages/blogDetails";
import { MoralisProvider } from "react-moralis";

function App() {
  return (
    <MoralisProvider
      serverUrl="https://4njrswdww2s0.usemoralis.com:2053/server"
      appId="tNJp7W7HF278zs6y6oPW2R6nYIRI3LhGX9HnC142"
    >
      <Routes>
        <Route path="/" element={<HomeV1 />} exact />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/post" element={<BlogDetails />} />
      </Routes>
    </MoralisProvider>
  );
}

export default App;
