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
        let wins = this.gameResults.filter( result => result.win).length
        let losses = this.gameResults.filter( result => !result.losses).length

        return[games, wins, losses]

    }
}

const stats = new Statistics

class Draw {
    constructor () {
        this.options = ["red", "green", "blue"];
        let _result = this.drawResults()
        this.getDrawResult = () => _result
    }
drawResults () {
    let colors = []
    return colors 
}

}