let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}
// let index1 = 0;
// displayImages1();
// function displayImages1() {
//   let i;
//   const images = document.getElementsByClassName("images");
//   for (i = 0; i < images.length; i++) {
//     images[i].style.display = "none";
//   }
//   index1++;
//   if (index1 > images.length) {
//     index1 = 1;
//   }
//   images[index1-1].style.display = "block";
//   setTimeout(displayImages1, 2000); 
// }