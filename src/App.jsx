import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Cgi from "@pages/Cgi";
import Devweb from "@pages/Devweb";
import Videos from "@pages/Videos";
import Contact from "@pages/Contact";
import Navbar from "@components/Navbar";
import { VideoProvider } from "@contexts/VideoContext";
import { TargetProvider } from "@contexts/TargetContext";
import { SoundProvider } from "@contexts/soundContext";
import { TransitionPageProvider } from "@contexts/TransitionContext";
import { WatchPlayProvider } from "./contexts/watchPlayContext";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <WatchPlayProvider>
      <SoundProvider>
        <VideoProvider>
          <TargetProvider>
            <TransitionPageProvider>
              <main>
                <Navbar />
                <Routes>
                  <Route index path="/" element={<Home />} />
                  <Route path="/cgi" element={<Cgi />} />
                  <Route path="/devweb" element={<Devweb />} />
                  <Route path="/videos" element={<Videos />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </main>
            </TransitionPageProvider>
          </TargetProvider>
        </VideoProvider>
      </SoundProvider>
    </WatchPlayProvider>
  )
}

export default App
