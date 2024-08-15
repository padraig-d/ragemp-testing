'use strict';

var path = require('path');
var dotenv = require('dotenv');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

dotenv.config({
    path: path__default["default"].resolve('.env')
});

const SHARED_CONSTANTS = {
    HELLO_WORLD: 'HELLO WORLD!'
};

mp.events.add('playerReady', (player)=>{
    console.log(`${player.name} is ready!`);
    player.customProperty = 1;
    player.customMethod = ()=>{
        console.log('customMethod called.');
    };
    player.customMethod();
});
console.log(SHARED_CONSTANTS.HELLO_WORLD);
