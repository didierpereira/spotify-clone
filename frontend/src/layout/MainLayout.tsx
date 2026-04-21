import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Outlet } from "react-router-dom"
import LeftSidebar from "./components/LeftSidebar"
import FriendsActivity from "./components/FriendsActivity"
import AudioPlayer from "./components/AudioPlayer"

const MainLayout = () => {
  const isMobile = false
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

        {!isMobile && (
          <>
            <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

            {/* Right Sidebar */}
            <ResizablePanel
              defaultSize={20}
              minSize={5}
              maxSize={25}
              collapsedSize={0}
              collapsible={true}
            >
              <FriendsActivity />
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  )
}

export default MainLayout
