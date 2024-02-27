const Banner = () => {
  const converted = {
    '--darkreader-neutral-background': '#212222',
    '--darkreader-neutral-text': '#eae3d9',
    '--darkreader-selection-background': '#165aaa',
    '--darkreader-selection-text': '#fbf5ec',
    '--page-title-display': 'block',
    '--bs-blue': '#0d6efd',
    '--bs-indigo': '#6610f2',
    '--bs-purple': '#6f42c1',
    '--bs-pink': '#d63384',
    '--bs-red': '#dc3545',
    '--bs-orange': '#fd7e14',
    '--bs-yellow': '#ffc107',
    '--bs-green': '#198754',
    '--bs-teal': '#20c997',
    '--bs-cyan': '#0dcaf0',
    '--bs-white': '#fff',
    '--bs-gray': '#6c757d',
    '--bs-gray-dark': '#343a40',
    '--bs-primary': '#0d6efd',
    '--bs-secondary': '#6c757d',
    '--bs-success': '#198754',
    '--bs-info': '#0dcaf0',
    '--bs-warning': '#ffc107',
    '--bs-danger': '#dc3545',
    '--bs-light': '#f8f9fa',
    '--bs-dark': '#212529',
    '--bs-font-sans-serif':
      'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    '--bs-font-monospace':
      'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    '--bs-gradient':
      'linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0))',
    '--fa-font-brands': 'normal 400 1em/1 "Font Awesome 6 Brands"',
    '--fa-font-duotone': 'normal 900 1em/1 "Font Awesome 6 Duotone"',
    '--fa-font-light': 'normal 300 1em/1 "Font Awesome 6 Pro"',
    '--fa-font-regular': 'normal 400 1em/1 "Font Awesome 6 Pro"',
    '--fa-font-solid': 'normal 900 1em/1 "Font Awesome 6 Pro"',
    '--fa-font-thin': 'normal 100 1em/1 "Font Awesome 6 Pro"',
    '--theme-color': '#45F882',
    '--theme-color2': '#FFBE18',
    '--theme-color3': '#6240CF',
    '--title-color': '#0B0E13',
    '--body-color': '#969EB2',
    '--smoke-color': '#F5F7FA',
    '--smoke-color2': '#F5F8FD',
    '--black-color': '#000000',
    '--black-color2': '#1A1D26',
    '--black-color3': '#0F1C23',
    '--gray-color': '#D8DDE1',
    '--white-color': '#ffffff',
    '--light-color': '#bdbdbd',
    '--yellow-color': '#FFB539',
    '--success-color': '#28a745',
    '--error-color': '#F2003A',
    '--th-border-color': '#6C6C6C',
    '--th-border-color2': '#E6E6E6',
    '--title-font': '"Rajdhani", sans-serif',
    '--body-font': '"Poppins", sans-serif',
    '--icon-font': '"Font Awesome 6 Pro"',
    '--container-gutters': '24px',
    '--section-space': '120px',
    '--section-space-mobile': '80px',
    '--section-title-space': '60px',
    '--ripple-ani-duration': '5s',
    '--th-body-background': '#0B0E13',
    '--main-container': '1250px',
    '--wp--preset--color--cyan-bluish-gray': '#abb8c3',
    '--wp--preset--color--pale-pink': '#f78da7',
    '--wp--preset--color--vivid-red': '#cf2e2e',
    '--wp--preset--color--luminous-vivid-orange': '#ff6900',
    '--wp--preset--color--luminous-vivid-amber': '#fcb900',
    '--wp--preset--color--light-green-cyan': '#7bdcb5',
    '--wp--preset--color--vivid-green-cyan': '#00d084',
    '--wp--preset--color--pale-cyan-blue': '#8ed1fc',
    '--wp--preset--color--vivid-cyan-blue': '#0693e3',
    '--wp--preset--color--vivid-purple': '#9b51e0',
    '--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple':
      'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
    '--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan':
      'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
    '--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange':
      'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
    '--wp--preset--gradient--luminous-vivid-orange-to-vivid-red':
      'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
    '--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray':
      'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
    '--wp--preset--gradient--cool-to-warm-spectrum':
      'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
    '--wp--preset--gradient--blush-light-purple':
      'linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)',
    '--wp--preset--gradient--blush-bordeaux':
      'linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)',
    '--wp--preset--gradient--luminous-dusk':
      'linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)',
    '--wp--preset--gradient--pale-ocean':
      'linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)',
    '--wp--preset--gradient--electric-grass':
      'linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)',
    '--wp--preset--gradient--midnight':
      'linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)',
    '--wp--preset--font-size--small': '13px',
    '--wp--preset--font-size--medium': '20px',
    '--wp--preset--font-size--large': '36px',
    '--wp--preset--font-size--x-large': '42px',
    '--wp--preset--spacing--20': '0.44rem',
    '--wp--preset--spacing--30': '0.67rem',
    '--wp--preset--spacing--40': '1rem',
    '--wp--preset--spacing--50': '1.5rem',
    '--wp--preset--spacing--60': '2.25rem',
    '--wp--preset--spacing--70': '3.38rem',
    '--wp--preset--spacing--80': '5.06rem',
    '--wp--preset--shadow--natural': '6px 6px 9px rgba(0, 0, 0, 0.2)',
    '--wp--preset--shadow--deep': '12px 12px 50px rgba(0, 0, 0, 0.4)',
    '--wp--preset--shadow--sharp': '6px 6px 0px rgba(0, 0, 0, 0.2)',
    '--wp--preset--shadow--outlined':
      '6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)',
    '--wp--preset--shadow--crisp': '6px 6px 0px rgba(0, 0, 0, 1)',
    '--extendify--spacing--large':
      'var(--wp--custom--spacing--large,clamp(2em, 8vw, 8em)) !important',
    '--wp--preset--font-size--ext-small': '1rem !important',
    '--wp--preset--font-size--ext-medium': '1.125rem !important',
    '--wp--preset--font-size--ext-large':
      'clamp(1.65rem, 3.5vw, 2.15rem) !important',
    '--wp--preset--font-size--ext-x-large':
      'clamp(3rem, 6vw, 4.75rem) !important',
    '--wp--preset--font-size--ext-xx-large':
      'clamp(3.25rem, 7.5vw, 5.75rem) !important',
    '--wp--preset--color--black': '#000 !important',
    '--wp--preset--color--white': '#fff !important',
    WebkitTextSizeAdjust: '100%',
    WebkitTapHighlightColor: 'transparent',
    fontFamily: 'var(--body-font)',
    fontSize: '16px',
    fontWeight: 400,
    color: 'var(--body-color)',
    lineHeight: '26px',
    WebkitFontSmoothing: 'antialiased',
    cursor: 'url("../img/cursor.svg"), auto',
    '--e-global-color-primary': '#6EC1E4',
    '--e-global-color-secondary': '#54595F',
    '--e-global-color-text': '#7A7A7A',
    '--e-global-color-accent': '#61CE70',
    '--e-global-typography-primary-font-family': '"Roboto"',
    '--e-global-typography-primary-font-weight': '600',
    '--e-global-typography-secondary-font-family': '"Roboto Slab"',
    '--e-global-typography-secondary-font-weight': '400',
    '--e-global-typography-text-font-family': '"Roboto"',
    '--e-global-typography-text-font-weight': '400',
    '--e-global-typography-accent-font-family': '"Roboto"',
    '--e-global-typography-accent-font-weight': '500',
    '--border-radius': '0',
    '--border-block-start-width': '0px',
    '--border-inline-end-width': '0px',
    '--border-block-end-width': '0px',
    '--border-inline-start-width': '0px',
    '--border-style': 'initial',
    '--border-color': 'initial',
    '--container-widget-width': '100%',
    '--container-widget-height': 'initial',
    '--container-widget-flex-grow': '0',
    '--container-widget-align-self': 'initial',
    '--content-width': 'min(100%,var(--container-max-width,1140px))',
    '--width': '100%',
    '--min-height': 'initial',
    '--height': 'auto',
    '--text-align': 'initial',
    '--position': 'relative',
    '--overflow': 'visible',
    '--overlay-mix-blend-mode': 'initial',
    '--overlay-opacity': '1',
    '--overlay-transition': '0.3s',
    '--e-con-grid-template-columns': 'repeat(3,1fr)',
    '--e-con-grid-template-rows': 'repeat(2,1fr)',
    textAlign: 'var(--text-align)',
    '--bc-margin-block-start': 'var(--margin-top)',
    '--bc-margin-block-end': 'var(--margin-bottom)',
    '--bc-margin-inline-start': 'var(--margin-left)',
    '--bc-margin-inline-end': 'var(--margin-right)',
    '--bc-padding-block-start': 'var(--padding-top)',
    '--bc-padding-block-end': 'var(--padding-bottom)',
    '--bc-padding-inline-start': 'var(--padding-left)',
    '--bc-padding-inline-end': 'var(--padding-right)',
    '--container-max-width': '1249px',
    '--container-default-padding-block-start': '0px',
    '--container-default-padding-inline-end': '0px',
    '--container-default-padding-block-end': '0px',
    '--container-default-padding-inline-start': '0px',
    '--display': 'flex',
    '--background-transition': '0.3s',
    '--margin-block-start': '0px',
    '--margin-block-end': '0px',
    '--margin-inline-start': '0px',
    '--margin-inline-end': '0px',
    '--padding-block-start': '0px',
    '--padding-block-end': '0px',
    '--padding-inline-start': '0px',
    '--padding-inline-end': '0px',
    '--z-index': '9',
    '--flex-direction': 'initial',
    '--flex-wrap': 'initial',
    '--justify-content': 'initial',
    '--align-items': 'initial',
    '--align-content': 'initial',
    '--gap': 'initial',
    '--flex-basis': 'initial',
    '--flex-grow': 'initial',
    '--flex-shrink': 'initial',
    '--order': 'initial',
    '--align-self': 'initial',
    '--swiper-theme-color': '#000',
    '--swiper-navigation-size': '44px',
    '--swiper-pagination-bullet-size': '6px',
    '--swiper-pagination-bullet-horizontal-gap': '6px',
    '--widgets-spacing': '0px 0px',
    boxSizing: 'border-box',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'clip',
    listStyle: 'none',
    padding: '0',
    touchAction: 'pan-y',
    marginTop: '-300px',
    marginBottom: '-50px',
    position: 'relative',
    zIndex: 2,
  };


  return (
    <div>
      <div
        className="swiper th-slider hero-cta-slider1 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
        id="heroSlider1"
        data-slider-options='{"effect":"fade"}'
      >
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-253915e4df7510edd"
          aria-live="off"
          style={{ transitionDuration: '0ms', transitionDelay: '0ms' }}
        >
          <div
            className="swiper-slide swiper-slide-next"
            style={{
              width: 1356,
              opacity: 1,
              transform: 'translate3d(0px, 0px, 0px)',
              transitionDuration: '0ms',
            }}
            role="group"
            aria-label="2 / 3"
            data-swiper-slide-index={1}
          >
            <div className="hero-cta-inner">
              <div className="container th-container2">
                <div className="hero-shape-area">
                  <div className="hero-bg-shape">
                    <div
                      className="hero-bg-border-anime bg-mask"
                      style={{
                        maskImage:
                          'url("https://wordpress.themeholy.com/bame/wp-content/uploads/2024/02/hero-bg-shape.png")',
                      }}
                    />
                    <svg
                      viewBox="0 0 1600 520"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                        fill="black"
                        stroke="url(#paint0_linear1_47_221)"
                        strokeWidth={2}
                      />
                      <mask
                        id="mask0_47_221"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                      >
                        <path
                          d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                          fill="black"
                        />
                      </mask>
                      <g mask="url(#mask0_47_221)">
                        <g filter="url(#filter0_f_47_221)">
                          <circle
                            cx={1413}
                            cy={314}
                            r={287}
                            fill="var(--theme-color2)"
                            fillOpacity="0.2"
                          />
                        </g>
                        <g filter="url(#filter01_f_47_221)">
                          <circle
                            cx={231}
                            cy={172}
                            r={229}
                            fill="var(--theme-color)"
                            fillOpacity="0.5"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_47_221"
                          x={566}
                          y={-533}
                          width={1694}
                          height={1694}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation={280}
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <filter
                          id="filter01_f_47_221"
                          x={-558}
                          y={-617}
                          width={1578}
                          height={1578}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation={280}
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear1_47_221"
                          x1={0}
                          y1={0}
                          x2={1600}
                          y2={520}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="var(--theme-color)" />
                          <stop offset={1} stopColor="var(--theme-color2)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="verses-thumb d-xl-none d-block">
                      <img
                        decoding="async"
                        src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/game-vs1.svg"
                        alt="game vs1"
                      />
                    </div>
                    <div
                      className="hero-img1 z-index-common slideinleft"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img
                        decoding="async"
                        src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-3.png"
                        alt="hero 1 3"
                      />
                    </div>
                    <div
                      className="hero-img2 z-index-common slideinright"
                      data-ani="slideinright"
                      data-ani-delay="0.4s"
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img
                        decoding="async"
                        src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-4.png"
                        alt="hero 1 4"
                      />
                    </div>
                  </div>
                  <div className="title-area mb-0">
                    <h2
                      className="sec-title title custom-anim-top wow"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.3s',
                        animationDelay: '0.1s',
                        animationName: 'custom-anim-top',
                      }}
                    >
                      Join The Big Tournaments
                    </h2>
                    <p
                      className="mt-30 mb-35 desc custom-anim-top wow"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.3s',
                        animationDelay: '0.2s',
                        animationName: 'custom-anim-top',
                      }}
                    >
                      Beyond esports tournaments, include a broader calendar of
                      gaming events, conferences, and conventions. and connect
                      with each other.
                    </p>
                    <div
                      className="btn-group custom-anim-top wow"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.3s',
                        animationDelay: '0.2s',
                        animationName: 'custom-anim-top',
                      }}
                    >
                      <a
                        href="https://wordpress.themeholy.com/bame/contact/"
                        className="th-btn th_btn style-border"
                      >
                        <span className="btn-border">
                          JOIN NOW{' '}
                          <i className="fa-solid fa-arrow-right ms-2" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-prev"
            role="group"
            aria-label="3 / 3"
            style={{
              width: 1356,
              opacity: 1,
              transform: 'translate3d(-1356px, 0px, 0px)',
              transitionDuration: '0ms',
            }}
            data-swiper-slide-index={2}
          >
            <div className="hero-cta-inner">
              <div className="container th-container2">
                <div className="hero-shape-area">
                  <div className="hero-bg-shape">
                    <div
                      className="hero-bg-border-anime bg-mask"
                      style={{
                        maskImage:
                          'url("https://wordpress.themeholy.com/bame/wp-content/uploads/2024/02/hero-bg-shape.png")',
                      }}
                    />
                    <svg
                      viewBox="0 0 1600 520"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                        fill="black"
                        stroke="url(#paint0_linear1_47_222)"
                        strokeWidth={2}
                      />
                      <mask
                        id="mask0_47_222"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                      >
                        <path
                          d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                          fill="black"
                        />
                      </mask>
                      <g mask="url(#mask0_47_222)">
                        <g filter="url(#filter0_f_47_222)">
                          <circle
                            cx={1413}
                            cy={314}
                            r={287}
                            fill="var(--theme-color2)"
                            fillOpacity="0.2"
                          />
                        </g>
                        <g filter="url(#filter01_f_47_222)">
                          <circle
                            cx={231}
                            cy={172}
                            r={229}
                            fill="var(--theme-color)"
                            fillOpacity="0.5"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_47_222"
                          x={566}
                          y={-533}
                          width={1694}
                          height={1694}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation={280}
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <filter
                          id="filter01_f_47_222"
                          x={-558}
                          y={-617}
                          width={1578}
                          height={1578}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation={280}
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear1_47_222"
                          x1={0}
                          y1={0}
                          x2={1600}
                          y2={520}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="var(--theme-color)" />
                          <stop offset={1} stopColor="var(--theme-color2)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="verses-thumb d-xl-none d-block">
                      <img
                        decoding="async"
                        src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/game-vs1.svg"
                        alt="game vs1"
                      />
                    </div>
                    <div
                      className="hero-img1 z-index-common slideinleft"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img
                        decoding="async"
                        src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-5.png"
                        alt="hero 1 5"
                      />
                    </div>
                    <div
                      className="hero-img2 z-index-common slideinright"
                      data-ani="slideinright"
                      data-ani-delay="0.4s"
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img
                        decoding="async"
                        src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-6.png"
                        alt="hero 1 6"
                      />
                    </div>
                  </div>
                  <div className="title-area mb-0">
                    <h2
                      className="sec-title title custom-anim-top wow"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.3s',
                        animationDelay: '0.1s',
                        animationName: 'custom-anim-top',
                      }}
                    >
                      Join The Big Tournaments
                    </h2>
                    <p
                      className="mt-30 mb-35 desc custom-anim-top wow"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.3s',
                        animationDelay: '0.2s',
                        animationName: 'custom-anim-top',
                      }}
                    >
                      Beyond esports tournaments, include a broader calendar of
                      gaming events, conferences, and conventions. and connect
                      with each other.
                    </p>
                    <div
                      className="btn-group custom-anim-top wow"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.3s',
                        animationDelay: '0.2s',
                        animationName: 'custom-anim-top',
                      }}
                    >
                      <a
                        href="https://wordpress.themeholy.com/bame/contact/"
                        className="th-btn th_btn style-border"
                      >
                        <span className="btn-border">
                          JOIN NOW{' '}
                          <i className="fa-solid fa-arrow-right ms-2" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-visible swiper-slide-active"
            style={{
              width: 1356,
              opacity: 1,
              transform: 'translate3d(-2712px, 0px, 0px)',
              transitionDuration: '0ms',
            }}
            role="group"
            aria-label="1 / 3"
            data-swiper-slide-index={0}
          >
            <div className="hero-cta-inner">
              <div className="container th-container2">
                <div className="hero-shape-area">
                  <div className="hero-bg-shape">
                    <div
                      className="hero-bg-border-anime bg-mask"
                      style={{
                        maskImage:
                          'url("https://wordpress.themeholy.com/bame/wp-content/uploads/2024/02/hero-bg-shape.png")',
                      }}
                    />
                    <svg
                      viewBox="0 0 1600 520"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1599 30V490C1599 506.016 1586.02 519 1570 519H1062.43C1054.74 519 1047.36 515.945 1041.92 510.506L1009.49 478.08C1003.68 472.266 995.795 469 987.574 469H612.426C604.205 469 596.32 472.266 590.506 478.08L558.08 510.506C552.641 515.945 545.265 519 537.574 519H30C13.9837 519 1 506.016 1 490V30C1 13.9837 13.9837 1 30 1H400H537.574C545.265 1 552.641 4.05535 558.08 9.4939L590.506 41.9203C596.32 47.7339 604.205 51 612.426 51H987.574C995.795 51 1003.68 47.7339 1009.49 41.9203L1041.92 9.4939C1047.36 4.05535 1054.74 1 1062.43 1H1200H1570C1586.02 1 1599 13.9837 1599 30Z"
                        fill="black"
                        stroke="url(#paint0_linear1_47_220)"
                        strokeWidth={2}
                      />
                      <mask
                        id="mask0_47_220"
                        style={{ maskType: 'alpha' }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                      >
                        <path
                          d="M1600 490V30C1600 13.4315 1586.57 0 1570 0H1200H1062.43C1054.47 0 1046.84 3.1607 1041.21 8.7868L1008.79 41.2132C1003.16 46.8393 995.53 50 987.574 50H612.426C604.47 50 596.839 46.8393 591.213 41.2132L558.787 8.7868C553.161 3.16071 545.53 0 537.574 0H400H30C13.4315 0 0 13.4314 0 30V490C0 506.569 13.4315 520 30 520H537.574C545.53 520 553.161 516.839 558.787 511.213L591.213 478.787C596.839 473.161 604.47 470 612.426 470H987.574C995.53 470 1003.16 473.161 1008.79 478.787L1041.21 511.213C1046.84 516.839 1054.47 520 1062.43 520H1570C1586.57 520 1600 506.569 1600 490Z"
                          fill="black"
                        />
                      </mask>
                      <g mask="url(#mask0_47_220)">
                        <g filter="url(#filter0_f_47_220)">
                          <circle
                            cx={1413}
                            cy={314}
                            r={287}
                            fill="var(--theme-color2)"
                            fillOpacity="0.2"
                          />
                        </g>
                        <g filter="url(#filter01_f_47_220)">
                          <circle
                            cx={231}
                            cy={172}
                            r={229}
                            fill="var(--theme-color)"
                            fillOpacity="0.5"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_47_220"
                          x={566}
                          y={-533}
                          width={1694}
                          height={1694}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation={280}
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <filter
                          id="filter01_f_47_220"
                          x={-558}
                          y={-617}
                          width={1578}
                          height={1578}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation={280}
                            result="effect1_foregroundBlur_47_22"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear1_47_220"
                          x1={0}
                          y1={0}
                          x2={1600}
                          y2={520}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="var(--theme-color)" />
                          <stop offset={1} stopColor="var(--theme-color2)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="verses-thumb d-xl-none d-block">
                      <img
                        decoding="async"
                        src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/game-vs1.svg"
                        alt="game vs1"
                      />
                    </div>
                    <div
                      className="hero-img1 z-index-common slideinleft"
                      data-ani="slideinleft"
                      data-ani-delay="0.4s"
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img
                        decoding="async"
                        src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-1.png"
                        alt="hero 1 1"
                      />
                    </div>
                    <div
                      className="hero-img2 z-index-common slideinright"
                      data-ani="slideinright"
                      data-ani-delay="0.4s"
                      style={{ animationDelay: '0.4s' }}
                    >
                      <img
                        decoding="async"
                        src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-1-2.png"
                        alt="hero 1 2"
                      />
                    </div>
                  </div>
                  <div className="title-area mb-0">
                    <h2
                      className="sec-title title custom-anim-top wow"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.1s"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.3s',
                        animationDelay: '0.1s',
                        animationName: 'custom-anim-top',
                      }}
                    >
                      Join The Big Tournaments{' '}
                    </h2>
                    <p
                      className="mt-30 mb-35 desc custom-anim-top wow"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.3s',
                        animationDelay: '0.2s',
                        animationName: 'custom-anim-top',
                      }}
                    >
                      Beyond esports tournaments, include a broader calendar of
                      gaming events, conferences, and conventions. and connect
                      with each other.
                    </p>
                    <div
                      className="btn-group custom-anim-top wow"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: 'visible',
                        animationDuration: '1.3s',
                        animationDelay: '0.2s',
                        animationName: 'custom-anim-top',
                      }}
                    >
                      <a
                        href="https://wordpress.themeholy.com/bame/contact/"
                        className="th-btn th_btn style-border"
                      >
                        <span className="btn-border">
                          JOIN NOW{' '}
                          <i className="fa-solid fa-arrow-right ms-2" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
            aria-label="Go to Slide 1"
            tabIndex={0}
            aria-current="true"
          />
          <span
            className="swiper-pagination-bullet"
            aria-label="Go to Slide 2"
            tabIndex={0}
          />
          <span
            className="swiper-pagination-bullet"
            aria-label="Go to Slide 3"
            tabIndex={0}
          />
        </div>
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        />
      </div>
    </div>
  );
};

export default Banner;
