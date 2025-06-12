
import React from "react";
import { Button } from "./ui/button";
import { Check, Star, Zap } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small restaurants and cafes",
      features: [
        "Up to 5 staff members",
        "Basic order management",
        "Table reservations",
        "Payment processing",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing restaurants",
      features: [
        "Up to 25 staff members",
        "Advanced analytics",
        "Inventory management",
        "Multi-location support",
        "Priority support",
        "Custom integrations",
        "Advanced reporting",
        "Staff scheduling"
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large restaurant chains",
      features: [
        "Unlimited staff members",
        "White-label solution",
        "API access",
        "Custom development",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced security",
        "Custom training"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            💰 Simple Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Choose Your{" "}
            <span className="text-primary">Perfect Plan</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Start with a 30-day free trial. No credit card required. 
            Upgrade or downgrade at any time.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-slate-100 rounded-full">
            <button className="px-4 py-2 bg-white text-slate-900 rounded-full font-medium shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-slate-600 font-medium">
              Annual
            </button>
            <div className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              Save 20%
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-white rounded-2xl border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105' 
                  : 'border-slate-200 hover:border-primary/30 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 mb-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.buttonVariant}
                className={`w-full py-3 text-lg font-semibold ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : ''
                }`}
              >
                {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center mt-16 p-8 bg-slate-50 rounded-2xl">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Trusted by 500+ restaurants worldwide
          </h3>
          <div className="flex items-center justify-center gap-8 opacity-60">
            {/* Logo placeholders */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-20 h-12 bg-slate-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
