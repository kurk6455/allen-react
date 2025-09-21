import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export function Layout() {

    return (
        <>
            <div className="navBar">
                <span className="icon">ALLEN - </span>
                <div>
                    <Link className="navTab" to="/Exams">Exams</Link>
                    <Link className="navTab" to="/Programs">Programs</Link>
                    <Link className="navTab" to="/StudyMaterials">StudyMaterials</Link>
                </div>
            </div>
            <Outlet />
            <div> FOOTER </div>
        </>
    )
}