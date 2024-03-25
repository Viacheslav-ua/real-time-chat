import AuthorizedGuard from "@/features/auth/authorized-guard";
import { AppHeader } from "@/widgets/app-header/app-header";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <AppHeader variant="private" />
      <div className="flex-1">
        <AuthorizedGuard>{children}</AuthorizedGuard>
      </div>
    </div>
  );
}