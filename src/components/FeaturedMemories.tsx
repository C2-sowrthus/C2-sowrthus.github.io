
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MemoryCard, { MemoryProps } from './MemoryCard';

// Sample memories data
const memoriesData: MemoryProps[] = [
  {
    id: '1',
    title: 'Chuyến dã ngoại cuối cấp',
    date: '2023-05-15',
    description: 'Chuyến dã ngoại cuối cùng cùng cả lớp tại Vườn Quốc Gia. Chúng ta đã cùng nhau nấu ăn, chơi trò chơi và chia sẻ những kỷ niệm đẹp.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    likes: 24,
    comments: 8,
    location: 'Vườn Quốc Gia',
    tags: ['Dã ngoại', 'Lớp học', 'Vui vẻ']
  },
  {
    id: '2',
    title: 'Lễ tốt nghiệp',
    date: '2023-06-30',
    description: 'Ngày tốt nghiệp đánh dấu kết thúc hành trình của chúng ta tại trường. Chúng ta đã cùng nhau chia sẻ niềm vui, nỗi buồn và hy vọng cho tương lai.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    likes: 42,
    comments: 15,
    location: 'Trường học',
    tags: ['Tốt nghiệp', 'Mũ tốt nghiệp', 'Kỷ yếu']
  },
  {
    id: '3',
    title: 'Tiệc chia tay',
    date: '2023-07-10',
    description: 'Bữa tiệc chia tay đầy cảm xúc trước khi mỗi người bước vào một hành trình mới. Chúng ta đã cùng nhau nhảy múa, hát và hứa hẹn sẽ luôn giữ liên lạc.',
    image: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    likes: 38,
    comments: 12,
    location: 'Nhà hàng',
    tags: ['Tiệc', 'Chia tay', 'Bạn bè']
  },
  {
    id: '4',
    title: 'Ngày cuối ở lớp học',
    date: '2023-06-25',
    description: 'Ngày cuối cùng trong lớp học, chúng ta đã cùng nhau dọn dẹp, trao đổi lời nhắn và chụp những bức ảnh cuối cùng trong không gian quen thuộc.',
    image: 'https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    likes: 29,
    comments: 7,
    location: 'Lớp học',
    tags: ['Lớp học', 'Ngày cuối', 'Kỷ niệm']
  },
];

const FeaturedMemories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-memory-light/50">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-3 animate-slide-up">Kỷ niệm đáng nhớ</h2>
            <p className="text-muted-foreground animate-slide-up animate-delay-100">
              Những khoảnh khắc đặc biệt được lưu giữ và chia sẻ bởi mọi người. Cùng nhau nhìn lại những ký ức đẹp!
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-2 animate-fade-in animate-delay-200">
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full" 
              onClick={scrollLeft}
            >
              <ArrowLeft size={18} />
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              className="rounded-full" 
              onClick={scrollRight}
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 snap-x scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {memoriesData.map((memory, index) => (
            <div 
              key={memory.id} 
              className="min-w-[300px] sm:min-w-[350px] flex-shrink-0 snap-start animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <MemoryCard memory={memory} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMemories;
