import { useState } from 'react';
import { Layout } from '@/components/layout';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GsapReveal } from '@/components/animations';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent',
      description: 'We will get back to you within 24 hours.',
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-wide">
          <GsapReveal>
            <p className="text-caption mb-4">Get in Touch</p>
            <h1 className="max-w-3xl mb-6">Contact Us</h1>
            <div className="w-24 h-0.5 bg-accent mb-8" />
            <p className="text-subhead max-w-2xl">
              Ready to discuss your legal needs? Contact us for a 
              confidential consultation with our team.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Contact Content */}
      <Section variant="muted">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <GsapReveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Email</p>
                      <a
                        href="mailto:info@hcla.pk"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        info@hcla.pk
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Phone</p>
                      <a
                        href="tel:+924212345678"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +92 42 1234 5678
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Legal District<br />
                        Gulberg III, Lahore<br />
                        Punjab, Pakistan
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Office Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday<br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground uppercase tracking-widest">
                  Map Embed
                </span>
              </div>
            </div>
          </GsapReveal>

          {/* Contact Form */}
          <GsapReveal delay={0.2} className="lg:col-span-2">
            <div className="bg-card border border-border p-8 md:p-10">
              <h3 className="text-lg font-semibold mb-6">Send Us a Message</h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h4 className="text-xl font-semibold mb-2">Thank You</h4>
                  <p className="text-muted-foreground mb-6">
                    Your message has been received. We will get back to you within 24 hours.
                  </p>
                  <Button
                    variant="heroOutline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        subject: '',
                        message: '',
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company / Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background resize-none"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    By submitting this form, you agree to our privacy policy. 
                    All communications are treated as confidential.
                  </p>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </GsapReveal>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
