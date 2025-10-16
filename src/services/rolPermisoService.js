const API_URL = "http://localhost:3000/api/rol-permiso";

// leer todas las relaciones rol-permiso
export const leerRolPermisos = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al leer las relaciones rol-permiso");
  return res.json();
};

// leer permiso de un rol especifico
export const leerPermisosDeRol = async (idRol) => {
    const res = await fetch(`${API_URL}/rol/${idRol}`);
    if (!res.ok) throw new Error("Error al leer los permisos del rol");
    return res.json();
  };

//   leer una relacion por id
export const leerRolPermisoPorId = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Error al Obtener rol-permiso");
    return res.json();
  };

// crear una nueva relacion rol-permiso
export const crearRolPermiso = async (id_rol, permiso_id) => {  
    const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id_rol, permiso_id }),// nombres iguales al backend
    });
    if (!res.ok) throw new Error("Error al crear la relacion rol-permiso");
    return res.json();
  };

// Actualizar relacion rol-permiso
export const actualizarRolPermiso = async (id, id_rol, permiso_id) => {
    const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id_rol, permiso_id }), // nombres iguales al backend
    });
    if (!res.ok) throw new Error("Error al actualizar la relacion rol-permiso");
    return res.json();
    };

    // Eliminar relacion rol-permiso
export const eliminarRolPermiso = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar la relacion rol-permiso");
    return res.json();
    };    