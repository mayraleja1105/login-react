const API_URL = "https://localhost:3000/api/permiso";

export const leerPermisos = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener permisos");
    return response.json();
};

export const crearPermiso = async (permiso) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(permiso),
    });
    if (!response.ok) throw new Error("Error al crear permiso");
    return response.json();
};

export const actualizarPermiso = async (id, permiso) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(permiso),
    });
    if (!response.ok) throw new Error("Error al actualizar permiso");
    return response.json();
};

export const eliminarPermiso = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar permiso");
    return response.json();
};