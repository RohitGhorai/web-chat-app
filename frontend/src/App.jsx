import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import Home from "./pages/Home.jsx";
import ConversationContainer from "./components/ConversationContainer.jsx";

function App() {
    const { authUser } = useAuthContext();
    return (
        <div className="dark:bg-gray-800">
            <Routes>
                <Route
                    path="/"
                    element={authUser ? <Home /> : <Navigate to={"/login"} />}
                />
                <Route
                    path="/login"
                    element={authUser ? <Navigate to="/" /> : <Login />}
                />
                <Route
                    path="/signup"
                    element={authUser ? <Navigate to="/" /> : <SignUp />}
                />
                <Route
                    path="/container"
                    element={authUser ? <Navigate to="/" /> : <SignUp />}
                />
            </Routes>
            <Toaster position="top-center" />
        </div>
    );
}

export default App;
