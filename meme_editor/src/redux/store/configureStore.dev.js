// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.
import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import indexReducer from "../indexReducer";
import indexSaga from "../indexSaga";

export default function configureStore(initialState) {
  const sagaMiddleWare = createSagaMiddleware();
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__({
        serialize: true,
        trace: true
      })
    : x => x;
  if (!enhancer) {
    // eslint-disable-next-line no-console
    console.warn(
      "Install Redux DevTools Extension to inspect the app state: " +
        "https://github.com/zalmoxisus/redux-devtools-extension#installation"
    );
  }
  const store = createStore(
    indexReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleWare, reduxImmutableStateInvariant()),
      enhancer
    )
  );
  sagaMiddleWare.run(indexSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../indexReducer", () => {
      const nextReducer = require("../indexReducer");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
