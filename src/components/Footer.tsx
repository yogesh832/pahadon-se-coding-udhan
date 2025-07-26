import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">VOTS</h3>
                <p className="text-sm opacity-80">Software Institute</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              पहाड़ों से IT दुनिया तक - हमारा mission है हर student को coding सिखाना 
              और उनके sapne pure करना।
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#courses" className="opacity-80 hover:opacity-100 transition-opacity">Courses</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#success" className="opacity-80 hover:opacity-100 transition-opacity">Success Stories</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Blog</a></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Full Stack Developer</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Python Programming</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">AWS Cloud Computing</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Computer Basics</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Web Development</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 opacity-80" />
                <div>
                  <p className="opacity-80">Near XYZ Chowk, Main Market</p>
                  <p className="opacity-80">Bageshwar, Uttarakhand - 263642</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-80" />
                <a href="tel:+91-XXXXXXXXXX" className="opacity-80 hover:opacity-100 transition-opacity">
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-80" />
                <a href="mailto:info@votsinstitute.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@votsinstitute.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 opacity-80" />
                <span className="opacity-80">Mon - Sat: 9AM - 7PM</span>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <Button variant="cta" className="w-full mt-4">
              💬 WhatsApp Us Now
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © 2024 VOTS Software Institute. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms & Conditions</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;