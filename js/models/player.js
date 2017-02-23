'use strict';

module.exports = class Player
{
    constructor()
    {
        this.credits = 10;
    }

    lostCredit()
    {
        this.credits--;
    }
    winCredit()
    {
         this.credits++;
    }
}
