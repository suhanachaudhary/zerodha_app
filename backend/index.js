const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
require("dotenv").config();
const { HoldingModel } = require("./model/HoldingModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

app.use(express.json());

const url=process.env.MONGO_URL;
const PORT=process.env.PORT;

app.set("port", (process.env.PORT || 3000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/auth", require("./routes/auth"));
app.get("/dashboard",(req,res)=>{
  res.json("dashboard");
});

app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await HoldingModel.find({});
    res.json(allHoldings);
})
app.get("/allPositions",async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
  
    newOrder.save();
  
    res.send("Order saved!");
  });

app.get("/addHoldings",async(req,res)=>{
    let tempHolding=[{
      name: "WEPB",
      qty: 3,
      avg: 568.05,
      price: 341.15,
      net: "+0.58%",
      day: "+3.99%",
    }];

    await tempHolding.forEach((item)=>{
        let newHolding=HoldingModel({
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
        });

     newHolding.save();
    });res.send("done");
});


app.get("/addPositions",async(req,res)=>{
    let tempPosition=[{
      product: "STC",
      name: "AGENDA",
      qty: 2,
      avg: 519.27,
      price: 12.35,
      net: "+0.78%",
      day: "-1.24%",
      isLoss: false,
    }];

    await tempPosition.forEach((item)=>{
        let newPositions=PositionsModel({
            product: item.product,
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
            isLoss: item.isLoss,
        });

     newPositions.save();
    });res.send("done");
})

app.listen(PORT ,()=>{
    console.log("app is listing");
    mongoose.connect(url).then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));
   
});