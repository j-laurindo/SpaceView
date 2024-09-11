const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve os arquivos estáticos (HTML, CSS, JS) da pasta atual
app.use(express.static(__dirname));

// Rota principal que serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
