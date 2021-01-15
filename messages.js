'use strict';

const fs = require('fs');

const ownName = "@dbot";
const raw = fs.readFileSync('stack.json');
const stack = JSON.parse(raw);

exports.processMessage = function(message) {
    console.log('received message');
    const cleanMessage = message.cleanContent.replace(ownName, "").trim().toLowerCase()
    if (cleanMessage.includes('hello') || cleanMessage.includes('hey') || cleanMessage.includes('hi')) {
        console.log('sending welcome message.');
        message.channel.send('Hey there!');
    } else if (cleanMessage.includes('language') || cleanMessage.includes('coding') || cleanMessage.includes('programming')) {
        console.log('asked to pick a coding language ...');
        const languages = stack.languages;
        const pickedLang = languages[Math.floor(Math.random() * languages.length)];
        message.channel.send('You should have a look at ' + pickedLang);
    }
}