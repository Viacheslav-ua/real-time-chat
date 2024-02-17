export const getUserLetters = (email: string, name: string | undefined | null) => {
  const displayName = name ? name : email;

  const [a, b] = displayName.split("@")[0].split(/\.|\s|-|_/);

  if (!b) {
    return `${a[0]?.toUpperCase() ?? ""}${a[1]?.toUpperCase() ?? ""}`;
  }

  return `${a[0]?.toUpperCase() ?? ""}${b[0]?.toUpperCase() ?? ""}`;
}; 