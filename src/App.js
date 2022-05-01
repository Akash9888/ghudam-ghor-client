import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/navbar/NavBar";
import Blog from "./Pages/blog/Blog";
import Home from "./Pages/home/Home";
import FourZeroFour from "./Pages/error/FourZeroFour";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signup/SignUp";
import PasswordReset from "./Pages/password-reset/PasswordReset";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="reset" element={<PasswordReset />} />
                </Route>
                <Route path="*" element={<FourZeroFour />} />
            </Routes>
        </div>
    );
}

export default App;
