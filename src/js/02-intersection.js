function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const sections = document.querySelectorAll('.sec');

sections.forEach(sec => {
  const randomColor = getRandomColor();

  sec.style.backgroundColor = randomColor;
});
