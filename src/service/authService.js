const API_URL = 'https://api.example.com/auth';

export async function login(credentials) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error('Error en logging');
    return response.json();

}
