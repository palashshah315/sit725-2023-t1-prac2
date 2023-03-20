var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
    console.log('listening on port ' + port)
});

app.get('/',function(req,res) {
    res.render('index.html');
});


function complexMath(num1, num2){
    return parseInt(num1)+parseInt(num2);
};


app.get('/addTwoNumbers', (req, res) =>{
   var num1 = req.query.num1;
   var num2 = req.query.num2;
   var result = complexMath(num1,num2);
   res.json({status: 200, data: result ,message: 'Success'});

});

app.post('/multiplicationOfNumbers',(req,res) =>{
    const postData = req.body;
    var num1 = postData.num1;
    var num2 = postData.num2;
    console.log("Post Data ", postData);
    var result = mulitplyNumbers(num1,num2);
    res.json({status :200, data: result, message:"success"});
    

});

function mulitplyNumbers(num1,num2){
    return parseInt(num1) * parseInt(num2);

}
