const nodemailer = require('nodemailer');
const { _mail_host, _mail_port, _mail_user, _mail_pass } = require('../../config/vars');

class Mailer {
  constructor() {
    let transport = nodemailer.createTransport({
      host: _mail_host,
      port: _mail_port,
      auth: {
        user: _mail_user,
        pass: _mail_pass,
      },
    });
  }

  /**
   * Método para enviar o e-mail
   * 
   * @param {String} recipient Destinatário da mensagem
   * @param {String} subject Assunto do e-mail
   * @param {String} content Conteúdo do e-mail
   */
  static async send (recipient, subject, content) {
    let mailOptions = {
      from: _mail_user,
      to: recipient,
      subject,
      content,
    };

    try {
      await this.transport.sendMail(mailOptions);
    } catch (e) {
      await console.error(`Não foi possível enviar o e-mail: ${e}`);
    }
  }
}

module.exports = new Mailer();
