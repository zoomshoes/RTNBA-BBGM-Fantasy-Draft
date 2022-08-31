import {loadJsonFile} from 'load-json-file';
//=> {foo: true}
var exp = await loadJsonFile('New_Exp_League_2023_Fantasy_Draft_8-2.json')
var players = exp.players
//console.log(players)

console.log(exp[0].players.pid)