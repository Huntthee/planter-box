const seedling = 'public/images/seedling.webp';
let dirtPile1 = document.getElementById('plant1');
let dirtPile2 = document.getElementById('plant2');
let dirtPile3 = document.getElementById('plant3');
let dirtPile4 = document.getElementById('plant4');

dirtPile1.onclick = () => {
  dirtPile1.src = seedling;
  dirtPile1.title = 'A cute little seedling is growing!';
}

dirtPile2.onclick = () => {
  dirtPile2.src = seedling;
  dirtPile2.title = 'A cute little seedling is growing!';
}

dirtPile3.onclick = () => {
  dirtPile3.src = seedling;
  dirtPile3.title = 'A cute little seedling is growing!';
}

dirtPile4.onclick = () => {
  dirtPile4.src = seedling;
  dirtPile4.title = 'A cute little seedling is growing!';
}