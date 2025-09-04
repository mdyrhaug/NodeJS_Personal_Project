const db = require("../utils/database.js");

module.exports = class Recipe {
    constructor(title, summary, author) {
        this.title = title;
        this.summary = summary;
        this.author = author;
    }

    save () {
        this.id = Math.random().toString();
        return db.execute('INSERT INTO recipes (id, title, summary, author) values (?,?,?,?)', [this.id, this.title, this.summary, this.author]);    
    }

    static update(id, title, summary, author) {
        return db.execute("UPDATE recipes set title = ?, summary = ?, author = ? where id = ?", [title, summary, author, id]);
    }

    static deleteById(id) {

    }

    static findById(id) {
        return db.execute('SELECT * From recipes where id = ?',[id]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM recipes');
    }
}