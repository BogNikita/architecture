import { SignUpContainer } from './signup.container';
import {
  PageLayout,
  ContentLayout,
  AuthLayout,
} from '../../lib/elements/layout';

export function SignupPage() {
  return (
    <ContentLayout>
      <PageLayout>
        <AuthLayout>
          <SignUpContainer />
        </AuthLayout>
      </PageLayout>
    </ContentLayout>
  );
}
