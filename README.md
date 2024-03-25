# FACTORY PATTERN APP
This project is aimed at creating a simple code using the builder design pattern.
The builder design pattern is a pattern that is useful when you have an object with many configuration options or parameters and you want to build it in a flexible and organized way..

# Prerequisites
Node.js (https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
npm or Yarn
Installation
Clone the master branch of the repository:
git clone https://github.com/RigobertoCaionda/builder-pattern-app
Enter the builder-pattern-app:
cd builder-pattern-app
Install the dependencies:
npm install or yarn install
Now you can run the file CarDirector.js to see the results:
node CarDirector.js
If everything went well up to this point, you'll have somethings printed in the command prompt.

# Project Structure
This is the folder structure of this project:

src/: It has the main source code of the application. 
Important files:
Car.js: A class with the Car Object.
CarBuilder.js: A class with the CarBuilder object.
CarDirector.js: A class that uses the CarBuilder Object.

# Code Example:
This is the CarBuilder.js file:
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

This is the CarDirector.js file:
'use strict'
const CarBuilder = require("./CarBuilder");

const carro1 = new CarBuilder()
carro1
.setAno(2024)
.setCor('Branco')
.setModelo('Toyota')
.setNumeroPortas(4)
.setPreco(20000)
.setTipoMotor('kn')
.setTipoTransmissao('automático')
.build();

const carro2 = new CarBuilder()
carro2
.setAno(2020)
.setCor('Verde')
.setModelo('Suzuki')
.setNumeroPortas(2)
.setPreco(322443)
.setTipoMotor('vh')
.build()

console.log(carro1)
console.log(carro2)


# Credits
This project was developed by Rigoberto Caionda.

# Contact
If you have any questions or suggestions, please contact via email rigobertocaionda98@gmail.com or via my github page https://github.com/RigobertoCaionda