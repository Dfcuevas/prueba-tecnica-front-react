import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/organisms/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";
import Empresas from "./components/organisms/Empresas";
import Productos from "./components/organisms/Productos";
import Inventario from "./components/organisms/Inventario";
import HomePage from "./components/templates/HomePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/empresas" element={<Empresas />} />
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
              <PrivateRoute>
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
