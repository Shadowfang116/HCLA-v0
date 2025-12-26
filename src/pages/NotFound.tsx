import { Link } from "react-router-dom";
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Users, Mail } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Section variant="default" className="min-h-[80vh] flex items-center justify-center py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-caption mb-4 text-muted-foreground">Error 404</p>
          <h1 className="mb-6 text-4xl md:text-5xl font-bold">Page Not Found</h1>
          <p className="text-subhead max-w-md mx-auto mb-12 text-muted-foreground">
            The page you are looking for does not exist or has been moved. 
            Please use the navigation below to find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/" className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/team" className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" />
                Our Team
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
