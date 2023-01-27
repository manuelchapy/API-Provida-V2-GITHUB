const { Router } = require('express');
const ctrlResultados = require('../controllers/resultados.controllers');
const router = Router();

router.route('/guardarResultadosExamenes')
		.post(ctrlResultados.guardarResultadosExamenes)

router.route('/guardarResultadosAntibioticos')
		.post(ctrlResultados.guardarResultadosAntibioticos)

router.route('/modificarResultadosAntibioticos')
		.post(ctrlResultados.modificarResultadosAntibioticos)

router.route('/checkDetallesOrdenesExamenes')
		.post(ctrlResultados.checkDetallesOrdenesExamenes)

router.route('/checkDetallesOrdenesCultivos')
		.post(ctrlResultados.checkDetallesOrdenesCultivos)

router.route('/ModificarResultadosExamenes')
		.post(ctrlResultados.ModificarResultadosExamenes)

module.exports = router;