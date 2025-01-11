import React from 'react';
import { Code, GitBranch, Brain } from 'lucide-react';
import { Card, CardContent } from './ui/Card';

const services = [
  {
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies",
    icon: <Code className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Pipeline Development",
    description: "Efficient, automated data and deployment pipelines for streamlined operations",
    icon: <GitBranch className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "AI Implementation",
    description: "Custom AI solutions to transform your business processes and decision-making",
    icon: <Brain className="w-12 h-12 text-blue-600" />,
  },
];

const ServicesSection = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Our Services
      </span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <Card
          key={index}
          className="border border-gray-100 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6 transform transition-transform group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ServicesSection;