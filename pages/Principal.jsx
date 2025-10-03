import { useAuthContext } from "../context/AuthContext";
import { useNavigati } from "react-router-dom";
import { card } from "../components/ui/Card";
import { Layout } from "../components/layout/Layout";
import "./Pagina.css";

export const Principal = () => {
    const { user } = useAuthContext();
    const navigate = useNavigati();

    return (
        <Layout>
            <div className="principal-dashboard">
                {/* Bienvenida dentro del contenido el header ya esta en layaut */}
                <h1 className="principal-bienvenida">Bienvenido {user?.nombre}</h1>
                <p className="principal-rol">Rol: {user?.rol}</p>

                {/* cards */}
                <div className="principal-cards">
                <card
                titulo="Gestión de Usuarios"
                descripcion="crea, edita y elimina usuarios del sistema."
                onClick={() => navigate("/usuarios")}
                />
                <card
                titulo="Gestión de Roles"
                descripcion="Administra los diferentes roles disponibles."
                onClick={() => navigate("/roles")}
                />
                <card
                titulo="Gestión de Permisos"
                descripcion="Define y organiza los permisos del sistema."
                onClick={() => navigate("/permisos")}
                />
                <card
                titulo="Rol - permisos"
                descripcion="Asigna permisos a cada rol."
                onClick={() => navigate("/rol-permisos")}
                />
            </div>
            </div>
        </Layout>
    );
};
