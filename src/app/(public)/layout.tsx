import AuthorizedRedirect from "@/features/auth/authorized-redirect";
import { AppHeader } from "@/widgets/app-header/app-header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="auth" />
      <AuthorizedRedirect>{children}</AuthorizedRedirect>
    </>
  );
}
