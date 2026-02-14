import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Calendar, Users, Map } from 'lucide-react';

const navItems = [
  { name: 'Home', link: '/', icon: <Home className="h-4 w-4" /> },
  { name: 'Lineup', link: '#lineup', icon: <Calendar className="h-4 w-4" /> },
  { name: 'Reservations', link: '#reservations', icon: <Map className="h-4 w-4" /> },
  { name: 'VIP', link: '#vip', icon: <Users className="h-4 w-4" /> },
];

export default function Navbar() {
  return <FloatingNav navItems={navItems} />;
}