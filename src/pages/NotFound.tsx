
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md animate-fade-in">
        <h1 className="text-9xl font-bold text-primary/60">404</h1>
        <h2 className="text-3xl font-bold">Trang không tồn tại</h2>
        <p className="text-muted-foreground">
          Rất tiếc, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Có thể trang đã bị di chuyển hoặc không còn tồn tại.
        </p>
        <Button asChild className="rounded-full bg-primary/90 hover:bg-primary text-foreground mt-4">
          <Link to="/">Quay lại trang chủ</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
