import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout, HomePage, PageNotFound, UserGuidePage } from './pages'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/userguide" element={<UserGuidePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
