import {localDB, pushToLocalDB} from "../db/db";
import Inspiration from "../model/inspiration";
import * as SQLite from "expo-sqlite"
import {setDb} from "../db/db"


export let db = SQLite.openDatabase("olympusGoals.db");

function addInspirationToLocalDB(id, title, type, value) {
    const inspiration = new Inspiration(id, title, type, value )

    pushToLocalDB(inspiration)
}

export function initTable() {
    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS inspirations (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, type TEXT, value TEXT);")
      })
}

export function createInspiration( title, type, value ) {
    db.transaction((tx) => {
        tx.executeSql("INSERT INTO inspirations (title, type, value) VALUES ( ?, ?, ?);", [title, type, value],
        (txObj, resultSet) => addInspirationToLocalDB(resultSet.insertId, title, type, value),
        (txObj, error) => console.log(error))
      })
}

export function getAllInspirations() {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM inspirations", null,
            (txObj, resultSet) => {
                resolve(resultSet)
            },
            (txObj, error) => reject(error))
          })
    })
}

export function dropInspirations() {
    db.transaction(tx => {
        tx.executeSql("DROP TABLE inspirations", null)
    })
}