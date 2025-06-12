
import React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonySection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner, Bella Vista Restaurant",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "RestaurantFlow has completely transformed how we manage our restaurant. Our efficiency has increased by 40% and customer satisfaction is at an all-time high."
    },
    {
      name: "Michael Chen",
      role: "General Manager, Dragon Palace",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The analytics and reporting features are incredible. We can now make data-driven decisions that have boosted our revenue by 25% in just 3 months."
    },
    {
      name: "Emily Rodriguez",
      role: "Owner, Café Luna",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Best investment we've made for our business. The staff scheduling feature alone saves us 5 hours every week. Highly recommended!"
    },
    {
      name: "David Thompson",
      role: "Operations Director, Urban Eats",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Managing multiple locations was a nightmare before RestaurantFlow. Now everything is streamlined and we have complete visibility across all our restaurants."
    },
    {
      name: "Lisa Park",
      role: "Manager, Green Garden Bistro",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The customer support is outstanding. Any question we have is answered within minutes. The platform is intuitive and our staff loves using it."
    },
    {
      name: "James Wilson",
      role: "Owner, Coastal Kitchen",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "ROI was immediate. We reduced food waste by 30% and improved table turnover. RestaurantFlow pays for itself within the first month."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            ⭐ Customer Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our{" "}
            <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what restaurant owners and managers 
            are saying about RestaurantFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">500+</div>
            <div className="text-slate-600">Happy Restaurants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">4.9/5</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">99.9%</div>
            <div className="text-slate-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-slate-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
