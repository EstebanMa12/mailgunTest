require('dotenv').config();
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

mg.messages.create(process.env.MAILGUN_DOMAIN, {
  from: "RecuerdaMe <recuerdame@gna.org.co>",
  to: ["desteban.maya@udea.edu.co"],
  subject: "¡Saludos desde RecuerdaMe y Mailgun!",
  text: `Hola Claudia,

Este es un mensaje de prueba enviado usando Mailgun desde Node.js.

Si recibiste este correo, la integración está funcionando correctamente.

¡Que tengas un excelente día!

Saludos,
El equipo de RecuerdaMe
`,
  html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>¡Hola Claudia!</h2>
      <p>Este es un mensaje de prueba enviado usando <strong>Mailgun</strong> desde <strong>Node.js</strong>.</p>
      <p>Si recibiste este correo, la integración está funcionando correctamente.</p>
      <p>¡Que tengas un excelente día!</p>
      <br>
      <p>Saludos,<br>El equipo de <b>RecuerdaMe</b></p>
    </div>
  `
})
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.error(err));
