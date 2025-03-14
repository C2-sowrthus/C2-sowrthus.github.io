
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { Upload, Calendar as CalendarIcon, Plus, X } from 'lucide-react';

const AddMemory = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setImage(file.name); // In a real app, you'd upload the file to a server
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTag.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()]);
        setCurrentTag('');
      }
    }
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!title || !description || !date || !previewUrl) {
      toast.error('Vui lòng điền đầy đủ thông tin cần thiết');
      return;
    }
    
    // In a real app, you'd save to a database
    // For now, we'll just show a success toast and redirect
    toast.success('Đã lưu kỷ niệm thành công!');
    
    // Wait for the toast to show before redirecting
    setTimeout(() => {
      navigate('/memories');
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-32 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">Thêm kỷ niệm mới</h1>
            <p className="text-muted-foreground max-w-lg mx-auto animate-slide-up animate-delay-100">
              Chia sẻ những khoảnh khắc đáng nhớ của bạn với bạn bè. Hãy thêm những chi tiết để làm cho kỷ niệm của bạn thật đặc biệt.
            </p>
          </div>
          
          <div className="glass p-8 rounded-2xl animate-fade-in animate-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Tiêu đề</Label>
                <Input 
                  id="title" 
                  placeholder="Tên kỷ niệm của bạn" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Mô tả</Label>
                <Textarea 
                  id="description" 
                  placeholder="Chia sẻ câu chuyện của bạn..." 
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Địa điểm</Label>
                  <Input 
                    id="location" 
                    placeholder="Nơi diễn ra sự kiện" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Ngày</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? date.toLocaleDateString('vi-VN') : "Chọn ngày"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="tags">Thẻ</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} className="flex items-center gap-1 bg-primary/15 text-primary hover:bg-primary/25">
                      {tag}
                      <X 
                        size={14} 
                        className="cursor-pointer" 
                        onClick={() => handleRemoveTag(tag)}
                      />
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center">
                  <Input 
                    id="tags" 
                    placeholder="Thêm thẻ và nhấn Enter..." 
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyDown={handleAddTag}
                  />
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="ghost" 
                    className="ml-2"
                    onClick={() => {
                      if (currentTag.trim() !== '' && !tags.includes(currentTag.trim())) {
                        setTags([...tags, currentTag.trim()]);
                        setCurrentTag('');
                      }
                    }}
                  >
                    <Plus size={18} />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Nhấn Enter để thêm thẻ mới</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Hình ảnh</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer bg-secondary/50 hover:bg-secondary transition-colors">
                  <input 
                    type="file" 
                    id="image" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="image" className="cursor-pointer">
                    {previewUrl ? (
                      <div className="space-y-3">
                        <img 
                          src={previewUrl} 
                          alt="Preview" 
                          className="max-h-60 mx-auto rounded-lg"
                        />
                        <p className="text-sm text-muted-foreground">Nhấp để thay đổi hình ảnh</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Upload size={32} className="mx-auto text-muted-foreground" />
                        <p className="text-muted-foreground">Nhấp để tải lên hình ảnh</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG hoặc GIF lên đến 10MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end gap-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/memories')}
                >
                  Hủy
                </Button>
                <Button type="submit" className="bg-primary/90 hover:bg-primary text-foreground">
                  Lưu kỷ niệm
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddMemory;
