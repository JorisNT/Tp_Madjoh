let mysql = require('mysql');

module.exports = class Connection
{
    constructor()
    {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'worddb'
        });
        this.connection.connect(function(err)
        {
            if(err) console.log('Error');
            else console.log('Connected');
        });
    }

    tableWordExists (callback)
    {
      this.connection.query("SELECT * FROM information_schema.tables WHERE table_schema = 'worddb' AND table_name = 'word' LIMIT 1;", (error, rows, fields) =>{
        if(error) console.log("error check table");
        else if(rows.length > 0)
          callback(true);
        else {
          callback(false);
        }
      })
    }

    createTableWord (callback)
    {
      this.connection.query("CREATE TABLE IF NOT EXISTS word (id INTEGER AUTO_INCREMENT PRIMARY KEY, value VARCHAR(50))", (error, results, fields) =>{
        if(error){
          console.log("error create table");
          callback(false);
        }
        else {
          console.log("sucess create table");
          callback(true);
        }
      });
    }

    insertWord (word)
    {
      this.connection.query("INSERT INTO word (value) VALUES ('"+word+"')", (error, results, fields) =>{
        if(error) console.log("error insert word");
        else console.log("sucess insert word");
      })
    }

    getWordById (id, callback)
    {
      this.connection.query("SELECT * FROM word WHERE id="+id, (error, rows, fields) =>{
        if(error) console.log("error select word");
        else{
          callback(rows[0].value);
        }
      })
    }
    getConnection ()
    {
        return this.connection;
    }

}
