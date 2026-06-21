const things = document.querySelectorAll(".move");
const container = document.getElementById("things");


things.forEach(img => {
    img.addEventListener("mouseenter", () => {
      const maxX = container.clientWidth - img.offsetWidth;
      const maxY = container.clientHeight - img.offsetHeight;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      img.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  things.forEach(img => {
  const x = Math.random() * (container.clientWidth - img.offsetWidth);
  const y = Math.random() * (container.clientHeight - img.offsetHeight);
  img.style.transform = `translate(${x}px, ${y}px)`;
});