import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    sport: "",
    date: "",
    time: "",
    duration: "",
    note: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Đặt sân thành công! 🎉",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận.",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      sport: "",
      date: "",
      time: "",
      duration: "",
      note: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="dat-san" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Đặt Sân <span className="text-primary">Nhanh Chóng</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Điền thông tin và đặt sân yêu thích của bạn. Chúng tôi sẽ xác nhận đặt sân trong vòng 30 phút.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-sport">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Form Đặt Sân</CardTitle>
              <CardDescription>
                Vui lòng điền đầy đủ thông tin để chúng tôi phục vụ bạn tốt nhất
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Họ và tên *</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Nhập họ và tên"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Số điện thoại *</span>
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="0123 456 789"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sport">Loại sân *</Label>
                  <Select value={formData.sport} onValueChange={(value) => handleChange("sport", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn loại sân" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soccer">Sân bóng đá</SelectItem>
                      <SelectItem value="basketball">Sân bóng rổ</SelectItem>
                      <SelectItem value="tennis">Sân tennis</SelectItem>
                      <SelectItem value="badminton">Sân cầu lông</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Ngày đặt *</span>
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Giờ bắt đầu *</span>
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn giờ" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 16 }, (_, i) => {
                          const hour = i + 6;
                          return (
                            <SelectItem key={hour} value={`${hour}:00`}>
                              {hour}:00
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="duration">Thời gian thuê *</Label>
                  <Select value={formData.duration} onValueChange={(value) => handleChange("duration", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn thời gian" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="60">1 giờ</SelectItem>
                      <SelectItem value="90">1.5 giờ</SelectItem>
                      <SelectItem value="120">2 giờ</SelectItem>
                      <SelectItem value="180">3 giờ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="note">Ghi chú</Label>
                  <Textarea
                    id="note"
                    value={formData.note}
                    onChange={(e) => handleChange("note", e.target.value)}
                    placeholder="Yêu cầu đặc biệt (nếu có)"
                    rows={3}
                  />
                </div>
                
                <Button type="submit" variant="sport" size="lg" className="w-full">
                  Xác nhận đặt sân
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;