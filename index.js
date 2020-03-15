var admin = require("firebase-admin");

//private generated key
var serviceAccount = require("./swiftr-ba437-firebase-adminsdk-mqthg-6c3c9524a5.json");

// conncetion node with firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://swiftr-ba437.firebaseio.com"
  });

  // application token that you will to it
  var registrationToken="c0k6UeRcSUQ:APA91bFDoio9bl6BidkEyK2c3QJ8bFoq206Ux47r_vsaXBB8GNmTr6Nvxc1WiNkDaxRydl4vtE7BtmjBJy_Y64JIWstAmSwKJEkx4Lm0j2CGnE4aZR3p5KA9ZJn7oH7ovKWLXWOhhZdj";
 
 
    // message that you send as notification furthurly we will replace it by class profile id
    /*
    json structure
    notification:{
        "title":"messageTitle",
        "body":"messageBody"
    }*/

  var payLoad={
    notification:{
        //edit here
        title:"titlerrr",
        body:"bodyyyy"
    }
      
  };


  var options = {
      Priority:"high",
      timeToLive:60*60*24
  };

  //send message to a device 
  admin.messaging().sendToDevice(registrationToken,payLoad,options).then(function(response){
      console.log("Send Successfully",response.results);
  }).catch(function(error){
    console.log("Error in sending",error);
  })