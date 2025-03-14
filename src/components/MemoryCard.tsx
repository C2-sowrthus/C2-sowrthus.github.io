
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface MemoryProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  location?: string;
  tags: string[];
}

const MemoryCard = ({ memory }: { memory: MemoryProps }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(memory.likes);
  
  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  return (
    <Link to={`/memories/${memory.id}`} className="block">
      <div className="memory-card h-80 sm:h-96">
        <img 
          src={memory.image} 
          alt={memory.title}
          loading="lazy"
          className="memory-card-image"
        />
        <div className="memory-card-overlay"></div>
        <div className="memory-card-content">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white text-xs">
              <Calendar size={12} className="mr-1" />
              {formatDate(memory.date)}
            </Badge>
            {memory.location && (
              <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white text-xs">
                {memory.location}
              </Badge>
            )}
          </div>
          
          <h3 className="text-xl font-medium text-white mb-1">{memory.title}</h3>
          <p className="text-white/80 text-sm line-clamp-2 mb-4">{memory.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-white p-0 hover:bg-transparent flex items-center gap-1"
                onClick={handleLike}
              >
                <Heart 
                  size={18} 
                  className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`}
                />
                <span>{likeCount}</span>
              </Button>
              
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-white p-0 hover:bg-transparent flex items-center gap-1"
              >
                <MessageCircle size={18} />
                <span>{memory.comments}</span>
              </Button>
            </div>
            
            <div className="flex gap-1">
              {memory.tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-white/10 backdrop-blur-sm text-white text-xs">
                  {tag}
                </Badge>
              ))}
              {memory.tags.length > 2 && (
                <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white text-xs">
                  +{memory.tags.length - 2}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MemoryCard;
