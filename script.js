// Lista de códigos válidos (podes atualizar livremente)
const validCodes = [
  "SL2025X1",
  "SL25URBAN",
  "SLBLACK01",
  "SLREDVIBE",
  "SLDROP001"
];

function verify() {
  const input = document.getElementById("code").value.trim().toUpperCase();
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "⚠️ Insira um código válido.";
    result.className = "result invalid";
    return;
  }

  if (validCodes.includes(input)) {
    result.innerHTML = "Peça original StreetLegends!<br>Autenticada com sucesso.";
    result.className = "result valid";
  } else {
    result.textContent = "Código inválido ou não encontrado.";
    result.className = "result invalid";
  }
}
