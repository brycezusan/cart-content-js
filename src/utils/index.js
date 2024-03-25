export const formatCurrency = (moneda)=>{
  return moneda.toLocaleString('es-PE',{
    style:'currency',
    currency:'PEN'
  })
}