import Pessoa from "./pessoa"
import ModuloA from "./modulos/moduloA"
import CSS from "./assets" //se eu não especifico o arquivo ele procura or padrão o index.js

const atendente = new Pessoa()
console.log(atendente.cumprimentar())