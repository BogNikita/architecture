import { USERLIST_ACTION_TYPE } from './userlist.type';

import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

const initialState = {
  userlistStatus: initRequestState(),
  data: []
};

export function userlistStore(state = initialState, action) {
  switch (action.type) {
    case USERLIST_ACTION_TYPE.USERLIST_UPLOAD_PENDING:
      return {
        ...state,
        userlistStatus: setRequestPending(state.userlistStatus)
      };

    case USERLIST_ACTION_TYPE.USERLIST_UPLOAD_SUCCESS:
      return {
        ...state,
        userlistStatus: setRequestSuccess(state.userlistStatus),
        data: action.data
      };

    case USERLIST_ACTION_TYPE.USERLIST_UPLOAD_ERROR:
      return {
        ...state,
        userlistStatus: setRequestError(state.userlistStatus, action.message),
      };

    default:
      return state;
  }
}