export const getStyles = (theme: 'light' | 'dark') => ({
  background: theme === 'dark' ? '#121212' : '#f2f2f2',
  text: theme === 'dark' ? '#fff' : '#222',
  card: theme === 'dark' ? '#1e1e1e' : '#fff',
  accent: theme === 'dark' ? '#007aff' : '#0066cc'
});
