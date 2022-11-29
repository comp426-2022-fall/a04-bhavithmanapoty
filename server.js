#!/usr/bin/env node

import {roll} from "./lib/roll.js";
import express from 'express';
import minimist from 'minimist';

const expr = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;


app.get('*', function (req, res) {
res.send('404 NOT FOUND');
});
	
app.post('/app/roll/', function(req, res) {
res.send(roll(req.body.sides, req.body.dice, req.body.rolls));
});
	
app.listen(port);
