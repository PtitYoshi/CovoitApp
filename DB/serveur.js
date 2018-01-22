var express = require('express');
var app=express();
//creation client
var mongoClient=require("mongodb").MongoClient;
//creation var db
var url="mongodb://127.0.0.1:27017/covoiturage";
//var db =require("mongodb://localhost:27017/covoiturage");
var cors = require('cors');
//connection db
mongoClient.connect(url,function(err,client){
	//requête prenom
	//console.log(db)
	app.use(cors());
	if (err) throw err;

	var db = client.db('covoiturage');
	app.get("/users/prenom/:prenom",function(req,res){
		db.collection("users").find({"prenom":req.params.prenom})
			.toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");
		res.end(json);
		});
	}); 
	//requête nom
	app.get("/users/nom/:nom",function(req,res){
		db.collection("users").find({"nom":req.params.nom})
			.toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");

		res.end(json);
		});
	});
	app.use(cors());
	if (err) throw err;
	app.get("/connection/:email/:mdp",function(req,res){
		db.collection("users").find({"email":req.params.nom,"mdp":req.params.mdp})
			.toArray(function(err,documents){
		//récuperation du résultat
		console.log("je marche");
		var json=JSON.stringify(documents);
		//renvoie du resultat
		console.log(documents);
		res.setHeader("Content-type","application/json");
		res.end(json);
		});
	});

	app.get("/user",function(req,res){
		console.log("Ok");
		db.collection("users").find().toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");

		res.end(json);
		});
	});

	//requete trajet ville de départ
	app.get("/trajet/villed/:villed",function(req,res){
		db.collection("trajet").find({"villed":req.params.villed})
			.toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");

		res.end(json);
		});
	});
	
	//requete trajet ville d'arrvier
	app.get("/trajet/villea/:villea",function(req,res){
		db.collection("trajet").find({"villea":req.params.villea})
			.toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");

		res.end(json);
		});
	});


	//requete trajet en fonction de la date
	app.get("/trajet/dateT/:dateT",function(req,res){
		db.collection("trajet").find({"dateT":req.params.dateT})
			.toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");

		res.end(json);
		});
	});


	//requete trajet en fonction de la date villed et arrivée 
	app.get("/trajet/:dateT/:villeD/:villeA",function(req,res){
		console.log("Ok");
		
		db.collection("trajet").find({"dateT":req.params.dateT,"villeD":req.params.villeD,"villeA":req.params.villeA})
			.toArray(function(err,documents){
		//récuperation du résultat
		console.log("Ok1");
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");
		console.log("Ok2");
		res.end(json);
		});
	});	
	//requete trajet en fonction de villed et arrivée 
app.get("/trajet/:villed/:villea",function(req,res){
		console.log("Ok");
		db.collection("trajet").find({"villed":req.params.villed,"villea":req.params.villea})
			.toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");

		res.end(json);
		});
	});



//requete tout trajet 
	app.get("/trajet",function(req,res){
		console.log("Ok");
		db.collection("trajet").find().toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");

		res.end(json);
		});
	});

	app.get("/trajetT",function(req,res){
		console.log("Ok");
		db.collection("trajet_type").find().toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");

		res.end(json);
		});
	});







		//ajout trajet en fonction de villed et arrivée 
	app.get("/trajet/:villed/:villea",function(req,res){
		console.log("Ok");
		db.collection("trajet").find({"villed":req.params.villed,"villea":req.params.villea})
			.toArray(function(err,documents){
		//récuperation du résultat
		var json=JSON.stringify(documents);
		//renvoie du resultat
		res.setHeader("Content-type","application/json");

		res.end(json);
		});
	});
		//crée trajet en fonction de villed et arrivée 
	app.put("/trajet/ajout/:mail/:villed/:villea/:date/:adressed/:adressea/:type/:nbp/:prix",function(req,res){
		//console.log("Ok");
		db.collection("trajet").insertOne({"mail":req.params.mail,"villed":req.params.villed,"villea":req.params.villea,
						   "addd":req.params.adressed,"adda":req.params.adressea,"voiture":req.params.type,
						   "nbplace":req.params.nbp,"prix":req.params.prix});
		//récuperation du résultat
		//var json=JSON.stringify(documents);
		//renvoie du resultat
		//res.setHeader("Content-type","application/json");

		//res.end(json);
		
	});

	app.put("/inscription/:nom/:prenom/:email/:droit/:num",function(req,res){
		//console.log("Ok");
		db.collection("user").insertOne({"nom":req.params.nom,"prenom":req.params.prenom,"email":req.params.email,
						   "droit":req.params.droit,"num":req.params.num,});
		//récuperation du résultat
		//var json=JSON.stringify(documents);
		//renvoie du resultat
		//res.setHeader("Content-type","application/json");

		//res.end(json);
		
	});

	app.put("/trajetT/ajout/:mail/:villed/:villea/:distance/:temps",function(req,res){
		//console.log("Ok");
		db.collection("trajet_type").insertOne({"mail":req.params.mail,"villed":req.params.villed,"villea":req.params.villea,
						   "distance":req.params.distance,"temps":req.params.temps,
						});
						console.log("ok");
	});

	app.put("/membre/update/:mail/:actif",function(req,res){
		//console.log("Ok");
		/*
		db.collection("users").updateOne({"mail":req.params.mail},{
						   "actif":req.params.actif});
*/
		db.collection("users").updateOne({"mail":req.param.mail},{"actif":req.param.actif})				   
		//récuperation du résultat
		//var json=JSON.stringify(documents);
		//renvoie du resultat
		//res.setHeader("Content-type","application/json");

		//res.end(json);
		
	});
});

app.listen(8888);


