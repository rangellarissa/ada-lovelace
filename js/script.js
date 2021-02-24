document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value == "" || document.getElementById("email").value == ""){
    alert("Por favor, preencha todos os campos.")
  }else{ alert("Dados enviados!")  
  }
} 
