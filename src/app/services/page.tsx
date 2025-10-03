import { Metadata } from 'next';
import { Code, Smartphone, Brain, Cloud, BarChart3, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services - KheeHoo',
  description: 'Explore our comprehensive range of technology services including web development, mobile apps, AI solutions, and cloud services.',
  openGraph: {
    title: 'Services - KheeHoo',
    description: 'Explore our comprehensive range of technology services including web development, mobile apps, AI solutions, and cloud services.',
  },
};

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React/Next.js Development', 'Node.js Backend', 'Database Design', 'API Integration'],
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      color: 'green'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: ['Chatbots & Virtual Assistants', 'Machine Learning Models', 'Data Analytics', 'Automation'],
      color: 'purple'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Containerization', 'Monitoring & Security'],
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics to drive business decisions.',
      features: ['Data Visualization', 'Dashboard Development', 'Reporting Systems', 'KPI Tracking'],
      color: 'indigo'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      red: 'bg-red-100 text-red-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business goals, challenges, and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                We create a detailed project plan with timelines, milestones, and deliverables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">
                Our expert team builds your solution using agile methodologies and best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">
                We deploy your solution and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            Start Your Project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
