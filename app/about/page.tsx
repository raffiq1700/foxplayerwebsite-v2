import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FoxPlayer Algo Technologies",
  description: "FoxPlayer Algo Technologies builds institutional-grade algorithmic trading infrastructure for Indian retail traders and SEBI-registered firms.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">About Foxplayer Algo Technologies</h1>
          <p className="text-xl text-white/60 leading-relaxed font-light">
            We are passionate about crafting digital experiences that engage, inform, and inspire. Whether it’s a web platform, mobile app, or custom Windows software solution, we focus on creating products that are both visually stunning and highly functional for the algorithmic trading industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Value & Benefits of Choosing Foxplayer Algo Technologies</h2>
            <p className="text-white/60 leading-relaxed mb-6 font-light">
              At Foxplayer Algo Technologies, we believe exceptional customer experiences are the key to business success. Our team of designers and developers collaborate closely to create visually stunning, user-friendly digital solutions that not only meet client needs but consistently exceed expectations.
            </p>
            <p className="text-white/60 leading-relaxed font-light">
              We take a customer-centric approach to every project, beginning with a deep understanding of the target audience and their trading needs. From there, we craft user interfaces and architectures that are both visually appealing and highly intuitive. Our team pays close attention to every detail — from typography and color schemes to the strategic placement of execution buttons — to deliver a seamless, high-speed trading experience.
            </p>
          </div>
          <div className="bg-[#0F172A]/70 border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden shadow-2xl backdrop-blur-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Our Commitment</h3>
            <p className="text-white/70 leading-relaxed relative z-10 font-light">
              Our commitment to quality, low-latency execution, and user experience has earned the trust and loyalty of our clients. We take pride in delivering exceptional B2B and B2C solutions that drive real business success.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why We Are The Best Choice</h2>
          <p className="text-white/50 text-lg font-light">For Algo Trading Software Development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="p-8 bg-[#0F172A]/40 rounded-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/30 hover:shadow-[0_0_25px_rgba(0,212,255,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-white">Complemented User Experience</h3>
            <p className="text-white/60 font-light leading-relaxed">We believe that delivering a great user experience is essential to the success of any trading software. We collaborate closely with our clients to understand their users and craft designs that are visually appealing and highly intuitive.</p>
          </div>
          
          <div className="p-8 bg-[#0F172A]/40 rounded-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/30 hover:shadow-[0_0_25px_rgba(0,212,255,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-white">Assured Services</h3>
            <p className="text-white/60 font-light leading-relaxed">Our team has extensive expertise in developing Algo Trading Software and related technologies. We offer a comprehensive range of services, including consulting, project scoping, design, development, testing, and deployment.</p>
          </div>
          
          <div className="p-8 bg-[#0F172A]/40 rounded-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/30 hover:shadow-[0_0_25px_rgba(0,212,255,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-white">Cost-effective Solution</h3>
            <p className="text-white/60 font-light leading-relaxed">We understand the importance of delivering cost-effective solutions without compromising on quality. We collaborate closely with clients to align with their budget and develop tailored trading infrastructure that meets their financial goals.</p>
          </div>
          
          <div className="p-8 bg-[#0F172A]/40 rounded-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/30 hover:shadow-[0_0_25px_rgba(0,212,255,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-white">Assured Maintenance & Support</h3>
            <p className="text-white/60 font-light leading-relaxed">Software development doesn&apos;t end at delivery. Our team is committed to providing continuous maintenance and server support to ensure your algorithms run smoothly and adapt to evolving market needs.</p>
          </div>
          
          <div className="p-8 bg-[#0F172A]/40 rounded-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/30 hover:shadow-[0_0_25px_rgba(0,212,255,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-white">Independent Coding</h3>
            <p className="text-white/60 font-light leading-relaxed">Our talented developers are deeply committed to writing high-quality, performance-driven Python and web code. We ensure our solutions are robust, scalable, and easy to maintain for long-term success in dynamic trading environments.</p>
          </div>
          
          <div className="p-8 bg-[#0F172A]/40 rounded-2xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-primary/30 hover:shadow-[0_0_25px_rgba(0,212,255,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-white">On-time Delivery</h3>
            <p className="text-white/60 font-light leading-relaxed">We are dedicated to delivering reliable solutions within the promised timeline and budget. Leveraging agile practices, we ensure clear communication, regular updates, and full transparency to achieve successful, on-time delivery.</p>
          </div>
        </div>

      </div>
      <FinalCTA />
    </div>
  );
}
