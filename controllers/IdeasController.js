const db = require('../db');

module.exports = {
   index(req, res) {
    db.all(`SELECT * FROM ideas`, function (err, rows) {
      if (err) {
        console.log(err);
        return res.send("Erro no banco de dados!");
      }

      const reversedIdeas = [...rows].reverse();

      return res.render("ideias.html", { ideas: reversedIdeas });
    });
  },

  destroy(req, res) {
    db.run(`DELETE FROM ideas WHERE id = ?`, [id], function (err) {
      if (err) return console.log(err);

      console.log("Ideia deletada com sucesso!", this);
    });
  }
}