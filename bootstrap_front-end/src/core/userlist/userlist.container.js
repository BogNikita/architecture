import { useEffect } from 'react';
import { userlistUploadData } from './userlist.action';
import { useDispatch, useSelector } from 'react-redux';
import { USERLIST_STORE_NAME } from './userlist.constants';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { UserlistComponent } from './userlist.component';

export function UserlistContainer() {
  const dispatch = useDispatch();

  const { state, pageLoading } = useSelector((state) => ({
    state: state[USERLIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    dispatch(userlistUploadData());
  }, []);

  return <UserlistComponent state={state} pageLoading={pageLoading}/>;
}
