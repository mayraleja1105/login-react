const API_URL = 'https://api.example.com/usuarios';

export const leerUsuarios = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al leer los usuarios');
  return res.json();
};

export const crearUsuario = async (usuario) => {
    const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });
  if (!res.ok) throw new Error('Error al crear el usuario');
  return res.json();
};

export const actualizarUsuario = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al actualizar el usuario');
  return res.json();
};

export const eliminarUsuario = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    });
    if (!res.ok) throw new Error('Error al eliminar el usuario');
    return res.json();
};   