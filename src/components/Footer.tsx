
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-medium tracking-tight">
              <span className="text-primary font-semibold">Memory</span>Garden
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Lưu giữ những kỷ niệm đẹp nhất của chúng ta trong năm cuối cấp, để mãi nhớ về thời gian bên nhau.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-wide uppercase mb-4 text-muted-foreground">Khám phá</h3>
            <ul className="space-y-2">
              <li><FooterLink to="/memories">Kỷ niệm</FooterLink></li>
              <li><FooterLink to="/gallery">Bộ sưu tập</FooterLink></li>
              <li><FooterLink to="/friends">Bạn bè</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-wide uppercase mb-4 text-muted-foreground">Tiện ích</h3>
            <ul className="space-y-2">
              <li><FooterLink to="/add-memory">Thêm kỷ niệm</FooterLink></li>
              <li><FooterLink to="/timeline">Dòng thời gian</FooterLink></li>
              <li><FooterLink to="/map">Bản đồ kỷ niệm</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-wide uppercase mb-4 text-muted-foreground">Liên hệ</h3>
            <ul className="space-y-2">
              <li><FooterLink to="/about">Về chúng tôi</FooterLink></li>
              <li><FooterLink to="/privacy">Chính sách riêng tư</FooterLink></li>
              <li><FooterLink to="/contact">Liên hệ</FooterLink></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MemoryGarden. Đã đăng ký bản quyền.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Được tạo với <Heart size={14} className="fill-primary text-primary" /> cho những kỷ niệm đẹp
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
};

export default Footer;
