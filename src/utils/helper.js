export function isTabView() {
  const screenWidth = window.innerWidth;
  const minWidth = 769;
  const maxWidth = 1023;
  return screenWidth >= minWidth && screenWidth <= maxWidth;
}
