const grid = document.getElementById('productGrid');
const catWrap = document.getElementById('categoryButtons');
let selected = 'All Items';
function renderCategories(){
  catWrap.innerHTML = categories.map(c => `<button class="catBtn ${c===selected?'active':''}" data-cat="${c}">${c}</button>`).join('');
  document.querySelectorAll('.catBtn').forEach(btn=>btn.addEventListener('click',()=>{selected=btn.dataset.cat;renderCategories();renderProducts();}));
}
function renderProducts(){
  const products = getProducts().filter(p => selected==='All Items' || p.category===selected);
  grid.innerHTML = products.map(p => `<article class="card"><div class="cardImg" style="background-image:url('${p.image || 'assets/gorilla-storefront.jpg'}')"></div><div class="cardBody"><span class="badge">${p.category}</span><h3>${p.name}</h3><p class="price">${p.price}</p><p class="desc">${p.description}</p><a class="btn small" href="mailto:johnwesleymorton1981@icloud.com?subject=JohnnyMart item: ${encodeURIComponent(p.name)}">Ask About This</a></div></article>`).join('') || '<p>No products in this category yet.</p>';
}
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.nav').style.display = document.querySelector('.nav').style.display === 'flex' ? 'none' : 'flex');
renderCategories();renderProducts();
