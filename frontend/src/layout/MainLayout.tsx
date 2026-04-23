import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import AudioPlayer from "./components/AudioPlayer"
import FriendsActivity from "./components/FriendsActivity"
import LeftSidebar from "./components/LeftSidebar"
import PlayBackControls from "./components/PlayBackControls"

const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup
        className="flex-1 flex h-full overflow-hidden p-2"
        direction="horizontal"
        autoSaveId="spotify-layout-v4"
      >
        {/* Left Sidebar */}
        <ResizablePanel
          defaultSize={20}
          minSize={isMobile ? 0 : 10}
          maxSize={30}
        >
          <LeftSidebar />
        </ResizablePanel>

        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        {/* Main Content */}
        <ResizablePanel
          defaultSize={isMobile ? 80 : 60}
          minSize={isMobile ? 80 : 20}
        >
          <AudioPlayer />
          <Outlet />
        </ResizablePanel>

        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        {/* Right Sidebar */}
        <ResizablePanel
          defaultSize={isMobile ? 0 : 20}
          minSize={isMobile ? 0 : 5}
          maxSize={isMobile ? 0 : 25}
          collapsedSize={0}
          collapsible={true}
        >
          <FriendsActivity />
        </ResizablePanel>
      </ResizablePanelGroup>

      <PlayBackControls />
    </div>
  )
}

export default MainLayout
