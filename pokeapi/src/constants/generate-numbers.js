export const numeros = [];

const body = document.querySelector('body');
const rangoInicial = 1;
const rangoFinal = 1000;

for (let i = rangoInicial; i <= rangoFinal; i += 3) {
  numeros.push(i);
}

function calcularRango(scrollTop, scrollHeight, clientHeight) {
  const totalScroll = scrollHeight - clientHeight;
  const rangoTotal = rangoFinal - rangoInicial;
  const avancePorPixel = rangoTotal / totalScroll;
  return Math.round(avancePorPixel * scrollTop) + rangoInicial;
}

export const  handleScroll = () => {
  const scrollTop = body.scrollTop || document.documentElement.scrollTop;
  const scrollHeight = body.scrollHeight || document.documentElement.scrollHeight;
  const clientHeight = body.clientHeight || document.documentElement.clientHeight;
  
  const numeroActual = calcularRango(scrollTop, scrollHeight, clientHeight);
  console.log("numeroActual", numeroActual);
}