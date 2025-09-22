
const API_URL = "https://localhost:3000/api/usuario";

export const leerUsuarios = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener usuarios");
    return response.json();
}

export const crearUsuario = async (usuario) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    });
    if (!response.ok) throw new Error("Error al crear usuario");
    return response.json();
};

export const actualizarUsuario = async (id, data) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error al actualizar usuario");
    return response.json();
};

export const eliminarUsuario = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar usuario");
    return response.json();
}
