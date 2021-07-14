import React from "react";
//stylesheet import
import './HeaderLogo.scss';

const Logo = () => {
  return (
    <svg
      role="img"
      aria-label="Jumia Nigeria: Online Shopping for Electronics, Phones &amp; Fashion"
      viewBox="0 0 139 32"
      class="header__logo"
      width="139"
      height="32"
      viewBox="0 0 139 32"
      id="logo"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          fill="#F68B1E"
          d="M131.27.26a7.33 7.33 0 0 1 7.21 7.43c0 4.1-3.23 7.43-7.21 7.43a7.33 7.33 0 0 1-7.22-7.43c0-4.1 3.23-7.43 7.22-7.43zm0 1.1l-1.83 3.8-4.07.62 2.95 2.95-.7 4.18 3.64-1.97 3.65 1.97-.7-4.18 2.95-2.95-4.07-.61-1.83-3.8z"
        ></path>
        <path
          fill="#282828"
          d="M126.3 17.3c.05-.3-.03-.6-.21-.82a.97.97 0 0 0-.76-.36h-.38c-.61 0-1.11.52-1.11 1.15V20c0 .55.43 1 .97 1 .52 0 .97-.4 1.06-.94l.44-2.76zm-4.9-4.9v-2.37c0-.63-.5-1.14-1.1-1.14h-1.5a1.02 1.02 0 0 0-1 1.18l.39 2.38c.1.63.62 1.09 1.24 1.09h.86c.6 0 1.1-.52 1.1-1.15zm0 7.6v-2.73c0-.63-.5-1.15-1.11-1.15h-.4a.97.97 0 0 0-.74.36c-.19.23-.27.53-.22.82l.44 2.76c.09.54.53.93 1.06.93s.97-.44.97-.98zm-4.76.62c.19-.23.27-.52.22-.8l-.42-2.61a1.27 1.27 0 0 0-1.24-1.09h-.6c-.29 0-.57.14-.74.38a.93.93 0 0 0-.16.78c.22.93.43 1.72.6 2.35l.09.35c.15.6.69 1.01 1.3 1.01h.16c.3 0 .6-.13.8-.37zm-4.07-8.1c.15.6.68 1.02 1.3 1.02h.86c.28 0 .56-.13.75-.36.18-.23.26-.53.22-.82l-.39-2.39a1.26 1.26 0 0 0-1.22-1.08h-1.22a.96.96 0 0 0-.92 1.2l.15.6.47 1.83zm19.1 4.8a1 1 0 0 0 .01-.4c.97-.07 1.9-.3 2.75-.67L133 22.12c-.2.86-.95 1.46-1.8 1.46h-17.02c-.86 0-1.6-.6-1.8-1.46l-4.11-17.28a1.35 1.35 0 0 0-1.3-1.06h-1.72c-.6 0-1.08-.5-1.08-1.1 0-.62.48-1.13 1.08-1.13h3.14c.86 0 1.6.59 1.82 1.44l.56 2.27c.16.61.7 1.04 1.31 1.04h10.63a8.76 8.76 0 0 0 6.3 10.38c-.1.15-.18.33-.22.53l-.41 2.6c-.05.3.03.6.22.84.18.22.44.34.72.34h.4c.6 0 1.11-.44 1.28-1.06l.07-.29c.17-.62.37-1.4.6-2.33zm-16.47 7.96a3.2 3.2 0 0 1 3.12 3.29 3.2 3.2 0 0 1-3.12 3.28 3.2 3.2 0 0 1-3.11-3.28 3.2 3.2 0 0 1 3.11-3.29zm14.97 0a3.2 3.2 0 0 1 3.1 3.29 3.2 3.2 0 0 1-3.1 3.28 3.2 3.2 0 0 1-3.12-3.28 3.2 3.2 0 0 1 3.12-3.29zm-94.97.14c-1.38 1-3.6 1.5-6.63 1.5h-4.29c-.58 0-1.2 0-1.88-.04-.66-.02-1.31-.1-1.96-.24a9.03 9.03 0 0 1-1.84-.6 4.86 4.86 0 0 1-2.62-2.8 6.8 6.8 0 0 1-.4-2.5V5.45h3.92V20.5c0 1.6 1.45 2.39 4.35 2.39h5.27c2.85 0 4.28-.8 4.28-2.39V5.45h3.87v15.29c0 2.11-.7 3.67-2.07 4.68zm39.16 1.5V5.46h3.92v21.48h-3.92zm21-16.12l-3.73 6.4h7.53l-3.8-6.4zm9.38 16.24l-3.25-5.8H89.4l-3.17 5.8h-4.63L93.29 6.9c.56-.96 1.3-1.45 2.18-1.45.92 0 1.65.48 2.22 1.43l11.46 20.16h-4.41zm-38.14.03V13.1l-8.37 12.85c-.3.45-.64.78-1.02 1-.4.23-.8.34-1.25.34-.95 0-1.73-.45-2.3-1.34l-8.5-12.96v14.1h-3.93V7.8c0-.74.2-1.31.59-1.73.39-.42.9-.63 1.51-.63.91 0 1.63.37 2.15 1.1l10.5 15.41L66.29 6.6a2.33 2.33 0 0 1 2.07-1.14c.65 0 1.18.23 1.58.7.4.46.6 1.07.6 1.83v19.1H66.6zm-54.8-9.72c0 6.55-2.36 9.32-6.42 10.23-4.05.91-5.34.9-5.34.9L0 24.03c1.61-.1 4.05-.37 5.58-1 1.4-.58 2.51-1.97 2.4-5.68l.08-7.87V5.45l3.91.02-.16 11.88z"
        ></path>
      </g>
    </svg>
  );
};

export default Logo;