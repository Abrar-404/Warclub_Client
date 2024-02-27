import '../Styles/customFont.css';

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
    '--z-index': 'revert',
    '--overflow': 'visible',
    '--overlay-mix-blend-mode': 'initial',
    '--overlay-opacity': '1',
    '--overlay-transition': '0.3s',
    '--e-con-grid-template-columns': 'repeat(3,1fr)',
    '--e-con-grid-template-rows': 'repeat(2,1fr)',
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
    textAlign: 'center !important',
    fontFamily: 'var(--title-font)',
    textTransform: 'none',
    margin: '0 0 15px 0',
    fontSize: '74px',
    boxSizing: 'border-box',
    fontWeight: 700,
    lineHeight: 1.119,
    marginBottom: '19px',
    marginTop: '-0.2em',
    color: 'var(--white-color)',
  };

  return (
    // <div className="bg-[url('https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-bg1-1.png')] opacity-5 h-screen bg-no-repeat">
    //   </div>
    <div>
      <div className="pt-48">
        <h1 className="text-[#45F882] text-2xl rajdhani-medium flex justify-center">
          # World Class ESports & Gaming Site
        </h1>
        <h1
          className="hero-title"
          style={
            (converted,
            {
              backgroundImage:
                'url("https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-title-bg-shape1.svg")',
            })
          }
        >
          <span
            className="title1 custom-anim-top wow background-image"
            data-wow-duration="1.1s"
            data-wow-delay="0.3s"
            style={{
              visibility: 'visible',
              animationDuration: '1.1s',
              animationDelay: '0.3s',
              animationName: 'custom-anim-top',
              backgroundImage:
                'url("https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/hero-title-bg-shape1.svg")',
            }}
          >
            SHAPING THE FUTURE OF
          </span>
          <span
            className="title2 custom-anim-top wow"
            data-wow-duration="1.1s"
            data-wow-delay="0.4s"
            style={{
              visibility: 'visible',
              animationDuration: '1.1s',
              animationDelay: '0.4s',
              animationName: 'custom-anim-top',
            }}
          >
            ESPORTS
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
