const express = require("express");
const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json());



// Demo user

const users = [
    {
        username:"admin",
        password:"admin123"
    }
];



// Login API

app.post(
    "/login",
    (req,res)=>{


        const {
            username,
            password
        } = req.body;



        const user = users.find(
            (u)=>
                u.username === username &&
                u.password === password
        );



        if(user){

            res.json({

                success:true,

                message:"Login successful"

            });

        }
        else{

            res.json({

                success:false,

                message:"Invalid username or password"

            });

        }


    }
);




// Version API

app.get(
    "/version",
    (req,res)=>{

        res.json({

            version:"1.0.0",

            message:"Latest version"

        });

    }
);



app.listen(
    5000,
    ()=>{

        console.log(
            "Backend running on port 5000"
        );

    }
);