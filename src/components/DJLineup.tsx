import { FocusCards } from '@/components/ui/focus-cards';
import { motion } from 'framer-motion';

const lineups = [
  { title: "Oliver Chrome", src: "/images/dj-1.png" },
  { title: "Silver Fox", src: "/images/dj-2.png" },
  { title: "Discotheque Noir", src: "/images/dj-3.png" },
  { title: "Lunar Grooves", src: "/images/dj-4.png" },
  { title: "Velocity 74", src: "/images/dj-5.png" },
  { title: "Velvet Sky", src: "/images/dj-6.png" },
];

export default function DJLineup() {
  return (
    <section id="lineup" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6"
            >
              The <span className="text-primary italic">Sonic</span> Roster
            </motion.h2>
            <p className="text-muted-foreground text-lg">
              World-class selectors blending the grit of 70s funk with the precision of modern electronic luxury.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-card border border-border px-6 py-3 rounded-full flex items-center gap-4">
              <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Now Playing: Velvet Resident</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <FocusCards cards={lineups} />
      </div>
    </section>
  );
}