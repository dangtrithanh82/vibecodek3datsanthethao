import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-primary">SportBook</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#trang-chu" className="text-foreground hover:text-primary transition-colors">
              Trang chủ
            </a>
            <a href="#san-the-thao" className="text-foreground hover:text-primary transition-colors">
              Sân thể thao
            </a>
            <a href="#dat-san" className="text-foreground hover:text-primary transition-colors">
              Đặt sân
            </a>
            <a href="#lien-he" className="text-foreground hover:text-primary transition-colors">
              Liên hệ
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4 text-primary" />
                <span>0123 456 789</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-primary" />
                <span>6:00 - 22:00</span>
              </div>
            </div>
            <Button variant="sport" size="sm">
              Đặt sân ngay
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;