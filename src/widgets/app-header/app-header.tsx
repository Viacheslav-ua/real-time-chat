import { ToggleTheme } from "@/features/theme/toggle-theme";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { Nav } from "./_ui/nav";
import { Profile } from "./_ui/profile";

export function AppHeader({
  variant,
}: {
  variant: "auth" | "private" | "public";
}) {
  const isProfile = variant !== "auth";

  return (
    <Layout
      logo={<Logo />}
      nav={<Nav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  );
}
