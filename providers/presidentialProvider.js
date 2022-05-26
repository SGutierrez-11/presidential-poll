const { defaultConfiguration } = require('express/lib/application');
const db = require('../db/DBConnection');

const getAll = (onresult) =>{

    db.con.query("SELECT * FROM candidatesA00369145", (err, result)=>{
        if(!err){
            onresult(result);
        }
    });

}

const changeVotes = (president, onresult) =>{

    db.con.query("SELECT votes FROM candidatesA00369145 WHERE id = ('"+president+"')" , (err, result)=>{
        if(!err){
            var number = result[0].votes;

            let newNumber = number + 1;

            db.con.query("UPDATE candidatesA00369145 SET votes = ('"+newNumber+"') WHERE id = ('"+president+"')" , (err, results)=>{
                if(!err){
                    onresult({results: "GOOD"});
                }else{
                    onresult({results: "ERROR"});
                }
            });
        }
    });

}



module.exports.getAll = getAll;
module.exports.changeVotes = changeVotes;