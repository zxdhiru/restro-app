import React from "react";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                📞 Get In Touch
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your{" "}
                <span className="text-primary">Restaurant?</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Have questions? Want to see a demo? Our team is here to help you
                get started with RestaurantFlow and take your business to the
                next level.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-slate-300">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-slate-300">hello@restaurantflow.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-slate-300">
                    123 Tech Street, San Francisco, CA 94105
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Support Hours</div>
                  <div className="text-slate-300">
                    24/7 - We're always here to help
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-700">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2min</div>
                  <div className="text-sm text-slate-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-slate-400">Support Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@restaurant.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Restaurant Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your restaurant and how we can help..."
                ></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
