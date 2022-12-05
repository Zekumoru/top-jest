export default function capitalize(string) {
  return Array.from(string).map((ch, index) => {
    if (index === 0) return ch.toUpperCase();
    return ch.toLowerCase();
  }).join('');
}
