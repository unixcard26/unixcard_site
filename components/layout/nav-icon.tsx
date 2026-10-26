import { House, Database, MapPin, CircleHelp } from 'lucide-react';
const icons = {
  home: House,
  products: Database,
  location: MapPin,
  help: CircleHelp,
};
export function NavIcon({ name }: { name: keyof typeof icons }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className="nav-icon" strokeWidth={2} />;
}
