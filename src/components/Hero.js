import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'React', color: 'react' },
    { name: 'Node.js', color: 'node' },
    { name: 'MySQL', color: 'mysql' },
    { name: 'MongoDB', color: 'mongodb' },
    { name: 'Nginx', color: 'nginx' },
    { name: 'Redis', color: 'redis' },
    { name: 'TypeScript', color: 'typescript' },
    { name: 'JavaScript', color: 'javascript' }
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="gradient-text">AI-powered</span><br />
                web and mobile<br />
                <span className="gradient-text">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">n</span>
                  </div>
                  <span className="font-semibold">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <p className="text-gray-600 font-medium">We use only modern technologies</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span key={index} className={`tech-badge ${tech.color}`}>
                    #{tech.name.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 3D Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="floating-3d">
                <div className="w-80 h-80 lg:w-96 lg:h-96">
                  <img 
                    src="/images/3d-illustration.png" 
                    alt="3D Abstract Illustration" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;