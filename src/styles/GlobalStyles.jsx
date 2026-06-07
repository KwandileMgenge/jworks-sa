const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&family=Oswald:wght@700&display=swap');
    :root {
      --navy:#071929; --zodiac:#0d2845; --navy-lt:#0e3460;
      --blue:#21b2e3; --lochmara:#067cbf;
      --mist:#bbcdd7; --white:#ffffff; --off-white:#f0f5f8; --grey-mid:#8aacba;
    }
    *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{font-family:'Barlow',sans-serif;background:var(--navy);color:var(--white);overflow-x:hidden}

    /* NAV */
    .nav{position:fixed;top:0;width:100%;z-index:1000;background:rgba(7,25,41,.97);backdrop-filter:blur(14px);border-bottom:2px solid var(--blue);padding:0 5%;display:flex;align-items:center;justify-content:space-between;height:68px;transition:background .3s}
    .nav.scrolled{background:rgba(4,15,26,.99)}
    .nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
    .logo-mark{width:42px;height:42px;flex-shrink:0;background:linear-gradient(135deg,var(--blue),var(--lochmara));clip-path:polygon(0 0,100% 0,100% 70%,85% 100%,0 100%);display:flex;align-items:center;justify-content:center;font-family:'Oswald',sans-serif;font-size:17px;font-weight:700;color:#fff;letter-spacing:-1px}
    .logo-text{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:21px;color:var(--white);letter-spacing:2px}
    .logo-text span{color:var(--blue)}
    .nav-links{display:flex;align-items:center;gap:30px;list-style:none}
    .nav-links a{font-family:'Barlow Condensed',sans-serif;font-weight:600;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;color:var(--grey-mid);text-decoration:none;transition:color .2s;position:relative}
    .nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:var(--blue);transition:width .3s}
    .nav-links a:hover{color:var(--white)}
    .nav-links a:hover::after{width:100%}
    .nav-cta{background:var(--blue)!important;color:#fff!important;padding:8px 20px!important;clip-path:polygon(0 0,100% 0,95% 100%,5% 100%)!important}
    .nav-cta::after{display:none!important}
    .nav-cta:hover{background:var(--lochmara)!important}
    .hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
    .hamburger span{display:block;width:26px;height:2px;background:var(--white);transition:all .3s}

    /* HERO */
    .hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding-top:68px}
    .hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,rgba(7,25,41,.95) 0%,rgba(13,40,69,.82) 50%,rgba(7,25,41,.93) 100%),repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(33,178,227,.03) 40px,rgba(33,178,227,.03) 42px)}
    .hero-grid{position:absolute;inset:0;opacity:.06;background-image:linear-gradient(var(--blue) 1px,transparent 1px),linear-gradient(90deg,var(--blue) 1px,transparent 1px);background-size:60px 60px}
    .hero-glow{position:absolute;right:-80px;top:50%;transform:translateY(-50%);width:560px;height:560px;border-radius:50%;background:radial-gradient(circle,rgba(33,178,227,.13) 0%,transparent 70%)}
    .hero-split{position:absolute;right:0;top:0;bottom:0;width:45%;background:linear-gradient(to left,rgba(33,178,227,.05),transparent);border-left:1px solid rgba(33,178,227,.15)}
    .hero-ticker{position:absolute;left:0;top:0;bottom:0;width:4px;background:repeating-linear-gradient(to bottom,var(--blue) 0,var(--blue) 18px,transparent 18px,transparent 28px);opacity:.55}
    .hero-inner{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:60px 5%;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
    .hero-badge{display:inline-block;font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--blue);border:1px solid var(--blue);padding:5px 14px;margin-bottom:20px;clip-path:polygon(0 0,100% 0,96% 100%,4% 100%);background:rgba(33,178,227,.08);animation:fadeUp .65s ease both}
    .hero-h1{font-family:'Barlow Condensed',sans-serif;font-size:clamp(46px,6vw,80px);font-weight:900;line-height:.94;text-transform:uppercase;letter-spacing:-1px;margin-bottom:10px;animation:fadeUp .65s .12s ease both}
    .hero-h1 .blue{color:var(--blue);display:block}
    .hero-sub{font-size:15px;font-weight:300;color:var(--grey-mid);line-height:1.75;margin-bottom:34px;max-width:400px;animation:fadeUp .65s .24s ease both}
    .hero-sub strong{color:var(--blue);font-weight:600}
    .hero-btns{display:flex;gap:14px;flex-wrap:wrap;animation:fadeUp .65s .36s ease both}
    .hero-right{display:flex;flex-direction:column;gap:14px;animation:fadeUp .65s .24s ease both}
    .stat-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .stat-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-left:3px solid var(--blue);padding:18px;transition:all .3s}
    .stat-card:hover{background:rgba(33,178,227,.08);transform:translateY(-3px)}
    .stat-num{font-family:'Barlow Condensed',sans-serif;font-size:40px;font-weight:900;color:var(--blue);line-height:1}
    .stat-lbl{font-size:11px;font-weight:500;color:var(--grey-mid);letter-spacing:.5px;margin-top:3px;text-transform:uppercase}
    .preview-card{background:rgba(33,178,227,.06);border:1px solid rgba(33,178,227,.2);padding:18px 22px;display:flex;align-items:center;gap:14px}
    .preview-icon{width:42px;height:42px;flex-shrink:0;background:var(--blue);clip-path:polygon(0 0,100% 0,100% 80%,80% 100%,0 100%);display:flex;align-items:center;justify-content:center;font-size:19px}
    .preview-card strong{display:block;font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;letter-spacing:.8px}
    .preview-card span{font-size:12px;color:var(--grey-mid)}

    /* BUTTONS */
    .btn-primary{display:inline-block;background:var(--blue);color:#fff;text-decoration:none;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:13px;letter-spacing:2px;text-transform:uppercase;padding:13px 30px;clip-path:polygon(0 0,100% 0,95% 100%,5% 100%);transition:all .25s;border:none;cursor:pointer}
    .btn-primary:hover{background:var(--lochmara);transform:translateY(-2px)}
    .btn-outline{display:inline-block;background:transparent;color:#fff;text-decoration:none;font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:13px;letter-spacing:2px;text-transform:uppercase;padding:12px 30px;border:1px solid rgba(187,205,215,.35);clip-path:polygon(0 0,100% 0,95% 100%,5% 100%);transition:all .25s;cursor:pointer}
    .btn-outline:hover{border-color:var(--blue);color:var(--blue);transform:translateY(-2px)}

    /* STRIP */
    .strip{background:var(--lochmara);padding:14px 5%;display:flex;align-items:center;justify-content:center;gap:36px;overflow:hidden}
    .strip-item{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;white-space:nowrap}
    .strip-dot{width:4px;height:4px;background:rgba(255,255,255,.5);border-radius:50%}

    /* SECTION HEADER */
    .sec-label{display:inline-flex;align-items:center;gap:10px;font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--blue);margin-bottom:12px}
    .sec-label::before{content:'';display:block;width:28px;height:2px;background:var(--blue)}
    .sec-title{font-family:'Barlow Condensed',sans-serif;font-size:clamp(32px,4vw,54px);font-weight:900;text-transform:uppercase;line-height:1;margin-bottom:14px}
    .sec-title span{color:var(--blue)}
    .sec-desc{font-size:15px;color:var(--grey-mid);line-height:1.75;max-width:540px}

    /* SERVICES */
    .services-section{background:var(--zodiac)}
    .services-inner{max-width:1200px;margin:0 auto;padding:90px 5%}
    .services-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px;background:rgba(33,178,227,.15);border:2px solid rgba(33,178,227,.2);margin-top:44px}
    .svc-col{background:var(--zodiac);padding:38px}
    .svc-col-hd{display:flex;align-items:center;gap:14px;margin-bottom:28px;padding-bottom:18px;border-bottom:1px solid rgba(255,255,255,.08)}
    .svc-icon{width:46px;height:46px;flex-shrink:0;background:var(--blue);clip-path:polygon(0 0,100% 0,100% 75%,75% 100%,0 100%);display:flex;align-items:center;justify-content:center;font-size:21px}
    .svc-col-name{font-family:'Barlow Condensed',sans-serif;font-size:21px;font-weight:800;text-transform:uppercase;letter-spacing:.8px}
    .svc-col-sub{font-size:11px;color:var(--blue);font-weight:500;margin-top:2px}
    .svc-list{list-style:none;display:flex;flex-direction:column;gap:2px}
    .svc-list li{display:flex;align-items:center;gap:12px;padding:11px 14px;background:rgba(255,255,255,.02);border-left:2px solid transparent;transition:all .25s;font-size:14px}
    .svc-list li:hover{background:rgba(33,178,227,.08);border-left-color:var(--blue);padding-left:20px}
    .svc-list li::before{content:'▸';color:var(--blue);font-size:11px;flex-shrink:0}

    /* ABOUT */
    .about-section{background:var(--navy)}
    .about-inner{max-width:1200px;margin:0 auto;padding:90px 5%}
    .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
    .about-box{background:var(--zodiac);border:1px solid rgba(255,255,255,.08);border-top:4px solid var(--blue);padding:36px;position:relative}
    .about-box::before{content:'"';position:absolute;top:8px;right:20px;font-size:90px;font-family:Georgia,serif;color:rgba(33,178,227,.1);line-height:1}
    .about-quote{font-size:15px;font-weight:300;line-height:1.8;color:var(--off-white);font-style:italic}
    .founder-strip{display:flex;align-items:center;gap:14px;margin-top:22px;padding-top:18px;border-top:1px solid rgba(255,255,255,.08)}
    .founder-av{width:50px;height:50px;border-radius:50%;border:2px solid var(--blue);flex-shrink:0;background:linear-gradient(135deg,var(--zodiac),var(--navy-lt));display:flex;align-items:center;justify-content:center;font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:800;color:var(--blue)}
    .founder-name{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700}
    .founder-role{font-size:11px;color:var(--blue)}
    .values-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
    .val-item{background:rgba(33,178,227,.06);border-left:3px solid var(--blue);padding:12px 14px}
    .val-item strong{display:block;font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;text-transform:uppercase;color:var(--blue)}
    .val-item span{font-size:11px;color:var(--grey-mid);line-height:1.5}
    .mission-card{background:var(--zodiac);border-left:4px solid var(--blue);padding:22px 26px;margin-bottom:14px}
    .mission-card h4{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;text-transform:uppercase;color:var(--blue);letter-spacing:1.5px;margin-bottom:8px}
    .mission-card p{font-size:13px;line-height:1.75;color:var(--grey-mid)}
    .approach-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px}
    .approach-item{background:rgba(33,178,227,.04);border:1px solid rgba(33,178,227,.12);padding:16px;transition:all .3s}
    .approach-item:hover{background:rgba(33,178,227,.08);border-color:var(--blue)}
    .approach-item h5{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;text-transform:uppercase;color:var(--blue);margin-bottom:6px;letter-spacing:.8px}
    .approach-item p{font-size:12px;color:var(--grey-mid);line-height:1.6}

    /* COMMUNITY */
    .community-section{background:var(--zodiac)}
    .community-inner{max-width:1200px;margin:0 auto;padding:90px 5%}
    .community-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;margin-top:44px}
    .community-text p{font-size:15px;color:var(--grey-mid);line-height:1.8;margin-bottom:14px}
    .community-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(33,178,227,.1);border:1px solid rgba(33,178,227,.3);padding:8px 16px;margin-top:6px;font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--blue)}
    .community-photos{display:grid;grid-template-columns:1fr 1fr;gap:4px}
    .community-photo{aspect-ratio:4/3;background:linear-gradient(135deg,#071929,#0d2845);display:flex;align-items:center;justify-content:center;font-size:40px;opacity:.7;transition:opacity .3s}
    .community-photo:hover{opacity:1}

    /* ACCREDITATIONS */
    .accred-section{background:var(--navy)}
    .accred-inner{max-width:1200px;margin:0 auto;padding:90px 5%}
    .accred-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;margin-top:44px}
    .accred-box{background:var(--zodiac);border:1px solid rgba(255,255,255,.08);border-top:3px solid var(--blue);padding:32px}
    .accred-box h4{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;text-transform:uppercase;color:var(--blue);letter-spacing:2px;margin-bottom:18px}
    .badge-row{display:flex;flex-wrap:wrap;gap:10px}
    .accred-badge{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);padding:9px 16px;font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--mist)}
    .client-badge{background:rgba(33,178,227,.06);border:1px solid rgba(33,178,227,.2);padding:9px 16px;font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:.8px;color:var(--white);transition:all .25s}
    .client-badge:hover{background:rgba(33,178,227,.15);border-color:var(--blue)}

    /* GALLERY */
    .gallery-section{background:var(--zodiac)}
    .gallery-inner{max-width:1200px;margin:0 auto;padding:90px 5%}
    .gallery-grid{display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:auto auto;gap:4px;margin-top:44px}
    .g-item{aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;cursor:pointer;transition:filter .35s}
    .g-item.large{grid-row:span 2;aspect-ratio:unset;min-height:340px}
    .g-item:hover{filter:brightness(1.2)}
    .g-item:hover .g-overlay{opacity:1}
    .g-ph{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;width:100%;height:100%;padding:18px}
    .g-ph-icon{font-size:38px;opacity:.45}
    .g-ph-text{font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--grey-mid);text-align:center}
    .g-overlay{position:absolute;inset:0;background:rgba(6,124,191,.82);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}
    .g-overlay span{font-family:'Barlow Condensed',sans-serif;font-size:17px;font-weight:800;letter-spacing:2px;text-transform:uppercase}
    .gi-1{background:linear-gradient(135deg,#071929,#0d2845)}
    .gi-2{background:linear-gradient(135deg,#071d2e,#0a3050)}
    .gi-3{background:linear-gradient(135deg,#071929,#0e2d4a)}
    .gi-4{background:linear-gradient(135deg,#0a2035,#0f3256)}
    .gi-5{background:linear-gradient(135deg,#07202e,#0b3348)}
    .gallery-note{text-align:center;margin-top:16px;font-size:12px;color:var(--grey-mid);font-style:italic}

    /* CONTACT */
    .contact-section{background:var(--navy)}
    .contact-inner{max-width:1200px;margin:0 auto;padding:90px 5%}
    .contact-grid{display:grid;grid-template-columns:1fr 1.25fr;gap:56px;margin-top:52px}
    .contact-block{margin-bottom:26px}
    .contact-block h4{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--blue);margin-bottom:10px}
    .contact-item{display:flex;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:13px;color:var(--grey-mid)}
    .contact-item:last-child{border-bottom:none}
    .c-icon{width:30px;height:30px;flex-shrink:0;background:rgba(33,178,227,.12);border:1px solid rgba(33,178,227,.3);display:flex;align-items:center;justify-content:center;font-size:13px}
    .contact-item a{color:var(--blue);text-decoration:none}
    .contact-item a:hover{text-decoration:underline}
    .map-ph{background:var(--zodiac);border:1px solid rgba(255,255,255,.08);border-top:3px solid var(--blue);height:190px;margin-top:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--grey-mid);font-size:13px;text-align:center;padding:16px;position:relative;overflow:hidden}
    .map-ph::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(33,178,227,.06) 0%,transparent 65%)}
    .map-ph .pin{font-size:26px;position:relative;z-index:1}
    .map-ph span{position:relative;z-index:1}
    .form-wrap{background:var(--zodiac);border:1px solid rgba(255,255,255,.07);border-top:3px solid var(--blue);padding:36px}
    .form-title{font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
    .form-desc{font-size:13px;color:var(--grey-mid);margin-bottom:22px}
    .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .form-group{display:flex;flex-direction:column;gap:5px;margin-bottom:14px}
    .form-group label{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--grey-mid)}
    .form-group input,.form-group select,.form-group textarea{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);color:var(--white);padding:11px 14px;font-family:'Barlow',sans-serif;font-size:13px;outline:none;transition:all .25s;width:100%}
    .form-group input::placeholder,.form-group textarea::placeholder{color:rgba(255,255,255,.2)}
    .form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--blue);background:rgba(33,178,227,.05)}
    .form-group select{cursor:pointer}
    .form-group select option{background:var(--zodiac)}
    .form-group textarea{resize:vertical;min-height:100px}
    .form-submit{width:100%;padding:15px;background:var(--blue);color:#fff;border:none;cursor:pointer;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:700;letter-spacing:3px;text-transform:uppercase;clip-path:polygon(0 0,100% 0,97% 100%,3% 100%);transition:all .25s;margin-top:6px}
    .form-submit:hover{background:var(--lochmara);transform:translateY(-2px)}
    .form-success{display:none;background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.3);padding:14px;text-align:center;color:#4ade80;margin-top:14px;font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:600;letter-spacing:1px}
    .form-success.show{display:block}

    /* FOOTER */
    footer{background:#040f1a;border-top:3px solid var(--lochmara);padding:56px 5% 28px}
    .footer-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:56px;padding-bottom:44px;border-bottom:1px solid rgba(255,255,255,.08)}
    .footer-tagline{font-size:13px;color:var(--grey-mid);margin-top:14px;line-height:1.65;font-style:italic}
    .footer-tagline strong{color:var(--blue);font-style:normal}
    .footer-col h5{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--blue);margin-bottom:14px;padding-bottom:9px;border-bottom:1px solid rgba(33,178,227,.2)}
    .footer-links{list-style:none;display:flex;flex-direction:column;gap:7px}
    .footer-links a{font-size:13px;color:var(--grey-mid);text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:6px}
    .footer-links a::before{content:'›';color:var(--blue)}
    .footer-links a:hover{color:var(--white)}
    .f-contact-item{font-size:13px;color:var(--grey-mid);margin-bottom:7px}
    .f-contact-item a{color:var(--blue);text-decoration:none}
    .footer-bottom{max-width:1200px;margin:24px auto 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
    .footer-copy{font-size:12px;color:var(--grey-mid)}
    .footer-copy a{color:var(--blue);text-decoration:none}
    .social-pill{background:rgba(33,178,227,.1);border:1px solid rgba(33,178,227,.3);color:var(--blue);padding:5px 12px;font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:1px;text-decoration:none;transition:all .2s}
    .social-pill:hover{background:var(--blue);color:#fff}

    /* WHATSAPP */
    .wa-btn{position:fixed;bottom:26px;right:26px;z-index:999;width:56px;height:56px;background:#25d366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 22px rgba(37,211,102,.4);text-decoration:none;transition:transform .3s;animation:waPulse 2.5s ease-in-out infinite}
    .wa-btn:hover{transform:scale(1.1)}
    .wa-btn svg{width:28px;height:28px;fill:#fff}

    /* KEYFRAMES */
    @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
    @keyframes waPulse{0%,100%{box-shadow:0 4px 22px rgba(37,211,102,.4)}50%{box-shadow:0 4px 34px rgba(37,211,102,.7),0 0 0 7px rgba(37,211,102,.1)}}

    /* RESPONSIVE */
    @media(max-width:900px){
      .hero-inner,.services-grid,.about-grid,.community-grid,.accred-grid,.contact-grid,.footer-grid{grid-template-columns:1fr}
      .hero-right{display:none}
      .gallery-grid{grid-template-columns:1fr 1fr}
      .g-item.large{grid-column:span 2;aspect-ratio:16/9}
      .form-row,.approach-grid{grid-template-columns:1fr}
      .nav-links{display:none;flex-direction:column;position:absolute;top:68px;left:0;right:0;background:var(--navy);padding:18px 5%;border-top:1px solid rgba(255,255,255,.1);gap:14px}
      .nav-links.open{display:flex}
      .hamburger{display:flex}
      .strip{gap:18px;justify-content:flex-start;overflow-x:auto}
      .hero-btns{flex-direction:column}
      .footer-bottom{flex-direction:column;text-align:center}
      .about-grid{gap:36px}
      .community-grid,.accred-grid,.contact-grid,.footer-grid{gap:36px;margin-top:32px}
    }
  `}</style>
);

export default GlobalStyles;
