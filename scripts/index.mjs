import { hideLoader } from './components/preloader.mjs';
import Navigation from './components/navigation.mjs';
import NAVIGATION_OPTIONS from './constants/navigation-options.mjs';
import {
  PROJECTS_SLIDER_ROOT,
  PROJECTS_SLIDER_OPTIONS,
} from './constants/projects-slider-options.mjs';

window.addEventListener('load', () => {
  hideLoader();

  const navigation = new Navigation(NAVIGATION_OPTIONS);
  const projectsSlider = new Swiper(
    PROJECTS_SLIDER_ROOT,
    PROJECTS_SLIDER_OPTIONS,
  );
});
