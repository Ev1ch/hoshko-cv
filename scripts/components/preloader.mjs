export function showLoader() {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preloader--active');
}

export function hideLoader() {
  const preloader = document.querySelector('.preloader');
  preloader.classList.remove('preloader--active');
}
