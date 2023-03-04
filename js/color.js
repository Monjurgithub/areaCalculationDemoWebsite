function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 120));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  let newColor = document.querySelectorAll(".card");
          for (const color of newColor) {
            color.addEventListener("mouseover", () => {
              color.style.backgroundColor = randomColor();
            });
          }