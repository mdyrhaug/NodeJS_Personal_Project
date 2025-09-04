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

    static deleteById(id) {

    }

    static findById(id, cb) {
        const recipe = recipes.find(r => r.id === id);
        cb(recipe);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM recipes');
    }
}