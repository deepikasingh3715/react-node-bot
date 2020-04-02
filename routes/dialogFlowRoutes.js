const chatbot = require('../chatbot/chatbot');
var bodyParser = require('body-parser')
const dialogflow = require('dialogflow');
const config = require('../config/keys');
const sessionClient = new dialogflow.SessionsClient();
var jsonParser = bodyParser.json()

const sessionPath = sessionClient.sessionPath('reactpageagent-wruxci','react-bot-session');
//const sessionPath = sessionClient.sessionPath(config.googleProjectID,config.dialogFlowSessionID);

module.exports = app =>{
   
  app.get('/test',(req,res) =>{ 
        res.send('{"test":"passed"}');     
        });
     
   app.post('/api/df_text_query',jsonParser,async (req,res) =>{    
    let responses = await chatbot.textQuery(req.body.text,req.body.parameters);                 
    
   res.send(responses[0].queryResult.fulfillmentMessages );
    console.log(responses[0].queryResult.fulfillmentMessages);
        });
    
        app.post('/api/df_event_query',jsonParser,async (req,res) =>{  
               
    //let responses = await chatbot.eventQuery(req.body.text,req.body.parameters);     
   let responses = await chatbot.eventQuery('welcome');     
 
    res.send(responses[0].queryResult);
                });   


}