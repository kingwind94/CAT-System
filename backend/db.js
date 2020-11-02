// var mysql = require('mysql');
// var dbConfig = require('./db.config'); 


// module.exports = {
//     query : function(sql,params,callback){
//         //Each time of using db, the connect to db and then close the link
//         var connection = mysql.createConnection(dbConfig);        
//         connection.connect(function(err){
//             if(err){
//                 console.log('Connect DB failed');
//                 throw err;
//             }
//          //start managing data
//         connection.query( sql, params, function(err,results,fields ){
//            if(err){
//                 console.log('Manage Data failed');
//                 throw err;
//             }

//             callback && callback(JSON.parse(JSON.stringify(results)), JSON.parse(JSON.stringify(fields)));

//              connection.end(function(err){
//                   if(err){
//                       console.log('Close the connection failed');
//                       throw err;
//                   }
//               });
//            });
//        });
//     }
// };