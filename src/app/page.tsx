import { UseCaseChannels } from '@/components/UseCaseChannels';
import { IndustriesSection } from '@/components/IndustriesSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-100/70 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-neutral-900 mb-6">
              Your <span className="font-extrabold">Success</span>, Our <span className="font-extrabold">Promise</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Strategic tech partnership for C-level executives who envision transformative solutions. 
              We turn your data and AI ambitions into execution excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Use Case Channels Component */}
      <div className="min-h-full py-8 pb-16 bg-neutral-100/70 ">
      <UseCaseChannels />
    </div>
    
     <div className='pb-16 bg-indigo-50/30'>
      <IndustriesSection />
      </div>
     
    </>
  );
}