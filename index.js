const Nexmo = require('nexmo');
//for environment variable
require('dotenv').config()
const sgMail = require('@sendgrid/mail');

//for messaging 

const nexmo = new Nexmo({
  apiKey: '',
  apiSecret:'',
});

const from = 'Vonage APIs';
const to = '916283032071';
const text = "https://google.com"

nexmo.message.sendSms(from, to, text, {
    type: "unicode"
  },(err, data )=>{
      if(err){
          console.log("An Error has Occured")
      }
      else{
          console.log(`Message has successfully sent to ${to} `)
      }
  })


//for mailing purposes


sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'vishuintern@gmail.com',
  from: 'vishuchhabra1016@gmail.com',
  subject: 'This is Just for Testing',
  text: 'Hii , This is vishu chhabra ',
  html: `<h1>This is vishu chhabra <h1> <a href="https://google.com"> <button style="background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;" >CLICK HERE</button> </a>`,
};
sgMail.send(msg).then(res =>{
 
    console.log("Email sent successfully")

}).catch(err =>{
    console.log("There is an error")
})


 

