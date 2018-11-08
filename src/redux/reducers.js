import { combineReducers } from 'redux';

const gnomes = (state = { gnomes: [], filteredGnomes: [] }, action) => {
  switch (action.type) {
    case 'LOAD_ALL_GNOMES':
      return { ...state, gnomes: [...state, ...action.gnomes] };
    case 'LOAD_FILTERED_GNOMES':
      return { ...state, filteredGnomes: [...action.filteredGnomes] };
    default:
      return state;
  }
};

const reducers = combineReducers({ gnomes });

export default reducers;
