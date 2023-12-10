import InicialPage from "./Pages/Initial_Page/InicialPage"
import FilterComponent from "./Pages/ListEvent/ListEvent"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<InicialPage />} />
        <Route path="/events" element={<FilterComponent />} />
      </Routes>
    </>
  )
}

export default App
