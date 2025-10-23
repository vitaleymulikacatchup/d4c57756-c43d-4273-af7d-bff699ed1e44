import React from 'react';
import { Globe, ExternalLink } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      icon: Globe,
      image: '/images/web-development.png'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: ExternalLink,
      image: '/images/mobile-development.png'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="flex items-start space-x-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
                    <span>Learn more</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                <div className="w-32 h-32 flex-shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Get the same high-quality service for a smaller task
            </h3>
            <p className="text-gray-600">
              We also handle smaller projects with the same level of professionalism and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;