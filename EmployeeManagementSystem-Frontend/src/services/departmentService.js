const API_URL = 'http://localhost:9090/departments';

export const getDepartments = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch departments');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching departments:', error);
    return []; // Return an empty array if the request fails
  }
};

export const getDepartmentById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const addDepartment = async (department) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(department),
  });
  return response.json();
};

export const updateDepartment = async (id, department) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(department),
  });
  return response.json();
};

export const deleteDepartment = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};