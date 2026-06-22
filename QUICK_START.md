# 🚀 Hướng Dẫn Nhanh - Quick Start Guide

## 📌 5 Bước Để Bắt Đầu

### 1️⃣ Chuẩn bị ảnh
Tạo hoặc tìm 10 ảnh JPG/PNG:
- **4 ảnh sản phẩm** cho hero slider (kích thước: 1200x600px)
  - `product-1.jpg`
  - `product-2.jpg`
  - `product-3.jpg`
  - `product-4.jpg`

- **6 ảnh avatar** cho đánh giá (kích thước: 200x200px hoặc lớn hơn)
  - `avatar-1.jpg` đến `avatar-6.jpg`

### 2️⃣ Đặt ảnh vào đúng thư mục
```
assets/images/
├── product-1.jpg
├── product-2.jpg
├── product-3.jpg
├── product-4.jpg
├── avatar-1.jpg
├── avatar-2.jpg
├── avatar-3.jpg
├── avatar-4.jpg
├── avatar-5.jpg
└── avatar-6.jpg
```

### 3️⃣ Chỉnh sửa nội dung (index.html)
**Tìm và thay thế:**

#### Thông tin công ty
```
Sản Phẩm Tôi → Tên công ty/sản phẩm của bạn
contact@example.com → Email thực của bạn
+84123456789 → Số điện thoại của bạn
```

#### Tiêu đề hero
```
Sản Phẩm Chất Lượng Cao → Tiêu đề của bạn
Kinh Nghiệm & Uy Tín Hàng Đầu → Mô tả của bạn
```

#### Tên & giá sản phẩm
```
<h3>Sản Phẩm 1</h3>
<span class="price">$99.99</span>
```

#### Đánh giá khách hàng
```
<h4>Nguyễn Văn A</h4>
<p class="review-card__text">Nội dung đánh giá</p>
```

### 4️⃣ Cấu hình liên hệ
**Nút gọi điện:**
```html
onclick="window.location.href='tel:+84123456789'"
```

**Email:**
```html
onclick="window.location.href='mailto:contact@example.com'"
```

**Facebook & TikTok:**
```html
<a href="https://www.facebook.com/your-page">
<a href="https://www.tiktok.com/@your-account">
```

### 5️⃣ Mở website
**Cách 1: Nhấp đúp vào `index.html`**

**Cách 2: Live Server (VS Code)**
- Nhấp chuột phải → Open with Live Server

**Cách 3: Terminal (Python)**
```bash
cd /Users/congphuong/BUMASJP
python -m http.server 8000
# Truy cập: http://localhost:8000
```

---

## 🎨 Tùy Chỉnh Màu Sắc (style.css)

Mở file `style.css`, tìm phần `:root` (dòng đầu tiên):

```css
:root {
    --primary-color: #00a8ff;      /* Màu chính (xanh lam) */
    --secondary-color: #ff6b6b;    /* Màu phụ (đỏ) */
    --dark-color: #1a1a1a;         /* Màu tối */
    --text-color: #333;            /* Màu chữ */
}
```

**Các màu phổ biến:**
- 🔵 Xanh dương: `#0066cc`
- 🔴 Đỏ: `#ff0000`
- 🟢 Xanh lá: `#00aa00`
- 🟡 Vàng: `#ffcc00`
- 🟣 Tím: `#9933cc`
- 🟠 Cam: `#ff9900`

---

## 📝 Nội Dung Mẫu (Có thể copy-paste)

### Hero Slider Overlay Text
```
1️⃣ Tiêu đề: Sản Phẩm Chất Lượng Cao
   Mô tả: Kinh Nghiệm & Uy Tín Hàng Đầu

2️⃣ Tiêu đề: Thiết Kế Hiện Đại
   Mô tả: Theo Xu Hướng Toàn Cầu

3️⃣ Tiêu đề: Giá Cả Hợp Lý
   Mô tả: Tốt Nhất Trên Thị Trường

4️⃣ Tiêu đề: Dịch Vụ Tuyệt Vời
   Mô tả: Hỗ Trợ Khách Hàng 24/7
```

### Gallery Product Cards
```
Sản Phẩm 1: $99.99
Sản Phẩm 2: $129.99
Sản Phẩm 3: $149.99
Sản Phẩm 4: $179.99
```

---

## 🔗 URL Hữu Ích

- **Nén ảnh**: https://tinypng.com
- **Tạo ảnh**: https://unsplash.com
- **Màu sắc**: https://colorpicker.com
- **Icon SVG**: https://heroicons.com

---

## ✅ Checklist Trước Khi Deploy

- [ ] Tất cả ảnh đã được thêm vào `assets/images/`
- [ ] Đã thay đổi tên công ty/sản phẩm
- [ ] Đã thay đổi số điện thoại & email
- [ ] Đã thay đổi mô tả sản phẩm
- [ ] Đã thay đổi tên khách hàng & đánh giá
- [ ] Đã cấu hình Facebook & TikTok links
- [ ] Đã kiểm tra trên desktop, tablet, mobile
- [ ] Đã kiểm tra tất cả các liên kết hoạt động

---

## 💻 Tệp Cấu Trúc Cuối Cùng

```
BUMASJP/
├── index.html              # Trang chính
├── style.css              # Kiểu CSS
├── script.js              # JavaScript
├── README.md              # Hướng dẫn đầy đủ
├── QUICK_START.md         # File này
├── .gitignore            # Git ignore
└── assets/
    └── images/
        ├── product-1.jpg
        ├── product-2.jpg
        ├── product-3.jpg
        ├── product-4.jpg
        ├── avatar-1.jpg
        ├── avatar-2.jpg
        ├── avatar-3.jpg
        ├── avatar-4.jpg
        ├── avatar-5.jpg
        └── avatar-6.jpg
```

---

## 🆘 Gặp Vấn Đề?

### Ảnh không hiển thị?
1. Kiểm tra đường dẫn file trong HTML
2. Đảm bảo file ảnh có đúng tên (phân biệt chữ hoa/thường)
3. Ảnh phải ở trong thư mục `assets/images/`

### Slider không chuyển?
1. Mở Console (F12) để kiểm tra lỗi
2. Đảm bảo `script.js` được load
3. Kiểm tra class names: `.slider`, `.slide`, `.slider__btn--next`

### Nút liên hệ không hoạt động?
1. Kiểm tra số điện thoại định dạng: `tel:+84123456789`
2. Kiểm tra email định dạng: `mailto:contact@example.com`
3. Mở Console để xem lỗi

---

**Good luck! 🎉**
