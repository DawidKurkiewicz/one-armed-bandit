class Wallet {
    constructor(money) {
        let _money = money

        this.getWalletValue = () => _money

        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false
        }

        this.changeWallet = (value, type = "+") => {
            if(typeof value === "number" && !isNaN(value)) {
                if( type === "+") {
                    return _money += value;
                } else if ( type === "-") {
                    return _money -= value;
                } else {
                    throw new Error ("wrong type")
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
    constructor () {
        this.gameResults = [{win: true, bid: 2}];
    }

}

const stats = new Statistics