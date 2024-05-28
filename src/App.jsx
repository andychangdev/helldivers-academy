import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout, HomePage, UserGuidePage } from './pages'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/userguide" element={<UserGuidePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
