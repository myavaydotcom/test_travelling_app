import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import RootRoutes from './routeConfigs/rootRoutes';
import { rootReducer } from './store/reducers/rootReducer';
import rootSaga from './store/sagas/rootSaga';
import './App.css';

const sagaStore = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaStore));

sagaStore.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <RootRoutes />
    </Provider>
  );
}

export default App;