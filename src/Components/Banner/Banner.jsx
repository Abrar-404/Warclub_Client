const Banner = () => {
  const converted = {
    '.main-wrapper': { flexDirection: 'row', display: 'flex', flex: 1 },
    '#content': { flex: 1 },
    ul: { padding: '20px 0', flex: 1 },
    li: { fontFamily: "'Lato'", color: 'whitesmoke', lineHeight: '44px' },
  };

  return (
    <div>
      <div
        className="swiper-slide swiper-slide-next"
        style={
          ({
            width: 1356,
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px)',
            transitionDuration: '0ms',
          },
          converted)
        }
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
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
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
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
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
                  gaming events, conferences, and conventions. and connect with
                  each other.
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
                      JOIN NOW <i className="fa-solid fa-arrow-right ms-2" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
