function status(request, response) {
  response
    .status(200)
    .json({
      Frase_motivacional:
        "Tentando ser 1% melhor a cada dia, a competição é comigo mesmo...",
    });
}

export default status;
