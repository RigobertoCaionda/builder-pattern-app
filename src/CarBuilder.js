'use strict'
const Carro = require("./Car");

class CarBuilder {
constructor() {
    this.carro = new Carro();
}

setModelo(modelo) {
    this.carro.modelo = modelo;
    return this;
}

setCor(cor) {
    this.carro.cor = cor;
    return this;
}

setAno(ano) {
    this.carro.ano = ano;
    return this;
}

setTipoMotor(tipoMotor) {
    this.carro.tipoMotor = tipoMotor;
    return this;
}
setNumeroPortas(numeroPortas) {
    this.carro.numeroPortas = numeroPortas;
    return this;
}

setTipoTransmissao(tipoTransmissao) {
    if(tipoTransmissao !== 'manual' && tipoTransmissao !== 'automático') {
        throw new Error('tpo de transmissão deve ser manual ou automático.');
    }
    this.carro.tipoTransmissao = tipoTransmissao;
    return this;
}

setPreco(preco) {
    if(preco < 0) {
        throw new Error('O preço deve ser um valor positivo.');
    }
    this.carro.preco = preco;
    return this;
}

build() {
    return this.carro;
}
}
module.exports = CarBuilder;