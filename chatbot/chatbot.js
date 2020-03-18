'use strict'

const dialogflow = require('dialogflow');
const config = require('../config/keys');
const structjson  = require('./structjson');

const projectID = config.googleProjectID;
const credentials = {
  client_email:config.googleClientEmail,
  private_key:config.googlePrivateKey

}

const sessionClient = new dialogflow.SessionsClient({projectID:projectID,credentials:credentials});

const sessionPath = sessionClient.sessionPath('reactpageagent-wruxci','react-bot-session');


module.exports = {
   //textQuery: async function(text,parameters={}){
    textQuery: async function(text){
   
   let self = module.exports;
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text:text,
            //text: 'req.body.text',
            languageCode: 'config.dialogFlowSessionLanguageCode',
          },
        },
        // queryParams:{
        //   payload:{
        //       data:parameters
        //   }
        //}
      };

    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);

    return responses;
   },

   //eventQuery: async function(event,parameters){
   eventQuery: async function(event){
    let self = module.exports;
    const request = {
        session: sessionPath,
        queryInput: {
          event: {
            name:event,
            //parameters:structjson.jsonToStructProto(parameters),//js to protostruct
            languageCode: 'config.dialogFlowSessionLanguageCode',
          },
        }
        
      };

    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);

    return responses;
   

   },

   handleAction:function(responses){
       return responses;
   }

}