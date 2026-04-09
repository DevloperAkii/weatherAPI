import express from "express"
import cors from "cors"

const app = express();
const router = express.Router();

const weatherAPI = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/26.462890%2C%2074.635086?unitGroup=us&include=current&key=5RYGXZMF6NPN5KFVU2798SF44&contentType=json";

app.use(cors());
app.use(express.json());

app.use("/v1/weather", router);
// app.use("/*any", (req, res) => {
//     res.send(404).send({error : "not found"});
// })

app.listen(8000, () => {
    console.log("listening to port 8000");
});

router.route("/").get((req, res) => {
    console.log("getting the request");
    fetch(weatherAPI).then(response => response.json()).then(response => {
        console.log(response.days);
        res.send(response.days);
    })
});