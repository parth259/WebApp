const express244 = require ('express');
const mysql244 =require('mysql');
const app244 = express244 ();

app244.use(express244.json());
const bodyParser = require('body-parser')
app244.use(bodyParser.urlencoded({ extended: false }))
app244.use(bodyParser.json())

//Create connection
const db244 =mysql244.createConnection({
    host :'demords.cxchro9jfuuw.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Adminrds',
    port: '3306',
    database: 'my_db'
    });

//Connect to DB    
db244.connect((err)=>{
    if (err){
        console.log("Connection Failed")
        throw err;
    }
    console.log('MySql Connected');
    });
//GET http://localhost:3000
app244.get ('/', (req, res) => {
    console.log("*****New API Call - GET*****")
    console.log('Hello world from Express/Nodejs')
    res.send ('Hello world from Express/Nodejs');
    });

//Get List of all the jobs from DB
//GET http://localhost:3000/api244/jobs244
app244.get ('/api244/jobs244', (req, res) => {
    console.log("*****New API Call - GET*****")
    let sql244 ='SELECT * FROM jobs244'
    console.log(sql244);
    let query244= db244.query(sql244,(err,jobs244)=>{
        if (err){
            throw err;
        }
        console.log(jobs244);
        return res.send(jobs244);
        });
    });
//GET http://localhost:3000/api244/jobs244/job9244/P2244
app244.get ('/api244/jobs244/:jobName/:partID', (req, res) => {
    console.log("*****New API Call - GET*****")
    let sql244 ='SELECT * FROM jobs244 WHERE jobName=? and partId=?';
    console.log(sql244);
    let values244 =[req.params.jobName,req.params.partID];
    let query244= db244.query(sql244,values244,(err,result244)=>{
        if (err){
            throw err;
            }
        if (result244.length<1){
            console.log('***Element Not Found***\njobName: "' + req.params.jobName + '" and PartID: "'+ req.params.partID + '" was not found.');
            return res.status(404).send('***Element Not Found***\njobName: "' + req.params.jobName + '" and PartID: "'+ req.params.partID + '" was not found.');
        
        } console.log(result244);
        return res.send(result244);
    });
});
//POST REQUEST
app244.post('/api244/jobs244', (req, res) =>{
    console.log("*****New API Call - POST*****")
    console.log(('JobName:' + req.body.jobName+'\nPartID:'+ req.body.partID+'\nQuantity:'+req.body.qty));
    let values =[req.body.jobName,req.body.partID];
    let sqlSelect ='SELECT * FROM jobs244 WHERE jobName=? and partId=?';
    let sql="INSERT INTO jobs244 (jobName, partId, qty) VALUES (?, ?,?)"
    let job244 = [req.body.jobName,req.body.partID, req.body.qty]
    console.log(job244); 
    let querySelect= db244.query(sqlSelect,values,(err,result)=>{//search element
        if(result.length<1){//element not found
            console.log('***Element Not Found***\nElement to be inserted/pushed');
            let query= db244.query(sql,job244,(err,resultset244)=>{//element inserted
                if (err){
                    throw err;
                }
                console.log('***Element Inserted***\nData {'+req.body.jobName+','+req.body.partID+','+req.body.qty+'} inserted in the table')
                return res.send('***Element Inserted***\nData {'+req.body.jobName+','+req.body.partID+','+req.body.qty+'} inserted in the table');
            });
        }//element found
        else {
            console.log('***Element already exist***\nJobName: '+req.body.jobName+"\nPartID: "+req.body.partID)
            res.status(404).send('***Element already exist***\nJobName: '+req.body.jobName+"\nPartID: "+req.body.partID);
        }
    });
});
//PUT
app244.put('/api244/jobs244', (req, res) =>{
    console.log("*****New API Call - PUT*****")
    console.log(('JobName:' + req.body.jobName+'\nPartID:'+ req.body.partID+'\nQuantity:'+req.body.qty));
    let values =[req.body.jobName,req.body.partID];
    let sqlSelect ='SELECT * FROM jobs244 WHERE jobName=? and partId=?';
    let sql ='UPDATE jobs244 SET qty='+req.body.qty+' WHERE jobName="'+req.body.jobName+'" and partId="'+req.body.partID+'"';
    let job244 = [req.body.jobName,req.body.partID, req.body.qty]
    let querySelect= db244.query(sqlSelect,values,(err,result)=>{//search element
        if(result.length>0){//element found
            let query= db244.query(sql,job244,(err,resultset244)=>{
                if (err){
                    throw err;
                }
                console.log('***Element Updated***\nData {'+req.body.jobName+','+req.body.partID+','+req.body.qty+'} updated in the table')
                return res.send('***Element Updated***\nData {'+req.body.jobName+','+req.body.partID+','+req.body.qty+'} updated in the table');
            });
        }else{//element not found
            console.log("***ERROR: Element do not exist***\nJobName: "+req.body.jobName+"\nPartID: "+req.body.partID)
            res.send("ERROR: Element do not exist\nJobName: "+req.body.jobName+"\nPartID: "+req.body.partID)
        }
    });   
});
const port244 = process.env.PORT || 3000;
app244.listen (port244, () => console.log (`Listening on port ${port244} ...`));
