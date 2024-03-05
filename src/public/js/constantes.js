const BS_POR_KM = 30
const BING_KEY = 'AjVdFOFp93HANlnPHI_21ta6mH-7QBTC3r3U7LYzMQcysxNq2oq7_tdOU-RGbye5'
const TABLE_LENGTH = 10

const obtenerFecha = (date) => {
    const fecha = new Date(date)

    const año = fecha.getFullYear()
    const mes = (fecha.getMonth() + 1 <= 9) ?  ('0' + (fecha.getMonth() + 1)): fecha.getMonth() + 1
    const dia = (fecha.getDate() + 1 <= 9) ?  ('0' + (fecha.getDate() + 1)): fecha.getDate() + 1

    return `${dia}-${mes}-${año}`
}