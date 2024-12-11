import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum");
  console.log(result.rows);
  response.status(200).json({
    Frase_motivacional:
      "Tentando ser 1% melhor a cada dia, a competição é comigo mesmo...",
  });
}

export default status;
