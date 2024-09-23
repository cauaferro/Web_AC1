const connection = require("../connection/connection");

const getCargos = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM cargo');
        return rows;
    } catch (error) {
        console.error("Error fetching cargos:", error);
        throw error;
    }
};

const getSetores = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM setor');
        return rows;
    } catch (error) {
        console.error("Error fetching setores:", error);
        throw error;
    }
};

const getFuncionarios = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM funcionario');
        return rows;
    } catch (error) {
        console.error("Error fetching funcionarios:", error);
        throw error;
    }
};

const getSetorByName = async (nome) => {
    try {
        const [rows] = await connection.query('SELECT * FROM setor WHERE nome = ?', [nome]);
        return rows;
    } catch (error) {
        console.error("Error fetching setor by name:", error);
        throw error;
    }
};

const getFuncionarioById = async (id) => {
    try {
        const [rows] = await connection.query('SELECT * FROM funcionario WHERE id = ?', [id]);
        return rows;
    } catch (error) {
        console.error("Error fetching funcionario by ID:", error);
        throw error;
    }
};

const getFuncionariosByCargo = async (cargo) => {
    try {
        const [rows] = await connection.query('SELECT * FROM funcionario WHERE cargo = ?', [cargo]);
        return rows;
    } catch (error) {
        console.error("Error fetching funcionarios by cargo:", error);
        throw error;
    }
};

const getCargosWithoutFuncionarios = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM cargo WHERE id NOT IN (SELECT cargo FROM funcionario)');
        return rows;
    } catch (error) {
        console.error("Error fetching cargos without funcionarios:", error);
        throw error;
    }
};

const insertFuncionario = async (nome, cargo, setor) => {
    try {
        await connection.query('INSERT INTO funcionario (nome, cargo, setor) VALUES (?, ?, ?)', [nome, cargo, setor]);
    } catch (error) {
        console.error("Error inserting funcionario:", error);
        throw error;
    }
};

const updateFuncionario = async (id, nome, cargo, setor) => {
    try {
        await connection.query('UPDATE funcionario SET nome = ?, cargo = ?, setor = ? WHERE id = ?', [nome, cargo, setor, id]);
    } catch (error) {
        console.error("Error updating funcionario:", error);
        throw error;
    }
};

const deleteFuncionario = async (id) => {
    try {
        await connection.query('DELETE FROM funcionario WHERE id = ?', [id]);
    } catch (error) {
        console.error("Error deleting funcionario:", error);
        throw error;
    }
};

module.exports = {
    getCargos,
    getSetores,
    getFuncionarios,
    getSetorByName,
    getFuncionarioById,
    getFuncionariosByCargo,
    getCargosWithoutFuncionarios,
    insertFuncionario,
    updateFuncionario,
    deleteFuncionario
};
