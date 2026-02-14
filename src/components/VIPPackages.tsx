import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Zap } from 'lucide-react';

const tiers = [
  {
    name: "Stellar Lounge",
    price: "$1,200",
    description: "Perfect for intimate gatherings.",
    icon: Star,
    features: ["Entry for 6 Guests", "1 Premium Bottle", "Standard Mixers", "Dedicated Server"],
  },
  {
    name: "Orbit Circle",
    price: "$2,500",
    description: "The classic Velvet Orbit experience.",
    icon: Zap,
    features: ["Entry for 10 Guests", "3 Premium Bottles", "Unlimited Mixers", "VIP Host Service", "Priority Bar Access"],
    popular: true
  },
  {
    name: "Galactic Suite",
    price: "$5,000",
    description: "The zenith of nightlife luxury.",
    icon: Crown,
    features: ["Entry for 20 Guests", "6 Ultra-Premium Bottles", "Private Security", "Valet Service", "Backstage Access"],
  }
];

export default function VIPPackages() {
  return (
    <section id="vip" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            VIP <span className="text-primary italic">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ascend to the upper echelons. Our VIP services provide the ultimate luxury environment for your celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <SpotlightCard 
              key={tier.name} 
              className={`relative bg-card border ${tier.popular ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border'} p-8 rounded-3xl overflow-hidden`}
            >
              {tier.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                    Most Coveted
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <tier.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold text-foreground">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-display font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground ml-2">min spend</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.popular ? "default" : "outline"} 
                className={`w-full py-6 rounded-xl ${tier.popular ? 'bg-primary text-primary-foreground' : 'border-primary/50 text-primary'}`}
              >
                Inquire Now
              </Button>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}