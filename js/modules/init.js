// init.js
export const loadEmployees = async () => {
    try {
        const response = await fetch('data/employees.json');
        if (!response.ok) {
            throw new Error('Failed to fetch employees data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading employees:', error);
        return [];
    }
};