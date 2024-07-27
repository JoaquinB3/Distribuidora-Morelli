let lastId = 0; // Rastreo el ultimo ID

export function generatorID() {
  lastId += 1;

  //verifico si ID en el rango de 1 a 33 (multiplicado por 33)
  if (lastId > 33) {
    lastId = 1; // Reinicia el contador si supera 33
  }

  // Genera una parte aleatoria 
  const randomPart = Math.floor(Math.random() * 33); // Parte aleatoria de 0 a 32
  const id = `${lastId}${randomPart}`.padStart(3, '0'); // Combina y asegura el formato

  return id.slice(0, 3); // No mas de 3 digitos
}

