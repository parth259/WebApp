const express244 = require ('express');
const app244 = express244 ();

app244.use(express244.json());

app244.get ('/', (req, res) => {
    console.log("*****New API Call - GET*****")
    console.log('Hello world from Express/Nodejs')
    res.send ('Hello world from Express/Nodejs');
    });

app244.get ('/api244/jobs244', (req, res) => {
    console.log("*****New API Call - GET*****")
    console.log(jobs244)
    res.send (jobs244);
    });
    
app244.get ('/api244/jobs244/:jobName/:partID', (req, res) => {
    console.log("*****New API Call - GET*****")
    var job244
    for (i=0; i < jobs244.length; i++) {
        if ((jobs244[i].jobName === req.params.jobName) && (jobs244[i].partID === req.params.partID)) {
            job244 = jobs244[i]
            break
        }
    }
    console.log('JobName : '+req.params.jobName);
    console.log('PartID: '+req.params.partID);
    if (!job244) {
        console.log('Item with jobName: "' + req.params.jobName + '" and PartID: "'+ req.params.partID + '" was not found.');
        res.status (404).send ('Item with jobName: "' + req.params.jobName + '" and PartID: "'+ req.params.partID + '" was not found.');
    }else {
        console.log(job244);
        res.send (job244);
    }
    });

app244.post('/api244/jobs244', (req, res) =>{
    console.log("*****New API Call - POST*****")
    const job244 = {
        jobName: req.body.jobName,
        partID: req.body.partID,
        qty: req.body.qty
    }
    console.log('JobName : '+job244.jobName)
    console.log('PartID: '+job244.partID);
    console.log('Quantity: '+job244.qty);
    var exist244 = false
    for (i = 0; i < jobs244.length; i++){
        var nameFlag244 = jobs244[i].jobName === job244.jobName
        var partIDFlag244 = jobs244[i].partID === job244.partID
        var qtyFlag244 = jobs244[i].qty === parseInt(job244.qty)
        if (nameFlag244 & partIDFlag244 & qtyFlag244){
            exist244 = true
        } 
    }
    if (exist244) {
        console.log("***Element already exist***")
        console.log(jobs244)
        res.send("***Element already exist***\nJobName: "+job244.jobName+"\nPartID: "+job244.partID+"\nQuantity: "+job244.qty);
    }else{
        jobs244.push(job244)
        console.log("***Job Added***")
        console.log(jobs244)
        res.send("Job Added\nJobName: "+job244.jobName+"\nPartID: "+job244.partID+"\nQuantity: "+job244.qty);
    } 
    });

app244.put('/api244/jobs244', (req, res) =>{
        console.log("*****New API Call - PUT*****")
        const job244 = {
            jobName: req.body.jobName,
            partID: req.body.partID,
            qty: req.body.qty
        }
        console.log('JobName : '+job244.jobName);
        console.log('PartID: '+job244.partID);
        console.log('Quantity: '+job244.qty);
        var exist244 = false
        for (i = 0; i < jobs244.length; i++){
            var nameFlag244 = jobs244[i].jobName === job244.jobName
            var partIDFlag244 = jobs244[i].partID === job244.partID
            if (nameFlag244 & partIDFlag244){
                jobs244[i].qty = job244.qty
                exist244 = true
            }
        }
        if (exist244){
            console.log("***Element Updated***")
            console.log(jobs244)
            res.send("***Element Updated***\nJobName: "+job244.jobName+"\nPartID: "+job244.partID+"\nQuantity: "+job244.qty)
        }else{
            console.log("***ERROR: Element do not exist***")
            console.log(jobs244)
            res.send("ERROR: Element do not exist\nJobName: "+job244.jobName+"\nPartID: "+job244.partID)
        }
    });   

let jobs244= [
    {jobName:'Job1244', partID:'P1244', qty:10},
    {jobName:'Job2244', partID:'P1244', qty:50},
    {jobName:'Job2244', partID:'P2244', qty:20},
    {jobName:'Job3244', partID:'P2244', qty:40},
    {jobName:'Job3244', partID:'P3244', qty:30}
    ]

const port244 = process.env.PORT || 3000;
app244.listen (port244, () => console.log (`Listening on port ${port244} ...`));
