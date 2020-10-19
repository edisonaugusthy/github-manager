import { CONSTANTS } from '../../utilities/constants';

const libraryReducer = (state = {}, action) => {
    const { library } = action;
    switch (action.type) {
        case CONSTANTS.GET_LIBRARY:
            return library;
        default:
            return state;
    }
};

export default libraryReducer;