import { Carousel } from '@/components/ui/carousel';

const galleryImages = [
  { url: "/images/gallery-1.png", alt: "Dance floor energy" },
  { url: "/images/gallery-2.png", alt: "VIP service detail" },
  { url: "/images/gallery-3.png", alt: "Signature cocktail" },
  { url: "/images/gallery-4.png", alt: "Modern retro interior" },
  { url: "/images/gallery-5.png", alt: "DJ performance" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          The <span className="text-primary italic">Atmosphere</span>
        </h2>
        <p className="text-muted-foreground">Caught in the shimmer. Visual echoes from the Velvet Orbit.</p>
      </div>

      <div className="w-full">
        <Carousel 
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <div className="flex gap-4 px-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[4/5] min-w-[300px] md:min-w-[450px] overflow-hidden rounded-3xl group">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-foreground font-medium text-lg">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}