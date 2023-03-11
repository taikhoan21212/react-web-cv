import './App.css';
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Mycv from './CV'

function App() {
  return (
    <div id="main">
      <div className='header'>
        <div className='header__bottom-shadow'>
          <div className='header__navbar'>
            <div className='header__navbar-logo'>
              <img src = {require('./img/Canva-Logo.png')} className="header-logo" alt="logo" />
            </div>
            <div className='header__navbar-first'>
              <a href='#' className='header__navbar-main-1'>Trang chủ</a>
              <a href='#' className='header__navbar-main-1'>Thiết kế
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z"></path></svg>
              </a>
              <a href='#' className='header__navbar-main-1'>Tính năng
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z"></path></svg>
              </a>
              <a href='#' className='header__navbar-main-1'>Giá</a>
            </div>
            <div className='header__navbar-last'>
              <a href='#' className='header__navbar-main-2'>Đăng ký</a>
              <a href='#' className='header__navbar-main-2'>Đăng nhập</a>
            </div>
          </div>
        </div>
        <div className='header__sidebar'>
          <div className='header__sidebar-tab'>
            <picture class='header__sidebar-pic'>
              <div className='anh'>
                <img src={require('./img/cv.avif')} class='sidebar-img' alt='logo' />
              </div>
              <div class='header__sidebar-text'>
                <h1 class='text-content'>Tạo CV Online Miễn Phí</h1>
              {/* <Link to="/cv" class="button"> Bắt đầu tạo CV xin việc</Link> */}
                <a href='/cv' class='button'>Bắt đầu tạo CV xin việc</a>
              </div>
            </picture>
          </div>
        </div>
      </div>

      <div className='content'>
        <div className='content__first'>
          <section>
            <p>
              <span>Với phần mềm tạo CV online miễn phí của Canva, việc ứng tuyển cho vị trí công việc mơ ước trở nên thật dễ dàng và nhanh chóng. Bạn có thể chọn từ hàng trăm mẫu CV xin việc miễn phí, do các nhà thiết kế chuyên nghiệp tạo sẵn và tùy chỉnh các mẫu này chỉ trong vài cú nhấp chuột.</span>
              </p>
            <img className='content-img-1' src={require('./img/resume.avif')} />
            <p>
              <span>Hãy quên việc phải dành ra hàng giờ để trình bày CV xin việc, hay chọn phông chữ phù hợp với thư xin việc của bạn. Phần mềm tạo CV online miễn phí của Canva sẽ mang đến cho bạn một bản CV xin việc đẹp và hấp dẫn mà chẳng tốn công sức.</span>
              </p>
            <p>
              <span>Bạn có thể chọn từ hàng trăm mẫu miễn phí, do các nhà thiết kế chuyên nghiệp tạo sẵn và tùy chỉnh các mẫu này chỉ trong vài phút. Chỉ với một vài cú nhấp chuột đơn giản, bạn có thể thay đổi màu sắc, font chữ, bố cục và thêm hình ảnh đồ họa cho phù hợp với công việc mà bạn đang ứng tuyển.</span>
              </p>
            <p>
              <span>Hãy để chúng tôi giúp bạn phần thiết kế, để bạn có thể tập trung vào việc phát huy các kỹ năng của mình và giành được công việc mơ ước.</span>
              </p>
          </section>
        </div>

        <div className='content__second'>
          <section>
            <div className='content__second-main'>
              <div className='content__second-img'>
                <img src={require('./img/Canva.webp')} class='content-img-2' />
              </div>
              <div class='content__second-ex'>
                <h2>Cách tạo CV xin việc trên Canva</h2>
                <ol className='content__second-ol'>
                  <li className='content__second-li'>
                    <div>
                      <div className='inDam'>Mở Canva</div>
                      <p>Truy cập Canva hoặc mở ứng dụng, sau đó đăng nhập hoặc đăng ký tài khoản mới bằng email, 
                        hồ sơ Google hoặc Facebook của bạn. Tìm kiếm “CV xin việc” để bắt đầu thiết kế.</p>
                    </div>
                  </li>
                  <li className='content__second-li'>
                    <div>
                      <div className='inDam'>Tìm mẫu CV phù hợp</div>
                      <p>Lựa chọn từ hàng trăm mẫu CV xin việc được thiết kế chuyên nghiệp. Lựa chọn từ các phong cách như bố cục hiện đại hoặc đơn giản, các ngành nghề như diễn xuất, thiết kế đồ họa, hoặc các bố cục cho doanh nghiệp.</p>
                    </div>
                  </li>
                  <li className='content__second-li'>
                    <div>
                      <div className='inDam'>Tùy chỉnh CV xin việc của bạn</div>
                      <p>Sau khi chọn một mẫu CV, hãy sử dụng các công cụ thiết kế kéo-và-thả của Canva để chỉnh sửa CV xin việc của bạn. Thay đổi phông chữ, văn bản và màu sắc chỉ trong vài cú nhấp chuột. Tải lên ảnh của riêng bạn và sắp xếp lại các thành phần tùy ý bạn.</p>
                    </div>
                  </li>
                  <li className='content__second-li'>
                    <div>
                      <div className='inDam'>Thỏa sức sáng tạo với nhiều tính năng hơn</div>
                      <p>Cắt, làm thẳng, sử dụng bộ lọc ảnh và tạo họa tiết cho hình ảnh của bạn. Sử dụng bảng màu, kiểu phông chữ, nền và bố cục văn bản của riêng bạn. Thêm đường viền, khung và các thành phần khác để CV xin việc của bạn thật nổi bật.</p>
                    </div>
                  </li>
                  <li className='content__second-li'>
                    <div>
                      <div className='inDam'>Đặt hàng bản in của bạn</div>
                      <p>Đặt in CV xin việc chất lượng cao qua Canva Print và được hưởng ưu đãi giao hàng miễn phí. Hoặc lưu thiết kế của bạn dưới dạng tệp PDF, JPG hoặc PNG. Hãy nhớ rằng bạn luôn có thể chỉnh sửa thiết kế của mình bất cứ lúc nào.</p>
                    </div>
                  </li>
                </ol>
                {/* <Link to="/cv" class="button"> Bắt đầu tạo CV xin việc</Link> */}
                <a href="/cv" class="button"> Bắt đầu tạo CV xin việc</a>
              </div>
            </div>
          </section>
        </div>
        {/* <Routes>
          <Route path="/cv" element={<Mycv />}/>
        </Routes> */}
      </div>

      <div className='footer'>
        <div className='footer__first'>
          <footer className='footer__foo'>
            <div className='footer__flex'>
              <div className='footer__foo-tt'>
                <h3>Duyệt</h3>
              </div>
            <ul>
              <li className='footer-li'><p>Logo</p></li>
              <li className='footer-li'><p>Poster</p></li>
              <li className='footer-li'><p>Card visit</p></li>
              <li className='footer-li'><p>Flyer</p></li>
              <li className='footer-li'><p>Hồ sơ xin việc</p></li>
              <li className='footer-li'><p>Infographic</p></li>
            </ul>
            </div>
            <div className='footer__flex'>
              <div className='footer__foo-tt'>
                <h3>Tính năng</h3>
              </div>
              <ul>
                <li className='footer-li'><p>Loại thiết kế</p></li>
                <li className='footer-li'><p>Biểu đồ</p></li>
                <li className='footer-li'><p>Chỉnh sửa ảnh</p></li>
                <li className='footer-li'><p>In</p></li>
                <li className='footer-li'><p>Danh mục mẫu</p></li>
              </ul>
            </div>
            <div className='footer__flex'>
              <div className='footer__foo-tt'>
                <h3>Tài nguyên</h3>
              </div>
              <ul>
                <li className='footer-li'><p>Trình biên tập ảnh</p></li>
                <li className='footer-li'><p>Hỗ trợ</p></li>
              </ul>
            </div>
            <div className='footer__flex'>
              <div className='footer__foo-tt'>
                <h3>Sản phẩm</h3>
              </div>
              <ul>
                <li className='footer-li'><p>Tải ứng dụng</p></li>
                <li className='footer-li'><p>Pro</p></li>
                <li className='footer-li'><p>Canva cho Đội nhóm</p></li>
                <li className='footer-li'><p>Giáo dục</p></li>
                <li className='footer-li'><p>Giá</p></li>
              </ul>
            </div>
            <div className='footer__flex'>
              <div className='footer__foo-tt'>
                <h3>Công ty</h3>
              </div>
              <ul>
                <li className='footer-li'><p>Giới thiệu</p></li>
                <li className='footer-li'><p>Điều khoản và quyền riêng tư</p></li>
              </ul>
            </div>
          </footer>
          
          <div className='footer__second'></div>
          <div className='footer__lang'>
            <div className='footer-language'>
              <div className='footer-language-flex'>
                <div className='footer-language-text'>
                  <span><svg xmlns="http://www.w3.org/2000/svg" mr-2 width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.8 14.25h3.81a21.9 21.9 0 010-4.5h-3.8a8.5 8.5 0 000 4.5zm.57 1.5c1 2.04 2.8 3.61 4.98 4.33-.68-1.1-1.2-2.6-1.52-4.33H4.37zm15.83-1.5a8.5 8.5 0 000-4.5h-3.81a21.9 21.9 0 010 4.5h3.8zm-.57 1.5h-3.46a12.78 12.78 0 01-1.52 4.33 8.53 8.53 0 004.98-4.33zm-10.5-1.5h5.74a20.12 20.12 0 000-4.5H9.13a20.12 20.12 0 000 4.5zm.23 1.5c.56 2.84 1.69 4.75 2.64 4.75.95 0 2.08-1.9 2.64-4.75H9.36zm-4.99-7.5h3.46c.31-1.74.84-3.24 1.52-4.33a8.53 8.53 0 00-4.98 4.33zm15.26 0a8.53 8.53 0 00-4.98-4.33c.68 1.1 1.2 2.6 1.52 4.33h3.46zm1.64 0h.04v.1a10 10 0 11-.04-.1zm-11.91 0h5.28C14.08 5.41 12.95 3.5 12 3.5c-.95 0-2.08 1.9-2.64 4.75z"></path></svg></span>
                  <span>Tiếng Việt (Việt Nam)</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" ma width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z"></path></svg></span>
                </div>

                <div className='footer-from'>
                  <span className='footer-from-content'>
                  © 2023 Mọi quyền được bảo lưu, Canva
                  <sup>®</sup>
                  </span>
                </div>

                <div className='footer-icon'>
                  <span aria-hidden="true" class="footer-icon-fb mr-8"><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 12.058c0-5.28-4.253-9.558-9.5-9.558s-9.5 4.279-9.5 9.558c0 4.771 3.473 8.725 8.016 9.442v-6.68H8.104v-2.762h2.412V9.952c0-2.395 1.417-3.718 3.588-3.718 1.04 0 2.126.186 2.126.186v2.352h-1.198c-1.18 0-1.548.738-1.548 1.494v1.792h2.635l-.421 2.763h-2.214V21.5c4.543-.717 8.016-4.67 8.016-9.442z" fill="currentColor"></path></svg></span>
                  <span aria-hidden="true" class="footer-icon-tw mr-8"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.74 6.69a4.26 4.26 0 001.7-2.38c-.75.5-1.58.85-2.46 1.05A3.73 3.73 0 0016.13 4c-2.15 0-3.89 1.92-3.89 4.3 0 .33.04.66.1.97a10.75 10.75 0 01-8.02-4.48 4.61 4.61 0 001.2 5.73 3.6 3.6 0 01-1.76-.54v.05c0 2.08 1.34 3.82 3.12 4.21a3.56 3.56 0 01-1.75.07 3.97 3.97 0 003.63 2.98A7.36 7.36 0 013 19.07 10.29 10.29 0 008.97 21c7.16 0 11.07-6.54 11.07-12.21l-.01-.56a8.4 8.4 0 001.94-2.22c-.7.34-1.45.57-2.23.68z"></path></svg></span>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>

    </div>
  );
}

export default App;
