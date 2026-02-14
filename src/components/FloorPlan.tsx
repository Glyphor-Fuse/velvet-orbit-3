import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Users, Info } from 'lucide-react';

const tables = [
  { id: 'v1', type: 'Platinum Booth', capacity: 10, price: '$2,500', path: 'M 100 100 L 180 100 L 180 180 L 100 180 Z', color: 'fill-primary/20' },
  { id: 'v2', type: 'Gold Booth', capacity: 8, price: '$1,800', path: 'M 200 100 L 280 100 L 280 180 L 200 180 Z', color: 'fill-primary/10' },
  { id: 'v3', type: 'Silver Table', capacity: 6, price: '$1,200', path: 'M 300 100 L 360 100 L 360 160 L 300 160 Z', color: 'fill-primary/5' },
  { id: 'd1', type: 'DJ Side Stage', capacity: 4, price: '$3,500', path: 'M 100 200 L 150 200 L 150 250 L 100 250 Z', color: 'fill-accent/30' },
  { id: 'b1', type: 'Bar High-top', capacity: 2, price: '$500', path: 'M 300 200 L 330 200 L 330 230 L 300 230 Z', color: 'fill-primary/5' },
];

export default function FloorPlan() {
  const [selected, setSelected] = useState<typeof tables[0] | null>(null);

  return (
    <section id="reservations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Select Your <span className="text-primary italic">Orbit</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              Hover over the map to explore our exclusive VIP zones. Secure your vantage point for the night's trajectory.
            </p>
            
            <div className="relative aspect-square md:aspect-video bg-card border border-border rounded-3xl overflow-hidden p-8 flex items-center justify-center">
              <svg 
                viewBox="0 0 500 350" 
                className="w-full h-full drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 20px rgba(192, 192, 192, 0.1))' }}
              >
                {/* Stage Area */}
                <rect x="50" y="20" width="400" height="40" className="fill-muted/20" rx="4" />
                <text x="250" y="45" textAnchor="middle" className="fill-muted-foreground text-[12px] font-display uppercase tracking-widest">Main Stage</text>

                {/* Dance Floor */}
                <rect x="180" y="200" width="140" height="100" className="fill-primary/5" rx="20" />
                <text x="250" y="260" textAnchor="middle" className="fill-muted-foreground/40 text-[10px] uppercase font-display">Dance Floor</text>

                {tables.map((table) => (
                  <motion.path
                    key={table.id}
                    d={table.path}
                    className={`${table.color} cursor-pointer stroke-primary/30 stroke-2`}
                    whileHover={{ scale: 1.05, strokeWidth: 4, stroke: 'var(--primary)' }}
                    onMouseEnter={() => setSelected(table)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="w-full lg:w-1/3 sticky top-24">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card border border-border p-8 rounded-3xl shadow-xl"
                >
                  <Badge variant="outline" className="mb-4 border-primary text-primary">VIP Zone</Badge>
                  <h3 className="text-3xl font-display font-bold mb-2">{selected.type}</h3>
                  <div className="flex items-center gap-4 text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><Users size={16} /> Up to {selected.capacity} guests</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Minimum Spend</span>
                      <span className="font-bold text-xl">{selected.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Info size={14} /> Includes premium host and priority entry.
                    </div>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg group">
                    Book This Table
                    <ShoppingCart className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ) : (
                <div className="h-[400px] border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-muted/20 flex items-center justify-center mb-4">
                    <Users className="text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Select a Table</h3>
                  <p className="text-muted-foreground">Choose a spot on the floor plan to view package details and availability.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}