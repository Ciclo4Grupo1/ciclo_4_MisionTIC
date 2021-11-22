const calcularPocentajes = (limiteCO, limiteCO2, limiteHC, limiteO2,
    valorCO, valorCO2, valorHC, valorO2) => {
    let porcentajeCO = limiteCO ? valorCO * 100 / limiteCO : 0;
    let porcentajeCO2 = limiteCO2 ? valorCO2 * 100 / limiteCO2 : 0;
    let porcentajeHC = limiteHC ? valorHC * 100 / limiteHC : 0;
    let porcentajeO2 = limiteO2 ? valorO2 * 100 / limiteO2 : 0;
    return {
        porcentajeCO, porcentajeCO2, porcentajeHC, porcentajeO2
    }
}

const registrarCO = (value) => {
    let indice = -1;
    rangosCO.forEach((rango, indexRango) => {
        if (value >= rango.de && value <= rango.hasta) {
            indice = indexRango;
        }
    });
    return indice >= 0 ? rangosCO[indice].etiqueta : 'fuera_de_rango';
}

module.exports.registrarCO = registrarCO;
module.exports.calcularPocentajes = calcularPocentajes;

const registrarCO2 = (value) => {
    let indice = -1;
    rangosCO2.forEach((rango, indexRango) => {
        if (value >= rango.de && value <= rango.hasta) {
            indice = indexRango;
        }
    });
    return indice >= 0 ? rangosCO2[indice].etiqueta : 'fuera_de_rango';
}

module.exports.registrarCO2 = registrarCO2;
module.exports.calcularPocentajes = calcularPocentajes;

const registrarHC = (value) => {
    let indice = -1;
    rangosHC.forEach((rango, indexRango) => {
        if (value >= rango.de && value <= rango.hasta) {
            indice = indexRango;
        }
    });
    return indice >= 0 ? rangosHC[indice].etiqueta : 'fuera_de_rango';
}

module.exports.registrarHC = registrarHC;
module.exports.calcularPocentajes = calcularPocentajes;

const registrarO2 = (value) => {
    let indice = -1;
    rangosO2.forEach((rango, indexRango) => {
        if (value >= rango.de && value <= rango.hasta) {
            indice = indexRango;
        }
    });
    return indice >= 0 ? rangosO2[indice].etiqueta : 'fuera_de_rango';
}

module.exports.registrarO2 = registrarO2;
module.exports.calcularPocentajes = calcularPocentajes;