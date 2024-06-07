const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/* Bottom to Top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

//products
// const product = [
//     {
//         id: 0,
//         image: 'img/products/n1.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 1,
//         image: 'img/products/n2.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 2,
//         image: 'img/products/n3.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 3,
//         image: 'img/products/n4.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 4,
//         image: 'img/products/n5.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 5,
//         image: 'img/products/n6.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 6,
//         image: 'img/products/n7.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 7,
//         image: 'img/products/n8.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 8,
//         image: 'img/products/f1.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 9,
//         image: 'img/products/f2.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 10,
//         image: 'img/products/f3.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 11,
//         image: 'img/products/f4.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 12,
//         image: 'img/products/f5.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 13,
//         image: 'img/products/f6.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 14,
//         image: 'img/products/f7.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     },
//     {
//         id: 15,
//         image: 'img/products/f8.jpg',
//         title: 'Orange T-shirt',
//         price: 78,
//     }
// ];
// // Create a set to remove duplicates
// const categories = [...new Set(product.map(item => item))];

// let i = 0;
// document.getElementById('root').innerHTML = categories.map(item => {
//     var { image, title, price } = item;
//     return `
//         <tr>
//             <td>
//                 <div class="cart-info">
//                     <img src="img/products/f1.jpg" alt="Tshirt" />
//                     <div>
//                         <p>Orange Printed Tshirt</p>
//                         <small>Price: $78.00</small>
//                         <br />
//                         <a href="#">Remove</a>
//                     </div>
//                 </div>
//             </td>
//             <td><input type="number" value="1" /></td>
//             <td>$78.00</td>
//         </tr>
//     `;
// }).join('');