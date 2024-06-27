import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


function Home() {

    const id = 3

    return (
        <>
            <div>

                <Outlet/>

                <button className="btn btn-primary" onClick={() => console.log("message")}>
                    Console
                </button>

            </div>

            <Link to={`/user/${id}`}> User3</Link>
            <NavLink to="/header" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })} >Header</NavLink> 
            
            <a className="btn btn-primary" href="/header"> Header</a>

        </>
    )

}

export default Home