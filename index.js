'use strict';

const fs = require('fs');
const messages = require('./messages.js');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    messages.processMessage(message);
});

const token = fs.readFileSync('token.txt', 'utf8');

client.login(token);
