const $ = (selector) => document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const iconMenuMobile = $('.menu');
const mobileMenu = $('.mobile-menu');
const aside=$('.navbar-shopping-cart')
const shoppingCartContainer=$('#shoppingCartContainer')
const cardsContainer=$('.cards-container')

menuEmail.addEventListener('click',toggleDesktopMenu);
iconMenuMobile.addEventListener('click',toggleMobileMenu);
aside.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){//2 SOLUCIONES
   /*  const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

  if (!isAsideCarritoClosed) {
    asideCarrito.classList.add('inactive');
  } */
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
        desktopMenu.classList.toggle('inactive');//Funcion palanca que activa una clase de css en el html
}

function toggleMobileMenu(){//2 SOLUCIONES
    /* const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

  if (!isAsideCarritoClosed) {
    asideCarrito.classList.add('inactive'); 
  } */
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');//Funcion palanca que activa una clase de css en el html
}

function toggleCarritoAside(){//2 SOLUCIONES
   /*  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }  */
     desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
   shoppingCartContainer.classList.toggle('inactive')
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);