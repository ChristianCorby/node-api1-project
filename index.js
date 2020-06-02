const express = require('express');
const server = express();
server.use(express.json())
let users = [
    {
        id:1,
        name:"Booga",
        class:"High Roller",
        Bio:"I'm a gamblin' man",
    },
    {
        id:2,
        name:"Minecraft Whore",
        class:"Los Duenos",
        Bio:"Double Whammy - Ghosts and Goblins",
    },
    {
        id:3,
        name:"Gobwin",
        class:"Town Escorts",
        Bio:"I'm a sensitive Goblin",
    },
    {
        id:4,
        name:"JEFFFFFFFFFF",
        class:"High Roller",
        Bio:"Total chick magnet, loves testosterone, babes, and Ringo Star",
    },
];
server.get("/",(req, res) => {
 res.send('Discord Users');
});
server.get("/users",function(req,res){
    res.status(200).json(users);
});
server.get("/users/:id",function(req,res){
    const id = req.params.id;
    users = users.filter(u => u.id === Number(id));
    res.status(200).json(users);
});
server.post("/users", function(req,res){
    const user = req.body;
    users.push(user);
    res.status(201).json(users);
});
server.delete("/users/:id",function(req,res){
    const id = req.params.id;
    users = users.filter(u => u.id !== Number(id));
    res.status(200).json(users);
});
server.patch("/users/:id",(req, res) => {
    const {id} = req.params;
    const changes = req.body;
  
    let found = users.find(u => u.id === Number(id));
  
    if (found) {
        Object.assign(found, changes);
        res.status(200).json(found)
    } else {
        res.status(404).json({message:"user not found"})
    }
});
const port = 8000;
server.listen(port, () => console.log(`\n=== API Running on port ${port}==\n`));