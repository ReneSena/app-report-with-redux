import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducers from './rootReducers';

const persistConfig = {
	key: 'bankReport',
	storage,
	whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
