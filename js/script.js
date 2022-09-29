function habilitar(){
  document.getElementById("inpComentarios").disabled = false;
}

function calcular(){
  let combo = "";
  let cantidad = "";
  if (document.getElementById("combo1").checked){
    combo = 7.25;
    if (document.getElementById("cantidadC1").value == 0){
      document.getElementById("cantidadC1").disabled = false;
      document.getElementById("cantidadC1").value = 1;
      document.getElementById("cantidadC2").value = 0;
      document.getElementById("cantidadC3").value = 0;
      cantidad = document.getElementById("cantidadC1").value;
    }else{
      if (document.getElementById("cantidadC1").value < 0)
        alert("La cantidad colocada es inválida");
      else
        cantidad = Number(document.getElementById("cantidadC1").value);
    }
  }
  else if (document.getElementById("combo2").checked){
    combo = 5.75;
    if (document.getElementById("cantidadC2").value == 0){
      document.getElementById("cantidadC2").disabled = false;
      document.getElementById("cantidadC2").value = 1;
      document.getElementById("cantidadC1").value = 0;
      document.getElementById("cantidadC3").value = 0;
      cantidad = document.getElementById("cantidadC2").value;
    }else{
      if (document.getElementById("cantidadC2").value < 0)
        alert("La cantidad colocada es inválida");
      else
        cantidad = Number(document.getElementById("cantidadC2").value);
    }
  }else{
    combo = 3.50;
    if (document.getElementById("cantidadC3").value == 0){
      document.getElementById("cantidadC3").disabled = false;
      document.getElementById("cantidadC3").value = 1;
      document.getElementById("cantidadC2").value = 0;
      document.getElementById("cantidadC1").value = 0;
      cantidad = document.getElementById("cantidadC3").value;
    }else{
      if (document.getElementById("cantidadC3").value < 0)
        alert("La cantidad colocada es inválida");
      else
        cantidad = Number(document.getElementById("cantidadC3").value);
    }
  }

  let comentarios = document.getElementById("inpComentarios").value;

  let pedido = {
    comboSelecciona: combo,
    cantidadCombos: cantidad,/*
    compleSeleccionados: comple,
    cantidadComple: cantidadComple,*/

    redondear(){
      
    },

    subtotal(){
      return this.comboSelecciona * this.cantidadCombos;
    },

    total(){
    }
  }

  document.getElementById("factura").value = pedido.subtotal();
}