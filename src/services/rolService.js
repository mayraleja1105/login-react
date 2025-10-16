const API_URL = "http://localhost:3000/api/roles";

export const leerRoles = async () => {

    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al leer los roles");
    return await res.json();
}

export const crearRol = async (rol) => {
    const res = await fetch(API_URL, {
        method: "POST", 
        headers: { "Content-Type": "application/json"},
         body: JSON.stringify(rol)   
        });
        if (!res.ok) throw new Error("Error al crear el rol");
        return await res.json();
    };
 
 export   const actualizarRol = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {

        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error("Error al actualizar el rol");
    return await res.json();
 };
 
 export const eliminarRol = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    if (!res.ok) throw new Error("Error al eliminar el rol");
    return await res.json();
 };
 