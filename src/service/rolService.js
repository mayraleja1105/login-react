const API_URL = "https://api.example.com/roles";

export const leerRoles = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al leer roles");
    return response.json();
};

export const crearRol = async (rol) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rol),
    });
    if (!response.ok) throw new Error("Error al crear rol");
    return response.json();
};

export const actualizarRol = async (id, rol) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rol),
    });
    if (!response.ok) throw new Error("Error al actualizar rol");
    return response.json();
}; 

export const eliminarRol = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar rol");
    return response.json();
}