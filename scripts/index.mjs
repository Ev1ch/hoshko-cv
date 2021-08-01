import { hideLoader } from './components/preloader.mjs';
import Navigation from './components/navigation.mjs';
import NAVIGATION_OPTIONS from './constants/navigation-options.mjs';

window.addEventListener('load', () => {
  hideLoader();
  const navigation = new Navigation(NAVIGATION_OPTIONS);
});
