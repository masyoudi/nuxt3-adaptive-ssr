export function useStateDevice() {
  return useState('device', () => ({
    isMobile: false,
    isMobileOrTablet: false,
    isDesktop: true
  }));
}
