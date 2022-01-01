import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createLogger } from "redux-logger";
import reducer from "./appState";

const initialState = {};

const persistConfig = {
  key: 'root',
  storage,
}
const logger = createLogger();

const rootReducer = combineReducers({
  app: reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger)
  // other store enhancers if any
);

export const store = createStore(persistedReducer, initialState, enhancer);
export const persistor = persistStore(store)


