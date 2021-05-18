import { UserlistContainer } from './userlist.container';
import { ContentLayout } from '../../lib/elements/layout';
import { TitleSecondary } from '../../lib/elements/text';

export function UserlistPage() {
  return (
    <ContentLayout>
      <TitleSecondary tid="USER.USER.TITLE" />
      <UserlistContainer />
    </ContentLayout>
  );
}
