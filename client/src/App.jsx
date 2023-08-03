import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={"login"} />
                <Route path="/signin" element={"signin"} />
                <Route path="*" element={"404 : page not found :("} />
            </Routes>
        </>
    );
}

export default App;
