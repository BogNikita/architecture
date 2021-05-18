import { FormLoader, FormError } from '../../../../lib/elements/form';
import { UserlistLayout } from '../../../../lib/elements/layout';

export function UserItemComponent(props) {
  const { isPending, isError, isSuccess, userList, pageLoading, errorMessage } = props;
  return (
    <UserlistLayout>
      {isPending || (pageLoading && isSuccess) ? <FormLoader /> : userList()}
      {isError && <FormError errotTid={errorMessage} />}
    </UserlistLayout>
  );
}
