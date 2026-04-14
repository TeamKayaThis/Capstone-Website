import AuthLayout from '@/src/components/authlayout/AuthLayout';
import SignupForm from '@/src/components/signup/page';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
