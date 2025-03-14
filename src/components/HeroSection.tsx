
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-24 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-xl">
          <div className="space-y-2 animate-fade-in">
            <Badge 
              variant="outline" 
              className="bg-primary/10 text-primary border-primary/20 backdrop-blur-sm"
            >
              Kỷ niệm năm cuối cấp
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Lưu giữ khoảnh khắc <span className="text-primary">đáng nhớ</span> cùng bạn bè
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground animate-fade-in animate-delay-100">
            Nơi để lưu trữ và chia sẻ những khoảnh khắc quý giá cùng những người bạn thân yêu của bạn trong năm cuối cấp. Hãy để những kỷ niệm đẹp được lưu giữ mãi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary/90 hover:bg-primary text-foreground rounded-full px-6"
            >
              <Link to="/memories">Xem kỷ niệm</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="rounded-full group"
            >
              <Link to="/add-memory" className="flex items-center">
                Thêm kỷ niệm mới
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 h-full max-h-[600px]">
          <div className="grid gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg h-full animate-fade-in animate-delay-300 bg-memory-light">
              <img 
                src="" 
                alt="chưa thêm"
                className="w-full h-full object-cover animate-photo-zoom"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full animate-fade-in animate-delay-500 bg-memory-light">
              <img 
                src="" 
                alt="chưa thêm"
                className="w-full h-full object-cover animate-photo-zoom"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg h-full animate-fade-in animate-delay-400 bg-memory-light">
              <img 
                src="" 
                alt="chưa thêm"
                className="w-full h-full object-cover animate-photo-zoom"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full animate-fade-in animate-delay-200 bg-memory-light">
              <img 
                src="" 
                alt="chưa thêm"
                className="w-full h-full object-cover animate-photo-zoom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Badge = ({ children, className, variant }: { children: React.ReactNode; className?: string; variant: "default" | "secondary" | "destructive" | "outline" }) => {
  return (
    <span 
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
};

export default HeroSection;
