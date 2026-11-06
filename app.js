const express = require('express');
const app = express();

app.use(express.json());

let agendamentos = [
  {
    id: 1,
    cliente: 'João Silva',
    servico: 'Corte de cabelo',
    horario: '29/10/2026 14:00'
  },
  {
    id: 2,
    cliente: 'Carlos Souza',
    servico: 'Barba',
    horario: '29/10/2026 15:00'
  },
  {
    id: 3,
    cliente: 'Pedro Lima',
    servico: 'Corte com barba',
    horario: '30/10/2026 10:00'
  }
];

app.get('/', (req, res) => {
  res.send('API da Barbearia funcionando! ');
});

app.get('/agendamentos', (req, res) => {
  res.json(agendamentos);
});

app.post('/agendamentos', (req, res) => {
  const { cliente, servico, horario } = req.body;

  if (!cliente || !servico || !horario) {
    return res.status(400).json({
      erro: 'Informe cliente, servico e horario.'
    });
  }

  const novoId =
    agendamentos.length > 0
      ? agendamentos[agendamentos.length - 1].id + 1
      : 1;

  const novoAgendamento = {
    id: novoId,
    cliente,
    servico,
    horario
  };

  agendamentos.push(novoAgendamento);

  res.status(201).json(novoAgendamento);
});

module.exports = app;