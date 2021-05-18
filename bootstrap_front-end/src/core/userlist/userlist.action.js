import { httpRequest } from '../../main/http';
import { USERLIST_ACTION_TYPE } from './userlist.type';
import { USERLIST_API } from './userlist.constants';

export function userlistUploadData() {
  return async (dispatch) => {
    dispatch({
      type: USERLIST_ACTION_TYPE.USERLIST_UPLOAD_PENDING,
    });
    try {
      const res = await httpRequest({
        method: USERLIST_API.USERLIST_UPLOAD.METHOD,
        url: USERLIST_API.USERLIST_UPLOAD.ENDPOINT,
      });
      dispatch({
        type: USERLIST_ACTION_TYPE.USERLIST_UPLOAD_SUCCESS,
        data: res.data
      });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: USERLIST_ACTION_TYPE.USERLIST_UPLOAD_ERROR,
          message: error.response.data.message
        });
      }
    }
  };
}