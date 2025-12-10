import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit1", (req, res) => {
    res.render("index.ejs",
        { const bcontent : req.body["content"] }
    );
});

app.post("/submit2", (req,res) => {
    res.render("index.ejs",
        { const bcontent : req.body["ucontent"] }
    );
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);

});

