const API_URL = 'http://localhost:9090/roles';

export const getRoles = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch roles');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching roles:', error);
    return []; // Return an empty array if the request fails
  }
};

export const getRoleById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch role');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching role:', error);
    throw error;
  }
};

export const addRole = async (role) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(role),
  });
  return response.json();
};

export const updateRole = async (id, role) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(role),
  });
  return response.json();
};

export const deleteRole = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};