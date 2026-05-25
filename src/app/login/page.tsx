'use client';

import AuthLayout from "@/src/components/AuthLayout";
import LoginForm from "@/src/components/loginform/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}