const API_URL= "https://localhost:3000/api/rol-permiso";

export const leerRolPermisos = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener rol-permisos");
    return response.json();
};

export const leerPermisosDeRol = async (idRol) => {
    const response = await fetch(`${API_URL}/rol/${idRol}`);
    if (!response.ok) throw new Error("Error al obtener permisos de rol");
    return response.json();
};

export const crearRolPermiso = async (rolPermiso) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rolPermiso),
    });
    if (!response.ok) throw new Error("Error al crear rol-permiso");
    return response.json();
};

export const actualizarRolPermiso = async (id, {id_rol, id_permiso}) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id_rol, id_permiso}),
    });
    if (!response.ok) throw new Error("Error al actualizar rol-permiso");
    return response.json();
};


export const eliminarRolPermiso = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar rol-permiso");
    return response.json();
};