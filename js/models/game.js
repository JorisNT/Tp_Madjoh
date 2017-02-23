
module.exports = class Game
{
  constructor(player)
  {
    this.player = player;
    this.waitingWord = '';
    this.info = '';
    this.maxWord = 500;
  }

  checkword(actual)
  {
    if(this.waitingWord.toUpperCase() == actual.toUpperCase())
      this.player.winCredit();
    else
      this.player.lostCredit();
  }

  getIdWord ()
  {
    return Math.floor((Math.random() * this.maxWord) + 1);
  }
}
