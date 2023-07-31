import { create } from 'zustand'
import { createInspirationInSqlite, getAllInspirations, updateInspiration } from '../drivers/sqliteDriver'
import Inspiration from '../model/inspiration'

// Create local database
const localDB = create(set => ({
  inspirations: [],
  // Creates a new Inspiration in SQLite and in the local DB
  createInspiration: (inspiration) => {
    createInspirationInSqlite(inspiration.title, inspiration.type, inspiration.value)
    .then(res => {
      const id = res.insertId
      const newInspiration = new Inspiration(id, inspiration.title, inspiration.type, inspiration.value)
      set(state => ({ 
        inspirations: [...state.inspirations, newInspiration]
      }))
    })
  },
  loadInspirationsFromSqlite: () => {
    getAllInspirations().then(res => {
      set(state => ({
        inspirations: res._array
      }))
    }).catch(err => console.log(err))
  },
  // Updates the inspiration with a given ID
  updateInspirationById: async (id, inspiration) => {
    await updateInspiration(id, inspiration)
    set(state => ( { 
      inspirations: state.inspirations.map( item => item.id === id ? { 
      id: id, title: inspiration.title, type: inspiration.type, value: inspiration.value
    } : item
  )}))},
}))


export {
  localDB
}
