const presidentialProvider = require('../providers/presidentialProvider');

const createServices = (app) =>{

    app.get('/api/candidates/all', (req, res)=>{
        presidentialProvider.getAll(
            (result) => {
                res.send(result);
            }
        );
    });


    app.put('/api/candidates/update/:id', (req, res)=>{
        let president = req.params.id;
        presidentialProvider.changeVotes(president, (result)=>{
            res.send(result);
        })
    });

}

module.exports.createServices = createServices;


