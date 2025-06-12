
import React from "react";
import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Calendar, 
  CreditCard, 
  Bell,
  Shield,
  Smartphone,
  Clock
} from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Order Management",
      description: "Streamline orders from dine-in, takeout, and delivery with real-time tracking and automated workflows.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Manage schedules, track performance, and handle payroll with integrated HR tools designed for restaurants.",
      color: "bg-green-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Get insights into sales, inventory, and customer behavior with comprehensive analytics dashboard.",
      color: "bg-purple-500"
    },
    {
      icon: Calendar,
      title: "Table Reservations",
      description: "Accept and manage reservations with automated confirmations and table optimization.",
      color: "bg-orange-500"
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Accept all payment types with integrated POS system and secure transaction processing.",
      color: "bg-pink-500"
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Stay updated with instant alerts for orders, inventory levels, and staff communications.",
      color: "bg-indigo-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with PCI compliance and data encryption to protect your business.",
      color: "bg-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Manage your restaurant on-the-go with our mobile app for iOS and Android devices.",
      color: "bg-teal-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support team.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ✨ Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to{" "}
            <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive restaurant management platform provides all the tools 
            you need to streamline operations, increase efficiency, and grow your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-white border border-slate-200 rounded-2xl hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full">
            <span className="text-slate-700 font-medium">Ready to get started?</span>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
