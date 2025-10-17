export function getUserName() {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    const user = JSON.parse(raw);
    return user?.name ?? null;
  } catch {
    return null;
  }
}
