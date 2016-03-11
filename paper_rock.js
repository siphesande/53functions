module.exports = function RockPaperScissors(n){
	winningMap = [
	    [Player1,Player2,Player1],
	    [Player2,Player1,Player2],
	    [Player1,Player2,Player1]
	],
var rock = '*',
    paper = '#',
    scissors = 'x',
    result = ["rock","paper","scissors"];
	//* = rock, # = paper, x = scissors
	this.n = n;
	this.result :result;
	this.winner :winner;
	this.status :status;
	this.Player1:play;
	this.player2:play;

var getComputerChoice = function(){
	return Math.floor(Math.random() * 3);
};

function RockPaperScissors(playerChoice) {
        this.playerChoice = playerChoice;
        this.computerChoice = getComputerChoice();
        this.winner = getWinner(this.playerChoice, this.computerChoice);
    }

	this.play = function(){
		  	winningMap = [
	     [Player1,Player2,Player1],
	     [Player2,Player1,Player2],
	     [Player1,Player2,Player1]
	],

	    var getWinner = function (playerChoice, computerChoice) {
            return winningMap[playerChoice][computerChoice];
        };


	this.score = function(){
		
	}
