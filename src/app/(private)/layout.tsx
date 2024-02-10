import AuthorizedGuard from "@/features/auth/authorized-guard";
import { AppHeader } from "@/widgets/app-header/app-header";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="private" />
      <AuthorizedGuard>{children}</AuthorizedGuard>
    </>
  );
}
