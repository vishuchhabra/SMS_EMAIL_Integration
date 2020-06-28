const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'd325995d',
  apiSecret: 'yHKAabAbGkC9eUSp',
});

const from = 'Vonage APIs';
const to = '916283032071';
const text = "https://www.w3schools.com"

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