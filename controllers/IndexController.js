const db = require('../db');

module.exports = {
  index (req, res) {
    db.all(`SELECT * FROM ideas`, function (err, rows) {
      if (err) {
        console.log(err);
        return res.send("Erro no banco de dados!");
      }

      const reversedIdeas = [...rows].reverse();

      let lastIdeas = []
      for (idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
          lastIdeas.push(idea)
        }
      }

      return res.render("index.html", { ideas: lastIdeas });
    });
  },

  create (req, res) {
    // Inserir dados na tabela
    const query = `
      INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
      ) VALUES (?,?,?,?,?);
    `
    const values = [
      req.body.image,
      req.body.title,
      req.body.category,
      req.body.description,
      req.body.link,
    ]

    db.run(query, values, function (err) {
      if (err) {
        console.log(err);
        return res.send("Erro no banco de dados!");
      }

      return res.redirect("/ideias");
    });
  },

  delete (req, res) {
    const id = '';

    db.run(`DELETE FROM ideas WHERE id = ?`, [id], function (err) {
      if (err) return console.log(err);

      console.log("Ideia deletada com sucesso!", this);
    })
  }
}