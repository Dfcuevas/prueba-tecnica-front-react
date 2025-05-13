import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/organisms/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";
import Empresas from "./components/organisms/Empresas";
import Productos from "./components/organisms/Productos";
import Inventario from "./components/organisms/Inventario";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/empresas"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Empresas />
              </PrivateRoute>
            }
          />
          <Route
            path="/productos"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Productos />
              </PrivateRoute>
            }
          />
          <Route
            path="/inventario"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Inventario />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
