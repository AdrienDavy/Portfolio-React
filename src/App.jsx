import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Cgi from "@pages/Cgi";
import Devweb from "@pages/Devweb";
import Videos from "@pages/Videos";
import Contact from "@pages/Contact";
import Navbar from "@components/Navbar";
import { VideoProvider } from "@contexts/VideoContext";

function App() {
  return (
    <VideoProvider>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cgi" element={<Cgi />} />
          <Route path="/devweb" element={<Devweb />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </VideoProvider>
  )
}

export default App
