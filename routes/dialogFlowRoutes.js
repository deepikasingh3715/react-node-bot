const chatbot = require('../chatbot/chatbot');


const dialogflow = require('dialogflow');
const config = require('../config/keys');
const sessionClient = new dialogflow.SessionsClient();

const sessionPath = sessionClient.sessionPath('reactpageagent-wruxci','react-bot-session');
//const sessionPath = sessionClient.sessionPath(config.googleProjectID,config.dialogFlowSessionID);



module.exports = app =>{
   
  app.get('/',(req,res) =>{ 
        console.log("helllooooo");
        res.send({'hello':'deepika'});     
        });
        
  app.post('/api/df_text_query', async (req,res) =>{          
   //let responses = await chatbot.textQuery('where is scooby',req.body.parameters);         
    let responses = await chatbot.textQuery('where is scooby');     
    res.send(responses[0].queryResult);

        });
        
        
  app.post('/api/df_event_query',async (req,res) =>{   
    //let responses = await chatbot.eventQuery('welcome',req.body.parameters);     
    let responses = await chatbot.eventQuery('welcome');     
    
    res.send(responses[0].queryResult);
                });   


}