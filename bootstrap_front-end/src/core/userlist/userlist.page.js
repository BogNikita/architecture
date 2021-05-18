import { UserlistContainer } from './userlist.container';
import {
  ContentLayout,
  AuthLayout,
} from '../../lib/elements/layout';
import { TitleSecondary } from '../../lib/elements/text';

export function UserlistPage() {
  return (
    <ContentLayout>
        <AuthLayout>
          <TitleSecondary tid="USER.USER.TITLE"/>
          <UserlistContainer />
        </AuthLayout>
    </ContentLayout>
  );
}
