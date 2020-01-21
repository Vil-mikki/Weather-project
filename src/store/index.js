import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
//import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/temperatureReducer';

//const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

//sagaMiddleware.run(rootSaga);

export default store;