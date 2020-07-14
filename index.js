// implement your API here
const express = require("express");

const server = express();

server.get("/", (req, res) => {
	res.send("Hello World");
});

server.listen(8000, () => console.log("API running on port 8000"));

const hobbits = [
	{
		id: 1,
		name: "Samwise Gamgee",
	},
	{
		id: 2,
		name: "Frodo Baggins",
	},
];

server.get("/hobbits", (req, res) => {
	res.status(200).json(hobbits);
});


server.get("/names", (req, res) => {

    
    let names = hobbits.map((hobbit) => hobbit.name
    )
    console.log(names)
    res.status(200).json(names)
})