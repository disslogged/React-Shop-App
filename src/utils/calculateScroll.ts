const calculateScroll = () => {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const scrollable = fullHeight - windowHeight;
  const percentage = (scrolled / scrollable) * 100;

  return percentage;
};

export default calculateScroll;
