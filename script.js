console.log("Run");

function tempoDisp() {
  let tempo = document.getElementById("horas").value;
  if (tempo <= 1) {
    document.getElementById("resposta").innerText =
      "Resposta: " +
      tempo +
      " hora é muito pouco, com certeza a produtividade vai ajudar você e muito!";
  } else if (tempo <= 4) {
    document.getElementById("resposta").innerText =
      "Resposta: " +
      tempo +
      " horas é pouco, com certeza a produtividade vai ajudar você e muito!";
  } else if (tempo <= 8) {
    document.getElementById("resposta").innerText =
      "Resposta: " +
      tempo +
      " horas é razoável, com certeza a produtividade vai ajudar você a se organizar muito mais!";
  } else if (tempo > 8) {
    document.getElementById("resposta").innerText =
      "Resposta: " +
      tempo +
      " horas é muito bom, a produtividade pode ser bastante poderosa para te deixar mais organizado!";
  }
}
