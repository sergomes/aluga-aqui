import Cidades from './estados-cidades'




const estadosStorage = localStorage.getItem('estados')
const cidadesStorage = localStorage.getItem('cidades')
if (!estadosStorage) {
    localStorage.setItem('estados', JSON.stringify(Config.estados2))
}
if (!cidadesStorage) {
    localStorage.setItem('cidades', JSON.stringify(Cidades.cities))
}