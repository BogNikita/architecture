import { UserItemComponent } from './user-item.component';
import { ListLayout } from '../../../../lib/elements/layout';
import { UserItemEmptyComponent } from './user-item-empty.component';
import { FormError, FormLoader } from '../../../../lib/elements/form';

export function UserItemContainer(props) {
  const { 
    isPending, 
    isError, 
    isSuccess, 
    userItem, 
    pageLoading, 
    errorMessage 
  } = props;
    

  const isEmpty = !userItem?.length;
  return (
    <ListLayout>
      {isPending || (pageLoading && isSuccess) ? (
        <FormLoader />
      ) : isEmpty ? (
        <UserItemEmptyComponent />
      ) : (
        <UserItemComponent userItem={userItem} />
      )}
      {isError && <FormError errotTid={errorMessage} />}
    </ListLayout>
  );
}
