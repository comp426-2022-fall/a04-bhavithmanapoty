#!/usr/bin/env node

import {roll} from "./lib/roll.js";
import express from 'express';
import minimist from 'minimist';

const expr = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

expr.use(express.json());
expr.use(express.urlencoded({extended: true}));

expr.get('/app/', function (req, res) {
res.send('200 OK');
});

expr.get('/app/roll/', function (req, res) {
res.send(roll(6, 2, 1));
});

expr.get('/app/roll/*/', function (req, res) {
let url = req.url;
let array = url.split("/");
res.send(roll(array[3], 2, 1));
});

expr.get('/app/roll/*/*/', function (req, res) {
let url = req.url;
let array = url.split("/");
res.send(roll(array[3], array[4], 1));
});

expr.get('/app/roll/*/*/*/', function (req, res) {
let url = req.url;
let array = url.split("/");
res.send(roll(array[3], array[4], array[5]));
});



expr.get('*', function (req, res) {
res.send('404 NOT FOUND');
});

expr.post('/app/roll/', function(req, res) {
res.send(roll(req.body.sides, req.body.dice, req.body.rolls));
});

expr.listen(port);
