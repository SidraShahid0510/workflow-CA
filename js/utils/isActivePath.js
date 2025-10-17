export function isActivePath(currentPath, href) {
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  }
  if (currentPath === href) return true;
  return currentPath.includes(href);
}
