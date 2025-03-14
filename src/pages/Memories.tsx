
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MemoryCard, { MemoryProps } from '@/components/MemoryCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

// Extended memories data
const memoriesData: MemoryProps[] = [
  {
    id: '1',
    title: 'Lễ tốt nghiệp',
    date: '2025-03-9',
    description: 'Ngày tốt nghiệp đánh dấu kết thúc hành trình của chúng ta tại trường. Chúng ta đã cùng nhau chia sẻ niềm vui, nỗi buồn và hy vọng cho tương lai.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    likes: 42,
    comments: 15,
    location: 'Trường học',
    tags: ['Tốt nghiệp', 'Mũ tốt nghiệp', 'Kỷ yếu']
  },
];

const Memories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMemories, setFilteredMemories] = useState(memoriesData);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filtered = memoriesData.filter(memory => 
      memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memory.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memory.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    setFilteredMemories(filtered);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">Kỷ niệm của chúng ta</h1>
            <p className="text-muted-foreground animate-slide-up animate-delay-100">
              Khám phá tất cả những khoảnh khắc đáng nhớ mà chúng ta đã cùng nhau chia sẻ trong năm cuối cấp.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto mb-12 animate-fade-in animate-delay-200">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Tìm kiếm kỷ niệm..."
                  className="pl-10 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button type="submit" className="rounded-full bg-primary/90 hover:bg-primary text-foreground">
                Tìm kiếm
              </Button>
              <Button type="button" variant="outline" className="rounded-full" aria-label="Filter">
                <Filter size={18} />
              </Button>
            </form>
          </div>
          
          <div className="memories-grid animate-fade-in animate-delay-300">
            {filteredMemories.length > 0 ? (
              filteredMemories.map((memory) => (
                <MemoryCard key={memory.id} memory={memory} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">Không tìm thấy kỷ niệm</h3>
                <p className="text-muted-foreground">
                  Không có kỷ niệm nào khớp với tìm kiếm của bạn. Vui lòng thử lại với từ khóa khác.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Memories;
