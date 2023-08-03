import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Login } from "./pages/login/Login";
import { Signin } from "./pages/signin/Signin";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="*" element={"404 : page not found :("} />
            </Routes>
        </>
    );
}

export default App;
