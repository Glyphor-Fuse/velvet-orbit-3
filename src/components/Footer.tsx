import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Instagram, Star, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">
              VELVET <span className="text-primary italic">ORBIT</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              A sanctuary of retro-luxury. Reclaiming the groove of '74 for the nights of tomorrow.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary">
                <Instagram size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary">
                <Star size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary">
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Explore</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#lineup" className="hover:text-primary transition-colors">Lineup</a></li>
              <li><a href="#reservations" className="hover:text-primary transition-colors">Floor Plan</a></li>
              <li><a href="#vip" className="hover:text-primary transition-colors">VIP Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Venue</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>254 Broadway, New York, NY</li>
              <li>Open Thu-Sun | 10PM - 4AM</li>
              <li>info@velvetorbit.club</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Join the inner circle for secret lineups and priority booking.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-card border border-border rounded-lg px-4 py-4 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground">Join</Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-border mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-[0.2em]">
          <p>© 2024 Velvet Orbit Luxury Club.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}