var express=require('express');
var router=express.Router();

let x;
let y;
let x1;
let y2;

router.get('/',function(req,res,next){
    if(req.query.x== undefined){
        x=Math.floor(Math.random()*10);
        y=Math.floor(Math.random()*10);
        z=Math.floor(Math.random()*10);
        let hypotValue=Math.hypot(x);
        let ceilValue=Math.ceil(y);
        let clzValue=Math.clz32(z);
        res.send(`Math.hypot() applied to ${x} is ${hypotValue}<br>Math.ceil() applied to ${y} is ${ceilValue}<br>Math.clz32() applied to ${z} is ${clzValue}`);
    }
    else{
        x=req.query.x;
        let hypotValue=Math.hypot(x);
        let ceilValue=Math.ceil(y);
        let clzValue=Math.clz32(z);
        res.send(`Math.hypot() applied to ${x} is ${hypotValue}<br>Math.ceil() applied to ${y} is ${ceilValue}<br>Math.clz32() applied to ${z} is ${clzValue}`);
    }
})

module.exports = router;