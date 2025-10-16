const API_URL = "http://localhost:3000/api/permisos";

export const leerPermisos = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) 
        throw new Error("Error al leer los permisos");
        return res.json();
};

export const crearPermiso = async (permiso) => {
    const res = await fetch(API_URL, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(permiso),
    });
    if (!res.ok) 
        throw new Error("Error al crear el permiso");
        return res.json();
};

export const actualizarPermiso = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    }); 
    if (!res.ok) 
        throw new Error("Error al actualizar el permiso");
        return res.json();
};

export const eliminarPermiso = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) 
        throw new Error("Error al eliminar el permiso");
        return res.json();
};


