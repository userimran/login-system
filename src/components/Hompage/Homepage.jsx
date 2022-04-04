import react from "react";
import './Homepage.css'
const Home = (setLoginUser) => {
    const logout = () => {
        window.confirm("are you sure to logout");
        setLoginUser({})
    }
    return(
        <>
        <div className="homepage">
            <h1>hellow Homepage</h1>
            <div  className="button" onClick={logout}>Logout</div>
        </div>

        </>
    )
}
export default Home;
