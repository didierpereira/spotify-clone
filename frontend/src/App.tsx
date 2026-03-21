import { Route, Routes } from "react-router-dom"
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage"
import HomePage from "./pages/home/HomePage"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/chat/ChatPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signInForceRedirectUrl={"/auth-callback"}
            />
          }
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<ChatPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
