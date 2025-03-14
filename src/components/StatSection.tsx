
import { Camera, Users, Calendar, MapPin } from 'lucide-react';

const stats = [
  {
    icon: <Camera size={24} className="text-primary" />,
    value: '?',
    label: 'Ảnh lưu trữ',
    description: 'Những khoảnh khắc đẹp được lưu giữ'
  },
  {
    icon: <Users size={24} className="text-primary" />,
    value: '33',
    label: 'Thành viên',
    description: 'Những người bạn thân yêu đã đồng hành'
  },
  {
    icon: <Calendar size={24} className="text-primary" />,
    value: '?',
    label: 'Sự kiện',
    description: 'Những hoạt động thú vị chúng ta đã tham gia'
  },
  {
    icon: <MapPin size={24} className="text-primary" />,
    value: '?',
    label: 'Địa điểm',
    description: 'Nơi chúng ta đã cùng nhau đến thăm'
  }
];

const StatSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">Chúng ta đã cùng nhau</h2>
          <p className="text-muted-foreground animate-slide-up animate-delay-100">
            Nhìn lại hành trình của chúng ta trong suốt năm học cuối cấp, đây là những con số đáng nhớ về những gì chúng ta đã cùng nhau trải qua.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="rounded-xl p-6 glass shadow-sm border border-white/20 hover:border-primary/30 transition-all flex flex-col items-center text-center animate-scale-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="p-3 bg-primary/10 rounded-full mb-5">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1 text-foreground">{stat.value}</h3>
              <p className="font-medium text-foreground/90 mb-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
