const axios = require("axios")

function sendNewPassword(name, email, password) {

  const obj = {

    subject: "Alteração de senha",
    heading: `Olá, ${name}`,
    description:
      "Segue abaixo sua nova senha:",
    password:
      `${password}`,
    image:
      "https://www.polonorterefrigeracao.com.br/wp-content/uploads/2020/06/logo.png"
  }

  let htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <body>
        <h1>${obj.heading}</h1>

        <a href="default.asp">
        <img src=${obj.image} style="width:220px;height:120px;border:0">
        </a>

        <p>${obj.description}</p>
        <p>${obj.password}</p>        

        </body>
        </html>

`

  axios({
    method: "post",
    url: "https://api.sendgrid.com/v3/mail/send",
    headers: {
      Authorization:
        'Bearer ' + process.env.SENDGRID_API_KEY
    },
    data: {
      personalizations: [
        {
          to: [
            {
              email: `${email}`,
              name: `${name}`
            }
          ],
          subject: `${obj.subject}`
        }
      ],
      from: {
        email: "polonortesenha00@gmail.com",
        name: "Polo Norte"
      },
      content: [{ type: "text/html", value: htmlTemplate }]
    }
  })
  return
}

module.exports = { sendNewPassword }