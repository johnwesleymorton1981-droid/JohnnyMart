const starterProducts = [
  {name:'Vera Bradley & Designer Bags', category:'Designer Bags', price:'Message for price', image:'assets/thank-you-card.jpg', description:'Handbags, totes, purses, and stylish finds. Inventory changes often.'},
  {name:'Beanie Babies & Plush Collectibles', category:'Collectibles & Toys', price:'Message for price', image:'assets/johnnymart-homepage-concept.png', description:'Beanie Babies, plush toys, vintage toys, and collectible shelf pieces.'},
  {name:'Electronics & Gadgets', category:'Electronics', price:'Message for price', image:'assets/johnnymart-homepage-concept.png', description:'Headphones, phones, speakers, cameras, drones, and useful tech finds.'},
  {name:'Blown Glass & Home Decor', category:'Glassware & Home Decor', price:'Message for price', image:'assets/johnnymart-homepage-concept.png', description:'Glassware, dishes, decorative pieces, and home display items.'},
  {name:'Clothing & Scrubs', category:'Clothing & Scrubs', price:'Message for price', image:'assets/johnnymart-homepage-concept.png', description:'Clothes, workwear, scrubs, shoes, and wearable deals.'},
  {name:'Miscellaneous Treasures', category:'Miscellaneous Treasures', price:'Message for price', image:'assets/gorilla-storefront.jpg', description:'Random useful finds, estate-sale treasures, flea-market items, and surprise deals.'}
];
const categories = ['All Items','Designer Bags','Electronics','Collectibles & Toys','Glassware & Home Decor','Clothing & Scrubs','Miscellaneous Treasures'];
function getProducts(){
  const saved = localStorage.getItem('johnnymartProducts');
  return saved ? JSON.parse(saved) : starterProducts;
}
function saveProducts(products){localStorage.setItem('johnnymartProducts', JSON.stringify(products));}
