/*
 * Function: Dia de la semana V1
 */
var diaDeLaSemanaV1 = function(dia) {
  if (dia) {
    // si dia tiene un valor
    if (typeof dia == 'number') {
      // si es un numero
      if (dia > 0 && dia < 8) {
        switch (dia) {
          case 1:
            return 'El nro 1 corresponde al día Lunes de la semana';
            break;
          case 2:
            return 'El nro 2 corresponde al día Martes de la semana';
            break;
          case 3:
            return 'El nro 2 corresponde al día Miércoles de la semana';
            break;
          case 4:
            return 'El nro 2 corresponde al día Jueves de la semana';
            break;
          case 5:
            return 'El nro 2 corresponde al día Viernes de la semana';
            break;
          case 6:
            return 'El nro 2 corresponde al día Sábado de la semana';
            break;
          case 7:
            return 'El nro 2 corresponde al día Domingo de la semana';
            break;
          default:
            return 'ERROR: El parámetro día no es un valor entero';
        }
      } else {
        return 'ERROR: El parámetro día tiene que estar comprendido entre los enteros 1 y 7.';
      }
    } else {
      return 'ERROR: El parámetro día no es un número.';
    }
  } else {
    return 'ERROR: El parámetro día es requerido';
  };
}

/*
 * Function: Dia de la semana V2
 */
var diaDeLaSemanaV2 = function(dia) {
  // validar si el dia tiene un valor definido
  if (!dia) {
    return 'ERROR: El parámetro día es requerido';
  }

  // validar si el dia es un numero
  if (typeof dia != 'number') {
    return 'ERROR: El parámetro día no es un número.';
  }

  // validar si el dia es un numero positivo
  if ((!Number.isInteger(dia)) || dia < 0) {
    return 'ERROR: El parámetro día no es un entero positivo.';
  }

  // validar si es un entero y esta dentro del rango deseado
  if (dia > 0 && dia < 8) {
    var diaPalabra = obtenerDiaV1(dia);
    if (diaPalabra) {
      return 'El nro '+dia+' corresponde al día '+diaPalabra+' de la semana';
    }
  } else {
    return 'ERROR: El parámetro día tiene que estar comprendido entre los enteros 1 y 7.';
  }
}


/** retorna el dia en palabras de la semana en base a su indice. */
var obtenerDiaV1 = function(dia) {
  switch (dia) {
    case 1:
      return 'Lunes';
      break;
    case 2:
      return 'Martes';
      break;
    case 3:
      return 'Miércoles';
      break;
    case 4:
      return 'Jueves';
      break;
    case 5:
      return 'Viernes';
      break;
    case 6:
      return 'Sábado';
      break;
    case 7:
      return 'Domingo';
      break;
    default:
      return null;
      break;
  }
}

const dias = {
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
  7: 'Domingo'
}

/*
 * Function: Dia de la semana V3
 */
var diaDeLaSemanaV3 = function(dia) {
  // validar si el dia tiene un valor definido
  if (!dia) {
    return 'ERROR: El parámetro día es requerido';
  }

  // validar si el dia es un numero
  if (typeof dia != 'number') {
    return 'ERROR: El parámetro día no es un número.';
  }

  // validar si el dia es un numero positivo
  if ((!Number.isInteger(dia)) || dia < 0) {
    return 'ERROR: El parámetro día no es un entero positivo.';
  }

  // validar si es un entero y esta dentro del rango deseado
  if (dia > 0 && dia < 8) {
    var diaPalabra = dias[dia];
    if (diaPalabra) {
      return 'El nro '+dia+' corresponde al día '+diaPalabra+' de la semana';
    }
  } else {
    return 'ERROR: El parámetro día tiene que estar comprendido entre los enteros 1 y 7.';
  }
}

console.log(diaDeLaSemanaV3(2));
