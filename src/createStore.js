import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './reducers';

export const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);