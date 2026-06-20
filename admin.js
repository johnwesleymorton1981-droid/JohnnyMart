const form = document.getElementById('productForm');
const select = form.elements.category;
categories.filter(c=>c!=='All Items').forEach(c=>select.insertAdjacentHTML('beforeend', `<option>${c}</option>`));
function renderAdmin(){
 const products=getProducts();
 document.getElementById('adminList').innerHTML = products.map((p,i)=>`<article class="card"><div class="cardBody"><span class="badge">${p.category}</span><h3>${p.name}</h3><p class="price">${p.price||'Message for price'}</p><p>${p.description}</p><button class="btn small" onclick="removeProduct(${i})">Remove</button></div></article>`).join('');
 document.getElementById('exportBox').value = 'const starterProducts = ' + JSON.stringify(products,null,2) + ';';
}
function removeProduct(i){const p=getProducts();p.splice(i,1);saveProducts(p);renderAdmin();}
form.addEventListener('submit', e=>{e.preventDefault(); const data=Object.fromEntries(new FormData(form).entries()); data.price=data.price||'Message for price'; data.image=data.image||'assets/gorilla-storefront.jpg'; const p=getProducts(); p.unshift(data); saveProducts(p); form.reset(); renderAdmin();});
document.getElementById('reset').addEventListener('click',()=>{localStorage.removeItem('johnnymartProducts');renderAdmin();});
renderAdmin();
