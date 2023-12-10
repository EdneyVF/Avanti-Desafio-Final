import InicialPage from "./Pages/Initial_Page/InicialPage"
import FilterComponent from "./Pages/ListEvent/ListEvent"
import AuthAdmin from "./Pages/AuthAdmin/AuthAdmin"
import AuthParticipant from "./Pages/AuthParticipant/AuthParticipant"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<InicialPage />} />
        <Route path="/auth" element={<AuthParticipant />} />
        <Route path="/auth-admin" element={<AuthAdmin />} />
        <Route path="/events" element={<FilterComponent />} />
      </Routes>
    </>
  )
}

export default App

