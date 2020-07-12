import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import indexReducer from "../redux/indexReducer";
import indexSaga from "../redux/indexSaga";

export default function configureStore(initialState) {
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(
    indexReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleWare))
  );
  sagaMiddleWare.run(indexSaga);
  return store;
}
