const express = require('express');
const {
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
} = require('./controller');

const router = express.Router();

router.get('/cargos', cargos);
router.get('/setores', setores);
router.get('/funcionarios', funcionarios);
router.get('/setor/:nome', setorByName);
router.get('/funcionario/:id', funcionarioById);
router.get('/cargos/no-funcionarios', cargosWithoutFuncionarios);

router.post('/funcionarios/cargo', funcionariosByCargo);
router.post('/funcionario', createFuncionario);

router.put('/funcionario', updateFuncionarioDetails);

router.delete('/funcionario/:id', removeFuncionario);

module.exports = router;
