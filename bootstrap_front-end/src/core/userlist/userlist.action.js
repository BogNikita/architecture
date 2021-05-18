import { httpRequest } from '../../main/http';
import { USERLIST_ACTION_TYPE } from './userlist.type';
import { USERLIST_API } from './userlist.constants';
import { convertUserlistData } from './userlist.convert';

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
      const data = convertUserlistData(res.data)
      dispatch({
        type: USERLIST_ACTION_TYPE.USERLIST_UPLOAD_SUCCESS,
        data
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