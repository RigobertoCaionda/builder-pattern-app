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