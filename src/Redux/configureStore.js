import { configureStore, combineReducers } from '@reduxjs/toolkit';
import greetingsReduce from './greeting';

const rootReducer = combineReducers({
  greetings: greetingsReduce,

});

const store = configureStore({
  reducer: rootReducer,

  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({
  //   serializableCheck: false,
  // }),

});

export default store;