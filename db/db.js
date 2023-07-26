// Create empty database
let localDB = []

/**
 * Replaces current database with new database
 * @param {inspiration[]} newDB the new inspiration database
 */
function setDb(newDB) {
localDB = newDB
}

/**
 * Pushes to local DB
 * @param {inspiration} item the inspiration object that will be added to the database
 */
function pushToLocalDB(item) {
  localDB.push(item)
}

export {
  localDB,
  setDb,
  pushToLocalDB
}
