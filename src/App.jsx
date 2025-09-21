import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Exam } from './Pages/Exam.jsx';
import { Programs } from './Pages/Programs.jsx';
import { StudyMaterial } from './Pages/StudyMaterial.jsx';
import { PageNotFound } from './Pages/PageNotFound.jsx';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Exam" element={<Exam />} />
            <Route path="Programs" element={<Programs />} />
            <Route path="StudyMaterial" element={<StudyMaterial />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


function Layout() {

  return (
    <>
      <span>ALLEN - </span>
      <Link to="/Exam">Exam</Link> | <Link to="/Programs">Programs</Link> |<Link to="/StudyMaterial">StudyMaterial</Link>
      <Outlet />
      <div> FOOTER </div>
    </>
  )
}

export default App
