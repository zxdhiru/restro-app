
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { ArrowRight, Play, Users, TrendingUp, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary/10 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                #1 Restaurant Management Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Streamline Your{" "}
                <span className="text-primary relative">
                  Restaurant
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></div>
                </span>{" "}
                Operations
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Transform your restaurant with our all-in-one management system. 
                From inventory tracking to staff scheduling, we've got everything 
                you need to run a successful restaurant business.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-slate-600">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-slate-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold border-2 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-600">
                <Users className="w-5 h-5" />
                <span className="text-sm">Trusted by 500+ restaurants</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              {/* Dashboard Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Restaurant Dashboard</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Revenue Chart */}
                <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-2">Today's Revenue</div>
                  <div className="text-2xl font-bold text-slate-900">$2,847</div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">+12% from yesterday</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="text-sm text-slate-600">Orders Today</div>
                    <div className="text-xl font-bold text-slate-900">127</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="text-sm text-slate-600">Active Tables</div>
                    <div className="text-xl font-bold text-slate-900">8/12</div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-slate-900">Recent Orders</div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">T{i}</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">Table {i}</div>
                          <div className="text-xs text-slate-600">2 items</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-slate-900">${45 + i * 10}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-2xl rotate-12"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500/20 rounded-2xl -rotate-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
