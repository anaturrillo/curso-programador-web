$(document).ready(function () {
  console.log('Init App')

  var counter = 0

  $(document).keydown(changeCounter)

  /**
 * changeCounter recive un evento y verifica que tecla se apreto
 * para incrementar, decrementar o resetear el contador 
 * según corresponda
 * @param {HTMLEvent} event
 */
  function changeCounter (event) {
    // Levanto que tecla se presionó
    var keyNumber = event.which

    switch (keyNumber) {
      case 13:
        // Resetear counter
        counter = 0
        break
      case 38:
        // Agregar un número más
        counter++
        break
      case 40:
        // Restar un número
        counter--
        break
      default:
        // No hacer nada
        break
    }

    // Actualizo el counter en el DOM

    $('#counter').html(counter)
  }
})
