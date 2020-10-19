import { CONSTANTS } from '../../utilities/constants';

const reposeReducer = (state = {}, action) => {
    const { repose } = action;
    switch (action.type) {
        case CONSTANTS.GET_REPOSE:
            return repose;
        default:
            return state;
    }
};

export default reposeReducer;