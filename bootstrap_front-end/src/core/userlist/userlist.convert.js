import { USERLIST_DATA_NAME, USERLIST_KEY } from './userlist.type';

export const convertUserlistData = (data) =>
  data.map((item) => ({
    [USERLIST_DATA_NAME.LOGIN]: item[USERLIST_KEY.LOGIN],
    [USERLIST_DATA_NAME.ID]: item[USERLIST_KEY.ID],
  }));
