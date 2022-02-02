import { hideLoader } from './components/preloader.mjs';
import Navigation from './components/navigation.mjs';
import {
  NAVIGATION_OPTIONS,
  PROJECTS_SLIDER_ROOT,
  PROJECTS_SLIDER_OPTIONS,
  POSTS_SLIDER_ROOT,
  POSTS_SLIDER_OPTIONS,
  TIKTOKS_SLIDER_ROOT,
  TIKTOKS_SLIDER_OPTIONS,
} from './options/index.mjs';

window.addEventListener('load', () => {
  hideLoader();

  const navigation = new Navigation(NAVIGATION_OPTIONS);
  const projectsSlider = new Swiper(
    PROJECTS_SLIDER_ROOT,
    PROJECTS_SLIDER_OPTIONS,
  );
  const postsSlider = new Swiper(POSTS_SLIDER_ROOT, POSTS_SLIDER_OPTIONS);
  const tiktoksSlider = new Swiper(TIKTOKS_SLIDER_ROOT, TIKTOKS_SLIDER_OPTIONS);
});
