import { USERLIST_ACTION_TYPE } from './userlist.type';

import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

const initialState = {
  userItem: initRequestState()
};

export function userlistStore(state = initialState, action) {
  switch (action.type) {
    case USERLIST_ACTION_TYPE.USERLIST_UPLOAD_PENDING:
      return {
        ...state,
        userItem: setRequestPending(state.userItem)
      };

    case USERLIST_ACTION_TYPE.USERLIST_UPLOAD_SUCCESS:
      return {
        ...state,
        userItem: setRequestSuccess(state.userItem, action.data),
      };

    case USERLIST_ACTION_TYPE.USERLIST_UPLOAD_ERROR:
      return {
        ...state,
        userItem: setRequestError(state.userItem, action.message),
      };

    default:
      return state;
  }
}