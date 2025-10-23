import React from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </div>

        <div className="case-study-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Dios
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                A comprehensive platform that revolutionizes how businesses manage their operations with AI-powered insights and automation.
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Web Development
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Mobile App
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  AI Integration
                </span>
              </div>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-2xl font-bold">$2.5M</div>
                  <div className="text-blue-100 text-sm">Revenue Generated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">150%</div>
                  <div className="text-blue-100 text-sm">Growth Rate</div>
                </div>
              </div>
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <img 
                  src="/images/dios-dashboard.png" 
                  alt="Dios Dashboard" 
                  className="w-full max-w-md rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;