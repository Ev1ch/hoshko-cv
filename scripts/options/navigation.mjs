export const NAVIGATION_OPTIONS = {
  options: {
    visibilityOffset: 300,
  },
  navigation: {
    selector: '.navigation',
    activeSelector: 'navigation--scrolling',
  },
  progress: {
    selector: '.navigation__progress',
  },
  links: {
    selector: '.navigation__item',
    activeSelector: 'navigation__item--active',
    pairs: [
      {
        target: 'welcome',
        section: '#welcome',
      },
      {
        target: 'about',
        section: '#about',
      },
      {
        target: 'skills',
        section: '#skills',
      },
      {
        target: 'tools',
        section: '#tools',
      },
      {
        target: 'portfolio',
        section: '#portfolio',
      },
      {
        target: 'contacts',
        section: '#contacts',
      },
    ],
  },
};
