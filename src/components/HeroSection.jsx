import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
  // === LOGIC THANH MENU ===
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isRiotMenuOpen, setIsRiotMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleRiotMenu = () => {
    setIsRiotMenuOpen(!isRiotMenuOpen);
  };

  const bannerData = {
    'lmht': { src: './lmht1.jpg', style: { objectFit: 'cover', transform: 'scale(1)', objectPosition: 'center' } },
    'tocchien': { src: './tocchien.webp', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'dtcl': { src: './TFT.jpg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'valorant': { src: './miks.jpg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'runeterra': { src: './ruinedking.jpg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'convergence': { src: './conv.jpg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'ruinedking': { src: './ruinedking.jpg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'songofnunu': { src: './songofnunu.avif', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'riotforge': { src: './Riotforge.webp', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'lolesports': { src: './lolesport.jpg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'valoesports': { src: './valoesport.jpeg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'arcane': { src: './arcane.webp', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'vutru': { src: './vutrulmht.jpeg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'music': { src: './riotmusic.jpg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'riotgames': { src: './posterriot.jpg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'support': { src: './riotsupport.jpg', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } },
    'default': { src: '.', style: { objectFit: 'cover', transform: 'scale(1.0)', objectPosition: 'center' } } 
  };

  const newsList = [
    { id: 1, imgSrc: "./phienban1201.png.jpg", category: "CẬP NHẬT TRÒ CHƠI", date: "2 tháng trước", title: "VALORANT - Phiên Bản 12.01", desc: "MFA sẽ được triển khai tại EU, Cổng Thông Tin Esports sẽ trở lại cùng VCT26" },
    { id: 2, imgSrc: "./valorantchall.jpg", category: "ESPORTS", date: "2 tháng trước", title: "Giới Thiệu VALORANT Challengers SEA 2026", desc: "Sau đây là những điều cần biết về Challengers SEA 2026, bao gồm cách đăng ký tham gia vòng loại mở!" },
    { id: 3, imgSrc: "./ticket.jpg", category: "ESPORTS", date: "2 tháng trước", title: "Mở Bán Vé VCT Pacific Kickoff Vào Ngày 09/01!", desc: "Hãy trực tiếp theo dõi VCT Pacific Kickoff diễn ra tại Seoul, Hàn Quốc." }
  ];

  return (
    <>
      {/* MEGA MENU CỦA RIOT GAMES */}
      <div className={`riot-mega-menu ${isRiotMenuOpen ? 'open' : ''}`}>
        <div className="mega-menu-content" onMouseLeave={() => setActiveMenu(null)}>
          <div className="mega-menu-header">
            <div className="mega-menu-riot-logo" onClick={toggleRiotMenu}>
              <img src="./LOGO-04.webp" alt="Riot Games" />
            </div>
            <button className="close-mega-menu" onClick={toggleRiotMenu}>✕</button>
          </div>
          
          <div className="mega-menu-body">
            <div className="menu-grid">
              <div className="links-column">
                <h3 className="column-title">TRÒ CHƠI</h3>
                <ul>
                  <li className={activeMenu === 'lmht' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('lmht')}><a href="#/">LIÊN MINH HUYỀN THOẠI</a></li>
                  <li className={activeMenu === 'tocchien' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('tocchien')}><a href="#/">LMHT: TỐC CHIẾN</a></li>
                  <li className={activeMenu === 'dtcl' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('dtcl')}><a href="#/">ĐẤU TRƯỜNG CHÂN LÝ</a></li>
                  <li className={activeMenu === 'valorant' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('valorant')}><a href="#/">VALORANT</a></li>
                  <li className={activeMenu === 'runeterra' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('runeterra')}><a href="#/">HUYỀN THOẠI RUNETERRA</a></li>
                </ul>
              </div>

              <div className="links-column sectioned">
                <div className="section">
                  <h3 className="column-title">FORGE</h3>
                  <ul>
                    <li className={activeMenu === 'convergence' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('convergence')}><a href="#/">CONV/RGENCE</a></li>
                    <li className={activeMenu === 'ruinedking' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('ruinedking')}><a href="#/">RUINED KING</a></li>
                    <li className={activeMenu === 'songofnunu' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('songofnunu')}><a href="#/">SONG OF NUNU</a></li>
                    <li className={activeMenu === 'riotforge' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('riotforge')}><a href="#/">TRÒ CHƠI CỦA RIOT FORGE</a></li>
                  </ul>
                </div>
                <div className="section">
                  <h3 className="column-title">ESPORTS</h3>
                  <ul>
                    <li className={activeMenu === 'lolesports' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('lolesports')}><a href="#/">LOL ESPORTS</a></li>
                    <li className={activeMenu === 'valoesports' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('valoesports')}><a href="#/">VALORANT ESPORTS</a></li>
                  </ul>
                </div>
              </div>

              <div className="links-column sectioned">
                <div className="section">
                  <h3 className="column-title">GIẢI TRÍ</h3>
                  <ul>
                    <li className={activeMenu === 'arcane' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('arcane')}><a href="#/">ARCANE</a></li>
                    <li className={activeMenu === 'vutru' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('vutru')}><a href="#/">VŨ TRỤ</a></li>
                    <li className={activeMenu === 'music' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('music')}><a href="#/">RIOT GAMES MUSIC</a></li>
                  </ul>
                </div>
                <div className="section">
                  <h3 className="column-title">KINH DOANH</h3>
                  <ul>
                    <li className={activeMenu === 'riotgames' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('riotgames')}><a href="#/">RIOT GAMES</a></li>
                    <li className={activeMenu === 'support' ? 'active-item' : ''} onMouseEnter={() => setActiveMenu('support')}><a href="#/">HỖ TRỢ RIOT</a></li>
                  </ul>
                </div>
              </div>

              {activeMenu === null ? (
                <>
                  <div className="card-column">
                    <a href="#/" className="menu-card">
                      <img src="./lmht.jpg" alt="ĐTCL" className="card-img" />
                      <div className="card-info"><p>Tái hiện những câu chuyện mang tính biểu tượng của Runeterra trong mùa ĐTCL lớn nhất từ trước đến nay!</p></div>
                    </a>
                  </div>
                  <div className="card-column">
                    <a href="#/" className="menu-card">
                      <img src="./miks.jpg" alt="Valorant" className="card-img" />
                      <div className="card-info"><p>Miks khuấy động bầu không khí, cân bằng thế trận và luôn giữ đúng nhịp độ cho đội của bạn.</p></div>
                    </a>
                  </div>
                </>
              ) : (
                <div className="banner-column">
                  {(() => {
                    const currentBanner = bannerData[activeMenu] || bannerData['default'];
                    return <img key={activeMenu} src={currentBanner.src} alt="Banner Riot" className="hover-banner-img" style={currentBanner.style} />;
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* KHU VỰC HERO & NAVBAR */}
      <div className="hero-container">
        <nav className={`navbar ${showNavbar ? '' : 'navbar-hidden'}`}>
          <div className="navbar-left">
            <div className="riot-wrapper" onClick={toggleRiotMenu}>
              <img src="./riot-games-new-logo-ust.png" alt="Riot" className="riot-logo" />
              <span className="arrow-icon">▼</span>
            </div>
            <div className="nav-divider"></div>
            <div className="v-logo-small-wrapper">
              <img src="./valo.png" alt="V" className="v-logo-small" />
            </div>
            <ul className="nav-links">
              <li className="has-dropdown">
                <a href="#/">THÔNG TIN TRÒ CHƠI <span className="menu-arrow">▼</span></a>
                <ul className="dropdown-menu"><li><a href="#/">ĐẶC VỤ</a></li><li><a href="#/">BẢN ĐỒ</a></li><li><a href="#/">KHO VŨ KHÍ</a></li></ul>
              </li>
              <li><a href="#/">TRUYỀN THÔNG</a></li>
              <li><a href="#/">TIN TỨC</a></li>
              <li><a href="#/">GÓC NEWBIE</a></li>
              <li><a href="#/">BẢNG XẾP HẠNG</a></li>
              <li className="has-dropdown">
                <a href="#/">HỖ TRỢ <span className="menu-arrow">▼</span></a>
                <ul className="dropdown-menu"><li><a href="#/">THÔNG SỐ</a></li><li><a href="#/">HỖ TRỢ ↗</a></li><li><a href="#/">Quy Chuẩn Cộng Đồng</a></li></ul>
              </li>
              <li className="has-dropdown">
                <a href="#/">THÊM <span className="menu-arrow">▼</span></a>
                <ul className="dropdown-menu"><li><a href="#/">Mạng Xã Hội</a></li><li><a href="#/">Thể Thao Điện Tử ↗</a></li></ul>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="icon-group">
              <div className="nav-icon-bg">🔍</div>
              <div className="nav-icon-bg globe-icon">🌐</div>
            </div>
            <button className="download-nav-btn">TẢI GAME NGAY</button>
            <button className="mobile-menu-btn">
              <div className="burger-bar"></div>
              <div className="burger-bar"></div>
              <div className="burger-bar"></div>
            </button>
          </div>
        </nav>

        <video autoPlay loop muted playsInline className="hero-video">
          <source src="./bg-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="age-rating"><img src="./thongbao18+.png.jpg" alt="18+" /></div>
        <div className="hero-content">
          <img src="./valorant.png.png" alt="VALORANT" className="hero-logo" />
          <h2 className="hero-mobile-desc">
            VALORANT - TỰA GAME BẮN SÚNG CHIẾN THUẬT 5V5 VỚI SỰ GÓP MẶT CỦA NHỮNG ĐẶC VỤ CÙNG LOẠT KỸ NĂNG RIÊNG BIỆT
          </h2>
          <div className="btn-wrapper">
            <button className="hero-btn">CHƠI MIỄN PHÍ</button>
          </div>
        </div>
      </div>

      {/* SECTION TIN TỨC */}
      <section className="news-section">
        <div className="news-header">
          <h2 className="news-main-title">TIN TỨC MỚI NHẤT</h2>
          <a href="#/" className="news-link">ĐẾN TRANG TIN TỨC <span className="news-link-icon">↗</span></a>
        </div>
        <div className="news-grid">
          {newsList.map((news) => (
            <div className="news-card" key={news.id}>
              <div className="news-img-wrapper">
                <img src={news.imgSrc} alt={news.title} className="news-img" />
                <div className="news-img-icon">↘</div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-category">{news.category}</span><span className="news-divider">|</span><span className="news-date">{news.date}</span>
                </div>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-desc">{news.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION MÙA MỚI (CẬP NHẬT GIỐNG ẢNH MẪU) */}
      <section className="season-section">
        <div className="season-left">
          <h1 className="season-title">
            MÙA 26 <br/>
            PHẦN I <br/>
            ĐÃ KHỞI <br/>
            TRANH
          </h1>
          <p className="season-desc">Khám phá súng mới, chế độ chơi mới, skin, cập nhật bản đồ và hơn thế nữa. Cuộc chơi bắt đầu.</p>
          <button className="hero-btn season-btn">XEM NGAY</button>
        </div>
        <div className="season-right">
          <img src="./viper.jpg" alt="Mùa Mới" className="season-img" />
        </div>
      </section>

      {/* SECTION CHÚNG TÔI LÀ VALORANT */}
      <section className="we-are-valorant-section">
        <div className="we-are-left">
          <h2 className="we-are-title">CHÚNG TÔI LÀ VALORANT</h2>
          <div className="subtitle-wrapper"><div className="red-dot"></div><h4 className="we-are-subtitle">THÁCH THỨC MỌI GIỚI HẠN</h4></div>
          <p className="we-are-desc">Mang phong cách và trải nghiệm cá nhân tới đấu trường cạnh tranh toàn cầu. Sử dụng kỹ năng đấu súng cùng với lối tư duy chiến thuật sắc bén với hai phe tấn công và phòng thủ, thành bại được định đoạt chỉ trong 13 vòng đấu. Với chỉ 1 mạng mỗi vòng đấu, sự nhanh nhẹn và quyết đoán sẽ là yếu tố giúp bạn sống sót. Trải nghiệm VALORANT trong các chế độ chơi: Đấu Xếp Hạng, Đấu Thường, Sinh Tử và Spike Thần Tốc.</p>
          <div className="we-are-btn-container"><button className="hero-btn we-are-btn">TÌM HIỂU TRÒ CHƠI</button></div>
          <div className="zero-dot"></div><div className="decor-bg-zeroes">00.</div>
        </div>
        <div className="we-are-right">
          <div className="video-player-container">
            <video autoPlay loop muted playsInline className="we-are-media">
              <source src="" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* SECTION ĐẶC VỤ */}
      <section className="agents-section">
        <div className="agents-decor-grid">
          <div className="agent-dot" style={{ top: '20%', left: '10%' }}></div>
          <div className="agent-dot" style={{ top: '60%', left: '5%' }}></div>
          <div className="agent-dot" style={{ bottom: '15%', left: '12%' }}></div>
          <div className="agent-dot" style={{ top: '10%', right: '30%' }}></div>
          <div className="agent-dot" style={{ bottom: '30%', right: '15%' }}></div>
        </div>
        <div className="agents-left"><img src="./reynaraze.png.png" alt="Các Đặc Vụ" className="agents-img" /></div>
        <div className="agents-right">
          <h2 className="agents-title">ĐẶC VỤ CỦA BẠN</h2>
          <h4 className="agents-subtitle">SÁNG TẠO LÀ VŨ KHÍ TỐI THƯỢNG CỦA BẠN</h4>
          <p className="agents-desc">Ngoài việc trang bị súng đạn, hãy chọn cho riêng mình một Đặc Vụ có kỹ năng phù hợp với lối chơi của bạn để giúp bạn tỏa sáng trong những màn đấu súng khốc liệt tại VALORANT.</p>
          <div className="btn-wrapper agents-btn-wrapper"><button className="hero-btn agents-btn">KHÁM PHÁ CÁC ĐẶC VỤ</button></div>
        </div>
      </section>

      {/* SECTION BẢN ĐỒ */}
      <section className="maps-section">
        <div className="maps-watermark">PLACE</div>
        <div className="maps-decor-sidebar"><div className="map-square"></div><div className="map-square"></div><div className="map-square"></div></div>
        <div className="maps-left">
          <h2 className="maps-title">BẢN ĐỒ CỦA BẠN</h2>
          <h4 className="maps-subtitle">CHIẾN ĐẤU KHẮP THẾ GIỚI</h4>
          <p className="maps-desc">Mỗi bản đồ đều là một sân chơi để bạn thỏa sức thể hiện tư duy sáng tạo của mình. Được xây dựng với mục đích phát triển chiến lược đội nhóm, các bản đồ VALORANT hứa hẹn mang đến cho người chơi những trận giao tranh ngoạn mục cùng với muôn vàn khoảnh khắc xuất thần. Hãy là nguồn cảm hứng cho tất cả người chơi VALORANT và tạo ra cho mình lối chơi độc nhất vô nhị.</p>
          <div className="btn-wrapper maps-btn-wrapper"><button className="hero-btn maps-btn">KHÁM PHÁ CÁC BẢN ĐỒ</button></div>
        </div>
        <div className="maps-right"><img src="./split.png.png" alt="Bản Đồ Valorant" className="maps-img" /></div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="footer-top"><span>TẢI TRÒ CHƠI</span></div>
        <div className="footer-main">
          <div className="social-links">
            <a href="#/" className="social-icon">f</a>
            <a href="#/" className="social-icon">▶</a>
            <a href="#/" className="social-icon">IG</a>
          </div>
          <div className="footer-logos">
            <img src="./riot-games-new-logo-ust.png" alt="Riot Games" className="footer2-logo" />
            <img src="./logoVNG.png.png" alt="VNG Games" className="footer1-logo" />
            <img src="./logotrangvalorant.png.png" alt="Valorant" className="footer-logo" />
          </div>
          <p className="copyright">© 2026 Riot Games, Inc.</p>
          <div className="company-info">
            <p>Công Ty Cổ Phần VNG. Địa chỉ: Z06 đường số 13, Phường Tân Thuận, Thành phố Hồ Chí Minh.</p>
            <p>Điện thoại: 1900 561 558</p>
            <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số 45/GP-PTTH&TTĐT do Cục Phát thanh, truyền hình và thông tin điện tử cấp ngày 27/02/2025.</p>
            <p>Quyết định phát hành trò chơi điện tử G1 trên mạng số 262/QĐ-PTTH&TTĐT do Cục Phát thanh, truyền hình và thông tin điện tử cấp ngày 20/06/2025.</p>
          </div>
          <div className="footer-legal">
            <a href="#/">CHÍNH SÁCH BẢO MẬT</a>
            <a href="#/">ĐIỀU KHOẢN SỬ DỤNG (RIOT)</a>
            <a href="#/">ĐIỀU KHOẢN SỬ DỤNG (VNG)</a>
          </div>
          <div className="warning-18-footer"><img src="./180ppng.png" alt="Cảnh báo 18+" /></div>
        </div>
      </footer>
    </>
  );
}

export default HeroSection;