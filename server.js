#!/usr/bin/env node

import {roll} from "./lib/roll.js";
import express from 'express';
import minimist from 'minimist';

const expr = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;
