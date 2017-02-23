let fs = require('fs');
const translate = require('google-translate-api');
let LineByLineReader = require('line-by-line')

let express = require('express');
let app = express();

let Connection = require('./js/services/connection');
let Player = require('./js/models/player');
let Game = require('./js/models/game');

let connection = new Connection();
let from = "fr";
let to = "en";
let info = '';
let maxWordLoaded = 500;
let game;

app.use('/assets', express.static('public'));
app.set('view engine', 'ejs');



app.get('/', (request, response) =>{

    game = new Game(new Player());
    connection.tableWordExists((res)=>{
      console.log("table exists :" +res);
      if(!res)
      {
        connection.createTableWord((result)=>{
          let nb = 0;
          let lr = new LineByLineReader('./public/resources/verbe.txt');
          lr.on('error', function (err) {
          	console.log("error reading file");
          });

          lr.on('line', function (line) {
            if(line != '')
            {
              connection.insertWord(line);
              nb++;
              if(nb == maxWordLoaded)
              {
                lr.close();
              }

            }
          });

        });
      }//
      response.render('index', {eword : '', fword : '', popup : 1, credits : 0, info: info});
      info = '';
    });


})

app.get('/new', (request, response) =>{
  let idWord = game.getIdWord();
  connection.getWordById(idWord, (word) =>{
    console.log("myword : "+word);
    translate(word, {from: from, to: to}).then(res => {
      game.waitingWord = res.text;
      let options = {
        eword : res.text,
        fword : word,
        popup : 0,
        credits : game.player.credits,
        info: ''
      };
    console.log(res.text);
    response.render('index', options);
    }).catch(err => {
        console.error(err);
    });
  })

})

app.get('/resp/:result', (request, response) =>{
  let result = request.params.result;
  game.checkword(result);
  if(game.player.credits != 0 && game.player.credits != 20)
    response.redirect('/new');
  else {
    info = game.player.credits == 0 ? 'Tu as perdu' : 'Tu as gagné';
    response.redirect('/');
  }
})

app.listen(5200);
