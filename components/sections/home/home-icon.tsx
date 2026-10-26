import {
  CreditCard,
  Wallet,
  UserRound,
  FileText,
  Smartphone,
  Building2,
  MapPin,
  Headphones,
  ShieldCheck,
  ShoppingBag,
  UsersRound,
  Download,
  MessageCircle,
} from 'lucide-react';
import type { HomeIcon as IconName } from '@/data/home';
const icons = {
  card: CreditCard,
  wallet: Wallet,
  person: UserRound,
  file: FileText,
  phone: Smartphone,
  building: Building2,
  pin: MapPin,
  headphones: Headphones,
  shield: ShieldCheck,
  bag: ShoppingBag,
  users: UsersRound,
  download: Download,
  whatsapp: MessageCircle,
};
export function HomeIcon({ name }: { name: IconName }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" strokeWidth={2} />;
}
