import { create } from 'zustand'
import { createInspirationInSqlite, dropInspirations, getAllInspirations, initTable, updateInspiration } from '../drivers/sqliteDriver'
import Inspiration from '../model/inspiration'

// Create local database
const localDB = create(set => ({
  // Database
  inspirations: [],

  /**
   * Creates a new Inspiration in SQLite and in the local DB
   * @param {Inspiration} inspiration 
   */
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

  /**
   * Loads all Inspirations from sqlite
   */ 
  loadInspirationsFromSqlite: () => {
    getAllInspirations()
    .then(res => {
      set(state => ({
        inspirations: res._array
      }))
    }).catch(err => console.log(err))
  },

  /**
   * Deletes all Inspirations locally and from sqlite
   */
  dropDatabase: () => {
    dropInspirations()
    initTable()
    set(state => ({
      inspirations: []
    }))
  },

  /**
   * Updates the inspiration with a given ID
   * @param {Number} id 
   * @param {Inspiration} inspiration 
   */
  updateInspirationById: async (id, inspiration) => {
    await updateInspiration(id, inspiration)
    set(state => ( { 
      inspirations: state.inspirations.map( item => item.id === id ? { 
      id: id, title: inspiration.title, type: inspiration.type, value: inspiration.value
    } : item
  )}))},

  // Settings
  settings: {
    numberOfInspirationsInActiveMotivation: 4
  },

  /**
   * Updates the Settings. Takes an Object as an input.
   * @param {*} setting
   * Available Settings:
   *  numberOfInspirationsInActiveMotivation
   */
  setSettings: (setting) => {
      set(state => {
        const newSettings = { ...state.settings }
        for (const [key, value] of Object.entries(setting)) {
          if (newSettings.hasOwnProperty(key)) newSettings[key] = value  
        }
        return { settings: newSettings }
      })
    
  }
}))


export {
  localDB
}
