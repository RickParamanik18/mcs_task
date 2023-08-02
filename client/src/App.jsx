import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={"homepage"} />
                <Route path="/login" element={"login"} />
                <Route path="/signin" element={"signin"} />
                <Route path="*" element={"404 : page not found :("} />
            </Routes>
        </>
    );
}

export default App;
