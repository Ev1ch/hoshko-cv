class Navigation {
  constructor(navigationOptions) {
    const navigationElement = document.querySelector(
      navigationOptions.navigation.selector,
    );
    this.navigation = {
      element: navigationElement,
      activeSelector: navigationOptions.navigation.activeSelector,
      parent: navigationElement.parentNode,
    };

    const progressElement = document.querySelector(
      navigationOptions.progress.selector,
    );
    this.progress = {
      element: progressElement,
      value: 0,
    };

    this.links = this.linksMatch(navigationOptions.links);
    this.options = {
      ...navigationOptions.options,
      visibilityOffset: navigationOptions.options.visibilityOffset || 0,
    };

    this.initClickHandlers();
    this.initScrollHandler();
  }

  linksMatch(linksOptions) {
    const links = {
      ...linksOptions,
      pairs: linksOptions.pairs.map((link) => {
        const sectionElement = document.querySelector(link.section);

        return {
          section: {
            element: sectionElement,
          },
          target: {
            element: document.querySelector(
              `${linksOptions.selector}[data-target="${link.target}"]`,
            ),
          },
        };
      }),
    };

    return links;
  }

  activeLinkHanlder(scrollY) {
    const navigationElementHeight = this.navigation.element.clientHeight;
    const linkActiveSelector = this.links.activeSelector;

    for (const link of this.links.pairs) {
      const sectionElement = link.section.element;
      const targetElement = link.target.element;

      if (
        scrollY + navigationElementHeight >= sectionElement.offsetTop &&
        scrollY <
          sectionElement.offsetTop +
            sectionElement.clientHeight -
            navigationElementHeight
      ) {
        targetElement.classList.add(linkActiveSelector);
      } else {
        targetElement.classList.remove(linkActiveSelector);
      }
    }
  }

  progressHandler(scrollY) {
    const pageHeight =
      document.body.scrollHeight - document.documentElement.clientHeight;

    this.progress.value = (scrollY / pageHeight) * 100;
    this.progress.element.style.width = this.progress.value + '%';
  }

  navigationScrollingHanlder(scrollY) {
    const navigationElement = this.navigation.element;
    const navigationActiveSelector = this.navigation.activeSelector;

    if (scrollY === 0) {
      navigationElement.classList.remove(navigationActiveSelector);
    } else if (scrollY >= this.options.visibilityOffset) {
      navigationElement.classList.add(navigationActiveSelector);
    }
  }

  rootHeightHandler(scrollY) {
    const navigationElement = this.navigation.element;
    const navigationParentElement = this.navigation.parent;

    if (scrollY === 0) {
      navigationParentElement.style.paddingTop = 0;
    } else if (scrollY > this.options.visibilityOffset) {
      navigationParentElement.style.paddingTop =
        navigationElement.clientHeight + 'px';
    }
  }

  scrollHandler() {
    const scrollY = document.documentElement.scrollTop;

    this.rootHeightHandler(scrollY);
    this.navigationScrollingHanlder(scrollY);
    this.activeLinkHanlder(scrollY);
    this.progressHandler(scrollY);
  }

  clickHanlder(event) {
    event.preventDefault();

    const target = event.currentTarget;

    for (const link of this.links.pairs) {
      if (link.target.element.isSameNode(target)) {
        const sectionElement = link.section.element;
        const navigationElement = this.navigation.element;
        const currentScrollY = document.documentElement.scrollTop;
        let scrollY = Math.max(
          sectionElement.offsetTop - navigationElement.clientHeight + 5,
          0,
        );

        if(currentScrollY > this.options.visibilityOffset) {
          this.rootHeightHandler(scrollY);

          scrollY = Math.max(
            sectionElement.offsetTop - navigationElement.clientHeight + 5,
            0,
          );
        }

        window.scrollTo({
          top: scrollY,
          behavior: 'smooth',
        });

        break;
      }
    }
  }

  initScrollHandler() {
    window.addEventListener('scroll', this.scrollHandler.bind(this));
  }

  initClickHandlers() {
    for (const link of this.links.pairs) {
      const targetElement = link.target.element;

      targetElement.addEventListener('click', this.clickHanlder.bind(this));
    }
  }
}

export default Navigation;
