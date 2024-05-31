import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout, Operation, PageNotFound, Briefing, About } from './pages'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Briefing />} />
            <Route path="/operation" element={<Operation />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
