interface PageHeroProps {
  overline?: string;
  title: string;
  description?: string;
}

export default function PageHero({ overline, title, description }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-muted">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          {overline && (
            <p className="text-caption mb-4">{overline}</p>
          )}
          <h1 className="mb-6">{title}</h1>
          {description && (
            <>
              <div className="w-24 h-0.5 bg-accent mb-8 mx-auto" />
              <p className="text-subhead max-w-2xl mx-auto">{description}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

