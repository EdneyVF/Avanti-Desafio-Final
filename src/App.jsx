import InitialPage from "./Pages/InicialPage/InitialPage"
import FilterComponent from "./Pages/ListEvent/ListEvent"
import AuthAdmin from "./Pages/AuthAdmin/AuthAdmin"
import AuthParticipant from "./Pages/AuthParticipant/AuthParticipant"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthParticipant />} />
        <Route path="/admin" element={<AuthAdmin />} />
        <Route path="/inicio" element={<InitialPage />} />
        <Route path="/events" element={<FilterComponent />} />
      </Routes>
    </>
  )
}

export default App

