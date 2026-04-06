import Container from "@/components/common/Container";
import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="Contact"
          title="Reach the NexBuy team without the runaround"
          description="Use this page for support questions, product inquiries, order help, or partnership conversations."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <FeatureCard
              title="Visit us"
              description="New Orleans, USA"
              icon={<MapPin size={20} />}
            />
            <FeatureCard
              title="Call us"
              description="+1 564 6578 567"
              icon={<Phone size={20} />}
            />
            <FeatureCard
              title="Email us"
              description="nexbuy@gmail.com"
              icon={<Mail size={20} />}
            />
          </div>

          <div className="rounded-3xl border bg-tech_bg_white p-6 shadow-sm">
            <div className="mb-5 space-y-1">
              <h2 className="text-xl font-semibold text-tech_bg_dark">
                Send a message
              </h2>
              <p className="text-sm text-tech_bg_light_color">
                The form is ready for contact follow-up and matches the rest of the storefront styling.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Full name</Label>
                <Input id="contact-name" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email address</Label>
                <Input id="contact-email" placeholder="Your email address" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  className="min-h-32"
                  placeholder="Tell us what you need and we will route it to the right team."
                />
              </div>
            </div>
            <Button className="mt-6 bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_orange">
              <Send size={16} />
              Send message
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
