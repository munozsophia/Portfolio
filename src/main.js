import '../styles/modern.normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/headshot.css';
import '../styles/components/about.css';
import '../styles/components/review.css';
import '../styles/components/honors.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';

mobileNav();
darkMode();
lazyLoading();