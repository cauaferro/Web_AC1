const { 
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
} = require("../model");

const cargos = async (req, res) => {
    const cargosList = await getCargos();
    return res.status(200).json({ result: cargosList });
};

const setores = async (req, res) => {
    const setoresList = await getSetores();
    return res.status(200).json({ result: setoresList });
};

const funcionarios = async (req, res) => {
    const funcionariosList = await getFuncionarios();
    return res.status(200).json({ result: funcionariosList });
};

const setorByName = async (req, res) => {
    const nome = req.params.nome;
    const result = await getSetorByName(nome);
    return res.status(200).json({ result });
};

const funcionarioById = async (req, res) => {
    const id = req.params.id;
    const result = await getFuncionarioById(id);
    return res.status(200).json({ result });
};

const funcionariosByCargo = async (req, res) => {
    const { cargo } = req.body;
    const result = await getFuncionariosByCargo(cargo);
    return res.status(200).json({ result });
};

const cargosWithoutFuncionarios = async (req, res) => {
    const result = await getCargosWithoutFuncionarios();
    return res.status(200).json({ result });
};

const createFuncionario = async (req, res) => {
    const { nome, cargo, setor } = req.body;
    await insertFuncionario(nome, cargo, setor);
    return res.status(201).json({ message: 'Funcionario inserido com sucesso!' });
};

const updateFuncionarioDetails = async (req, res) => {
    const { id, nome, cargo, setor } = req.body;
    await updateFuncionario(id, nome, cargo, setor);
    return res.status(200).json({ message: 'Funcionario atualizado com sucesso!' });
};

const removeFuncionario = async (req, res) => {
    const { id } = req.params;
    await deleteFuncionario(id);
    return res.status(200).json({ message: 'Funcionario excluído com sucesso!' });
};

module.exports = {
    cargos,
    setores,
    funcionarios,
    setorByName,
    funcionarioById,
    funcionariosByCargo,
    cargosWithoutFuncionarios,
    createFuncionario,
    updateFuncionarioDetails,
    removeFuncionario
};
