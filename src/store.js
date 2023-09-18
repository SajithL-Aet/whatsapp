import { applyMiddleware, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./state";
import { watcherSaga } from "./state/rootSaga";
import { RESET_STATE } from "./state/user/types";

const initialState = {};

const persistConfig = {
	key: "persist-root",
	storage: storage
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

/**
 * Clear store when user successfully signout from the app.
 */
const reducer = (state, action) => {
	if (action.type !== RESET_STATE) {
		return rootReducer(state, action);
	} else {
		return rootReducer(undefined, {});
	}
};

/**
 * Persist state in local storage.
 */
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
	persistedReducer,
	initialState,
	compose(
		applyMiddleware(...middleware)
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);
export default store;
export { persistor };
