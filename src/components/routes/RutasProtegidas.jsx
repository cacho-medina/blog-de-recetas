import { Navigate } from "react-router-dom";

function RutasProtegidas({ children }) {
    const admin = JSON.parse(sessionStorage.getItem("loginAdmin")) || null;
    if (!admin) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }
}

export default RutasProtegidas;
