import { combineReducers } from 'redux'
import events from './modules/events'
import user from './modules/user'
import users from './modules/users'
import repositories from './modules/repositories'
import locales from './modules/locales'
import loadings from './modules/loadings'

const rootReducer = combineReducers({
  events,
  user,
  users,
  repositories,
  locales,
  loadings
})

export type RootStore = ReturnType<typeof rootReducer>

export default rootReducer
