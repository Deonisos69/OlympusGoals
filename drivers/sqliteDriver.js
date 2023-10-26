import * as SQLite from "expo-sqlite"


export let db = SQLite.openDatabase("olympusGoals.db");

/**
 * Creates the table containing inspirations.
 */
export function initTable() {
    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS inspirations (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, type TEXT, value TEXT);")
      })
}

/**
 * Creates a new inspiration in the database.
 * @param {String} title 
 * @param {String} type 
 * @param {String} value 
 * @returns {Promise} resolves in a sqlite resultSet object
 */
export function createInspirationInSqlite( title, type, value ) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO inspirations (title, type, value) VALUES ( ?, ?, ? );", 
            [
                title, 
                type, 
                value
            ],
            (txObj, resultSet) => {
                resolve(resultSet)
            },
            (error) => reject(error))
          })
    })
}

/**
 * 
 * @param {*} id 
 * @param {*} inspiration 
 */
export function updateInspiration( id, inspiration ) {    
    db.transaction((tx) => {
        tx.executeSql("UPDATE inspirations SET title = ?, type = ?, value = ? WHERE id = ?",
        [
            inspiration.title,
            inspiration.type,
            inspiration.value,
            id
        ],
        () => {},
        (error) => console.log(error))
    })
}

/**
 * 
 * @returns 
 */
export function getAllInspirations() {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM inspirations",
            null,
            (txObj ,resultSet) => {
                resolve(resultSet.rows)
            },
            (error) => reject(error))
          })
    })
}

/**
 * 
 */
export function dropInspirations() {
    db.transaction(tx => {
        tx.executeSql("DROP TABLE inspirations", 
        null
        )
    })
}