import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import { Home } from './Pages/Home.jsx';
import { Exams } from './Pages/Exams.jsx';
import { Programs } from './Pages/Programs.jsx';
import { StudyMaterials } from './Pages/StudyMaterials.jsx';
import { PageNotFound } from './Pages/PageNotFound.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Exams" element={<Exams />} />
            <Route path="Programs" element={<Programs />} />
            <Route path="StudyMaterials" element={<StudyMaterials />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
