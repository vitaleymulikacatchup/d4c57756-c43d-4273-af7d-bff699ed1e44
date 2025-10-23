import React from 'react';
import { Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in React and Node.js',
      avatar: '/images/team-1.jpg',
      linkedin: '#'
    },
    {
      name: 'Maria Garcia',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design and modern interfaces',
      avatar: '/images/team-2.jpg',
      linkedin: '#'
    },
    {
      name: 'David Kim',
      role: 'Mobile Developer',
      bio: 'Specialist in React Native and native iOS/Android development',
      avatar: '/images/team-3.jpg',
      linkedin: '#'
    },
    {
      name: 'Sophie Wilson',
      role: 'Project Manager',
      bio: 'Experienced PM ensuring smooth project delivery and client communication',
      avatar: '/images/team-4.jpg',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind our success. Our team combines technical expertise with creative vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 font-medium text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              <a 
                href={member.linkedin}
                className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <Linkedin className="w-4 h-4 text-gray-600" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;