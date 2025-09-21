import { Link, Outlet } from 'react-router-dom';

export function Layout() {

  return (
    <>
      <span>ALLEN - </span>
      <Link to="/Exams">Exams</Link>
      <Link to="/Programs">Programs</Link>
      <Link to="/StudyMaterials">StudyMaterials</Link>
      <Outlet />
      <div> FOOTER </div>
    </>
  )
}