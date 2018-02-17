'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pathCommand = pathCommand;
exports.pathCommands = pathCommands;
function pathCommand(instruction) {
    return instruction.command + ' ' + instruction.x + ' ' + instruction.y;
}

function pathCommands(instructions) {
    return instructions.map(pathCommand).join(' ');
}