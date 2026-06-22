# 🎉 Trang Web Giới Thiệu Sản Phẩm - Single Page Product Introduction

Dự án website một trang (Single Page) để giới thiệu sản phẩm của bạn. Bao gồm slider ảnh, phần đánh giá khách hàng, và các nút liên hệ nổi trên màn hình.

## 📋 Cấu Trúc Thư Mục

```
BUMASJP/
├── index.html           # Trang chính HTML
├── style.css           # Các kiểu CSS
├── script.js           # Các script JavaScript
├── assets/
│   └── images/         # Thư mục chứa ảnh sản phẩm
├── README.md           # File hướng dẫn này
└── .gitignore         # File Git ignore
```

## 🎯 Các Tính Năng

### 1. **Slider Ảnh Tự Động** 
- Chuyển ảnh tự động mỗi 3 giây
- Điều khiển bằng nút trước/sau
- Dấu chấm (dots) để chọn nhanh
- Dừng tự động phát khi di chuột vào

### 2. **Phần Đánh Giá (Reviews)**
- Carousel có thể cuộn
- Hiển thị 4 đánh giá trên desktop
- 2 đánh giá trên tablet
- 1 đánh giá trên mobile
- Tự động cuộn mỗi 4 giây

### 3. **Nút Liên Hệ Nổi (Floating Buttons)**
- ☎️ Gọi điện ngay
- ✉️ Gửi email
- 👍 Facebook
- 🎵 TikTok
- Animation nổi mềm mại
- Hiển thị tên khi di chuột

### 4. **Thiết Kế Responsive**
- Tối ưu cho desktop, tablet, mobile
- Header cố định khi cuộn
- Navigation đơn giản

### 5. **Hiệu Ứng Scroll**
- Reveal animation khi scroll
- Header thay đổi bóng khi scroll
- Smooth scroll

## 📸 Cách Thêm Hình Ảnh

### Bước 1: Chuẩn bị ảnh của bạn
Bạn cần các ảnh sau, đặt vào thư mục `assets/images/`:

```
assets/images/
├── product-1.jpg       # Ảnh sản phẩm 1 (Hero slider)
├── product-2.jpg       # Ảnh sản phẩm 2 (Hero slider)
├── product-3.jpg       # Ảnh sản phẩm 3 (Hero slider)
├── product-4.jpg       # Ảnh sản phẩm 4 (Hero slider)
├── avatar-1.jpg        # Avatar khách hàng 1
├── avatar-2.jpg        # Avatar khách hàng 2
├── avatar-3.jpg        # Avatar khách hàng 3
├── avatar-4.jpg        # Avatar khách hàng 4
├── avatar-5.jpg        # Avatar khách hàng 5
└── avatar-6.jpg        # Avatar khách hàng 6
```

### Bước 2: Yêu cầu về kích thước ảnh

**Product Images (Hero Slider):**
- Kích thước: 1200x600px hoặc 1920x600px (lý tưởng)
- Định dạng: JPG, PNG, WebP
- Tối ưu: Nén để trang tải nhanh

**Avatar Images:**
- Kích thước: 100x100px hoặc lớn hơn
- Định dạng: JPG, PNG, WebP
- Tối ưu: Hình tròn hoặc vuông

## ⚙️ Cách Tùy Chỉnh

### 1. Thay đổi thông tin liên hệ
Mở file `index.html` và tìm các phần sau:

```html
<!-- Nút gọi điện -->
<button class="floating-btn floating-btn-call" 
        onclick="window.location.href='tel:+84123456789'">

<!-- Email -->
onclick="window.location.href='mailto:contact@example.com'"

<!-- Phần liên hệ -->
<p><a href="tel:+84123456789">+84 (0) 123 456 789</a></p>
<p><a href="mailto:contact@example.com">contact@example.com</a></p>
```

### 2. Thay đổi tên và mô tả
Tìm các phần:
- `<h1>Sản Phẩm Tôi</h1>` - Tên công ty/sản phẩm
- `<h2>Sản Phẩm Chất Lượng Cao</h2>` - Tiêu đề hero
- Mô tả sản phẩm trong gallery

### 3. Thay đổi màu sắc
Trong `style.css`, tìm phần `:root`:

```css
:root {
    --primary-color: #00a8ff;      /* Màu chính */
    --secondary-color: #ff6b6b;    /* Màu phụ */
    --dark-color: #1a1a1a;         /* Màu tối */
    --light-color: #f5f5f5;        /* Màu sáng */
    --text-color: #333;            /* Màu chữ */
}
```

### 4. Thay đổi social links
Tìm các dòng:
```html
<a href="https://www.facebook.com">
<a href="https://www.tiktok.com">
<a href="https://instagram.com">
```

## 🚀 Cách Khởi Chạy

### Phương pháp 1: Mở trực tiếp
- Nhấp đúp vào file `index.html`
- Hoặc kéo thả vào trình duyệt

### Phương pháp 2: Sử dụng Live Server (VS Code)
1. Cài đặt extension "Live Server"
2. Nhấp chuột phải vào `index.html`
3. Chọn "Open with Live Server"

### Phương pháp 3: Sử dụng Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Sau đó truy cập: `http://localhost:8000`

### Phương pháp 4: Sử dụng Node.js
```bash
# Cài đặt http-server nếu chưa
npm install -g http-server

# Khởi chạy
http-server
```

## 📝 Chỉnh Sửa Nội Dung

### Slider Ảnh
```html
<!-- Mở index.html, tìm phần .slider -->
<div class="slide">
    <img src="assets/images/product-1.jpg" alt="Sản phẩm 1">
    <div class="slide__overlay">
        <h2>Tiêu đề của bạn</h2>
        <p>Mô tả của bạn</p>
    </div>
</div>
```

### Gallery Sản Phẩm
```html
<!-- Tìm phần .gallery-grid -->
<div class="gallery-card reveal">
    <div class="gallery-card__image">
        <img src="assets/images/product-1.jpg" alt="Sản phẩm 1">
    </div>
    <div class="gallery-card__content">
        <h3>Tên sản phẩm</h3>
        <p>Mô tả sản phẩm</p>
        <span class="price">$99.99</span>
    </div>
</div>
```

### Đánh Giá
```html
<!-- Tìm phần .review-card -->
<div class="review-card">
    <div class="review-card__header">
        <div class="review-card__avatar">
            <img src="assets/images/avatar-1.jpg" alt="Khách hàng">
        </div>
        <div class="review-card__info">
            <h4>Tên khách hàng</h4>
            <div class="stars">
                <span class="star">★</span> <!-- Lặp 5 lần -->
            </div>
        </div>
    </div>
    <p class="review-card__text">Nội dung đánh giá</p>
</div>
```

## 🎨 Tùy Chỉnh CSS Nâng Cao

### Thay đổi gradient nút nổi
```css
.floating-btn-call {
    background: linear-gradient(145deg, rgba(255, 0, 0, 0.84), rgba(200, 0, 0, 0.72));
}
```

### Thay đổi tốc độ animation slider
```javascript
// script.js - hàm startAutoPlay()
setInterval(() => this.nextSlide(), 3000); // 3000ms = 3 giây
```

### Thay đổi số lượng cột gallery
```css
.gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    /* Thay 260px bằng giá trị khác */
}
```

## 🔧 Các Đặc Tính JavaScript

### ImageSlider
- Auto-play slider
- Navigation buttons
- Keyboard support (Arrow keys)
- Pause on hover

### ReviewsCarousel
- Responsive items (4/2/1)
- Auto-scroll
- Pause on hover
- Responsive to resize

### ScrollEffects
- Header shadow on scroll
- Reveal animation on scroll
- Smooth scroll

## 💡 Mẹo & Thủ Thuật

1. **Tối ưu hóa ảnh**: Nén ảnh trước khi upload để trang tải nhanh hơn
   - Sử dụng TinyPNG.com hoặc ImageOptim

2. **SEO**: Thêm meta description
   ```html
   <meta name="description" content="Mô tả sản phẩm của bạn">
   ```

3. **Favicon**: Thêm icon website
   ```html
   <link rel="icon" href="assets/favicon.ico">
   ```

4. **Analytics**: Thêm Google Analytics
   ```html
   <!-- Đặt trước tag </body> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   ```

5. **Open Graph**: Chia sẻ trên mạng xã hội
   ```html
   <meta property="og:title" content="Tên sản phẩm">
   <meta property="og:image" content="assets/images/product-1.jpg">
   ```

## 📱 Kiểm Tra Responsive

- **Desktop**: 1200px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

Sử dụng DevTools (F12) để kiểm tra responsive design

## 🐛 Xử Lý Sự Cố

### Ảnh không hiển thị
- Kiểm tra đường dẫn file
- Đảm bảo tên file chính xác (phân biệt chữ hoa/thường)
- Kiểm tra định dạng ảnh (JPG, PNG)

### Slider không hoạt động
- Kiểm tra console (F12) để xem lỗi
- Đảm bảo script.js được load
- Kiểm tra class names trong HTML và JavaScript

### Form không gửi được email
- Mở DevTools để xem lỗi
- Kiểm tra email trong onclick
- Có thể cần cấu hình backend để xử lý form

## 📞 Support & Resources

- [W3Schools CSS](https://www.w3schools.com/css/)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [Can I Use](https://caniuse.com/)

## 📄 License

Tự do sử dụng cho dự án cá nhân và thương mại.

---

**Created with ❤️ cho bạn**

Cập nhật cuối: 2024
