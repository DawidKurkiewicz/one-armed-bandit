class Wallet {
    constructor(money) {
        let _money = money

        this.getWalletValue = () => _money

        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("wrong type")
                }
            } else {
                console.log(typeof value);
                throw new Error("wrong number")
            }
        }
    }
}

const wallet = new Wallet(200)

class Statistics {
    constructor() {
        this.gameResults = [{ win: true, bid: 2 }, { win: false, bid: -10 }];
    }
    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {
        let games = this.gameResults.length
        let wins = this.gameResults.filter(result => result.win).length
        let losses = this.gameResults.filter(result => !result.losses).length

        return [games, wins, losses]

    }
}

const stats = new Statistics

class Draw {
    constructor() {
        this.options = ["red", "green", "blue"];
        let _result = this.drawResults()
        this.getDrawResult = () => _result
    }
    drawResults() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length)
            const color = this.options[index]
            colors.push(color)
        }
        return colors
    }

}

const draw = new Draw()

class Result {
    static moneyWinInGame(result, bid) {
        if (result) return 3 * bid;
        else return 0
    }
    static checkWinner(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return true;
        else return false
    }
}

class Game {
    constructor() {
        this.start = new Statistics()
        this.wallet = new Wallet(100)
        document.getElementById("start").addEventListener("click", this.startGame)
        this.spanWallet = document.querySelector(".panel span.wallet")
        this.boards = [...document.querySelectorAll('div.color')];
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render()

    }

    render() {

    }

    startGame() {

    }
}