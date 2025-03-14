
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedMemories from '@/components/FeaturedMemories';
import StatSection from '@/components/StatSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedMemories />
        <StatSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
