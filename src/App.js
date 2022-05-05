import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/navbar/NavBar";
import Blog from "./Pages/blog/Blog";
import Home from "./Pages/home/Home";
import FourZeroFour from "./Pages/error/FourZeroFour";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signup/SignUp";
import PasswordReset from "./Pages/password-reset/PasswordReset";
import AddItems from "./Pages/items/AddItems";
import ManageItems from "./Pages/items/ManageItems";
import MyItems from "./Pages/items/MyItems";
import auth from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./Components/loader/Loader";
import SingleInventory from "./Pages/inventory/SingleInventory";

function App() {
    function RequireAuth({ children }) {
        let location = useLocation();
        const [user, loading] = useAuthState(auth);

        if (loading) {
            return <Loader />;
        } else {
            if (!user) {
                return (
                    <Navigate to="/login" state={{ from: location }} replace />
                );
            }
        }

        return children;
    }
    return (
        <div className="App">
            <NavBar />
            {/* <Example /> */}
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        }
                    />
                    {/* <Route index element={<Home />} /> */}
                    <Route path="blog" element={<Blog />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="reset" element={<PasswordReset />} />
                    <Route
                        path="inventory/:id"
                        element={
                            <RequireAuth>
                                <SingleInventory />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="add-items"
                        element={
                            <RequireAuth>
                                <AddItems />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="manage-items"
                        element={
                            <RequireAuth>
                                <ManageItems />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="my-items"
                        element={
                            <RequireAuth>
                                <MyItems />
                            </RequireAuth>
                        }
                    />
                </Route>
                <Route path="*" element={<FourZeroFour />} />
            </Routes>
        </div>
    );
}

export default App;
