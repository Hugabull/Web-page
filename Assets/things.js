const bibbles = document.querySelectorAll(".things");
const container = document.getElementById("things");


bibbles.forEach(img => {
    img.addEventListener("mouseenter", () => {
      const maxX = container.clientWidth - img.offsetWidth;
      const maxY = container.clientHeight - img.offsetHeight;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      img.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  bibbles.forEach(img => {
  const x = Math.random() * (container.clientWidth - img.offsetWidth);
  const y = Math.random() * (container.clientHeight - img.offsetHeight);
  img.style.transform = `translate(${x}px, ${y}px)`;
});