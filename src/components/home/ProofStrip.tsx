import { GsapStagger } from '@/components/animations';

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '500+', label: 'Cases Won' },
  { value: '15+', label: 'Courts Represented' },
  { value: '6', label: 'Practice Areas' },
];

export function ProofStrip() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container-wide">
        <GsapStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-sm uppercase tracking-widest opacity-70">
                {stat.label}
              </p>
            </div>
          ))}
        </GsapStagger>
      </div>
    </section>
  );
}
