import { createStore } from 'redux';
import rootReducer from './reducer';

//store configuration
const store = createStore(rootReducer);

export default store;