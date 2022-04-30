import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/navbar/NavBar";
import Blog from "./Pages/blog/Blog";
import Home from "./Pages/home/Home";
import FourZeroFour from "./Pages/error/FourZeroFour";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
                <Route path="*" element={<FourZeroFour />} />
            </Routes>
        </div>
    );
}

export default App;
