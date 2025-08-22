/// SIMULADOR DE APLICACIÓN PARA DEPOSITAR O RETIRAR DINERO ///

let nombre_registrado = 'Jamel';
let intentos = 0;
let saldo_total = 300;

function depositar(monto) {
  saldo_total = saldo_total + monto;
  console.log('Ha depositado exitosamnete! \n Su nuevo saldo es: $', saldo_total);
}

function retirar(monto) {
  saldo_total = saldo_total - monto;
  console.log('Ha retirado exitosamnete! \n Su nuevo saldo es: $', saldo_total);
}


let nombre_usuario = prompt('Ingrese nombre de usuario');
for (let i = 0; i < 3; i++) {
  if (nombre_usuario == null) {
    console.log('Hasta la próxima')
    break;
  } else if (nombre_usuario !== nombre_registrado && intentos < 2) {
    nombre_usuario = prompt('Usuario incorrecto. \n Ingrese nuevamente nombre de usuario');
    intentos++;
    continue;
  } else if (intentos == 2) {
    console.log('Aplicación bloqueada.')
    break;
  } else if (nombre_usuario == nombre_registrado) {
    let movimiento = prompt('Hola, ' + nombre_usuario + '. Bienvenido! \n ¿Qué movimiento desea realizar?\n Seleccione el número: \n 1: Depositar \n 2: Retirar')
    if (movimiento == null) {
      console.log('Hasta la próxima')
      break;
    } else if (movimiento == 1) {
      let monto = parseInt(prompt('Su saldo actual es de $' + saldo_total + '. \n Ingrese el monto a depositar'));
      depositar(monto);
      break;
    } else if (movimiento == 2) {
      let monto = parseInt(prompt('Su saldo actual es de $' + saldo_total + '. \n Ingrese el monto a retirar'));
      if (monto <= saldo_total) {
        retirar(monto);
        break;
      } else if (monto > saldo_total) {
        monto = parseInt(prompt('El monto que desea retirar es mayor a su saldo actual. \n Ingrese un monto menor o igual a $' + saldo_total));
        if (monto <= saldo_total) {
          retirar(monto);
          break;
        } else {
          console.log('Inténtelo más tarde');
          break;
        }
      }
    }
  }
}