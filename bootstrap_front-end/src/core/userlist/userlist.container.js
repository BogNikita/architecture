import { useEffect } from 'react';
import { userlistUploadData } from './userlist.action';
import { useDispatch, useSelector } from 'react-redux';
import { USERLIST_STORE_NAME } from './userlist.constants';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { UserlistComponent } from './userlist.component';
import {
  isRequestPending,
  isRequestError,
  isRequestSuccess,
  getRequestData,
  getRequestErrorMessage
} from '../../main/store/store.service';

export function UserlistContainer() {
  const dispatch = useDispatch();

  const { state, pageLoading } = useSelector((state) => ({
    state: state[USERLIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(userlistUploadData());
  }, []);
  return (
    <UserlistComponent
      isPending={isRequestPending(state.userItem)}
      isError={isRequestError(state.userItem)}
      isSuccess={isRequestSuccess(state.userItem)}
      userItem={getRequestData(state.userItem)}
      errorMessage={getRequestErrorMessage(state.userItem)}
      pageLoading={pageLoading}
    />
  );
}
