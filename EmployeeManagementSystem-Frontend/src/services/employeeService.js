const API_URL = 'http://localhost:9090/employees';

export const getEmployees = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getEmployeeById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const addEmployee = async (employee) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure this header is set
      },
      body: JSON.stringify(employee), // Convert the employee object to JSON
    });

    if (!response.ok) {
      throw new Error('Failed to add employee');
    }

    return response.json();
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

export const updateEmployee = async (id, employee) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employee),
  });
  return response.json();
};

export const deleteEmployee = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};