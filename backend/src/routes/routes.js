const { Router } = require('express');

const routes = Router();

const Mailer = require('../services/mail/Mailer');

routes.get('/', async (req, res, next) => await res.json({ status: true }));

routes.post('/contato', async (req, res, next) => {
  let { contactName, contactEmail, contactMessage } = req.body;

  try {
    await Mailer.send(
      contactEmail, 
      'Nova requisição de contrato', 
      contactMessage
    );

    return res
      .status(200)
      .json({ status: true })
      .redirect('/');
  } catch (e) {
    await console.error(`Não foi possível enviar o e-mail. Log: ${e}`);

    return res
      .status(500)
      .json({ status: false })
      .redirect('/');
  }
});

module.exports = routes;
