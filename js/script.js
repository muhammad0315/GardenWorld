let categories = ["Outdoor Plant", "Fruit Plant", "Indoor PLant", "Herbaceous"];
let feProduct = [
    {
        feImg: "images/products/f1.jpg",
        feName: categories[0],
        feTitle: "Alstonia Scholaris | Dita Tree",
        fePrice: 2750,
    },
    {
        feImg: "images/products/f2.jpg",
        feName: categories[1],
        feTitle: "Annona Cherimola | Custard Apple",
        fePrice: 6000,
    },
    {
        feImg: "images/products/f3.jpg",
        feName: categories[0],
        feTitle: "Moringa Oliefera | Drumstick",
        fePrice: 2925,
    },
    {
        feImg: "images/products/f4.webp",
        feName: categories[1],
        feTitle: "Chiku Plant",
        fePrice: 7450,
    },
    {
        feImg: "images/products/f5.jpg",
        feName: categories[0],
        feTitle: "Gulmohar | Delonix Regia",
        fePrice: 3750,
    },
    {
        feImg: "images/products/f6.jpg",
        feName: categories[2],
        feTitle: "Gladiator Red Rose",
        fePrice: 2625,
    },
    {
        feImg: "images/products/f7.jpg",
        feName: categories[1],
        feTitle: "Coffee Plant",
        fePrice: 7500,
    },
    {
        feImg: "images/products/f8.jpg",
        feName: categories[2],
        feTitle: "Eranthemum Red",
        fePrice: 2025,
    },
    {
        feImg: "images/products/f9.jpg",
        feName: categories[2],
        feTitle: "Ficus Bonsai Plant",
        fePrice: 2025,
    },
    {
        feImg: "images/products/f10.jpg",
        feName: categories[3],
        feTitle: "Peace Lily (imported)",
        fePrice: 4900,
    },
    {
        feImg: "images/products/f11.jpg",
        feName: categories[3],
        feTitle: "Anthurium | Flamingo Lily",
        fePrice: 13260,
    },
    {
        feImg: "images/products/f12.jpg",
        feName: categories[2],
        feTitle: "Miniture Rose | Button Rose(white)",
        fePrice: 1620,
    },

]

if (document.querySelector(".btnContainer")) {
    for (let i = 0; i < categories.length; i++) {
        document.querySelector(".btnContainer").innerHTML += `
            <button class="btnPrimary col-md-2" onclick="fetchProduct('${categories[i]}')">${categories[i]}</button>
        `
    }
}

fetchProduct("all");
function fetchProduct(categoryName){
    if(categoryName == 'all'){
        if (document.querySelector('.pro-container')) {
            document.querySelector('.pro-container').innerHTML = ""
            for (i = 0; i < feProduct.length; i++) {
                document.querySelector('.pro-container').innerHTML += `
                <div class="col-md-3 p-3" style="height:100%">
                <div class="pro">
                <a href="sproduct.html?id=${i}">
                <img src="${feProduct[i].feImg}" alt="">
                </a>
                <div class="des">
                    <span>${feProduct[i].feName}</span>
                <h5>${feProduct[i].feTitle}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>Rs. ${feProduct[i].fePrice}</h4>
                </div>
                <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            </div>`
            }
        }
    } else {
        if (document.querySelector('.pro-container')) {
            document.querySelector('.pro-container').innerHTML = ""
            for (i = 0; i < feProduct.length; i++) {
                if(feProduct[i].feName == categoryName){
                    document.querySelector('.pro-container').innerHTML += `
                    <div class="col-md-3 p-3" style="height:100%">
                    <div class="pro">
                    <a href="sproduct.html?id=${i}">
                    <img src="${feProduct[i].feImg}" alt="">
                    </a>
                    <div class="des">
                        <span>${feProduct[i].feName}</span>
                    <h5>${feProduct[i].feTitle}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>Rs. ${feProduct[i].fePrice}</h4>
                    </div>
                    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                </div>
                </div>`
                }
            }
        }
    }
}





if(document.querySelector("header")){
    document.querySelector("header").innerHTML = `
    <nav class="container">
                <a href="index.html"><img src="images/logo.png" alt=""></a>
                <div class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop.html">shop</a></li>
                    <li><a href="about.html">about</a></li>
                    <li><a href="contact.html">contact</a></li>
                    <i class="fa-solid fa-magnifying-glass "></i>
                    <i class="fa-solid fa-bag-shopping" onclick="window.location.href='cart.html'"></i>
                    <a href="contact.html" class="nav-btn ">get free quote</a>
                    <a href="#" id="close"><i class="far far fa-times-circle"></i></a>
                </div>
                <div id="mobile">
                    <a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
                    <i id="bar" class="fas fas fa-outdent" class="active"></i>
                </div>
            </nav>
            <div class="sub-nav">
                <div class="container sub-nav-text">
                    <a href="plants.html">Plants</a>
                    <a href="mix.html">Potting Mix</a>
                    <a href="fer.html">Fertilizer</a>
                    <a href="pots.html">Pots</a>
                    <a href="hard.html">Hardware</a>
                </div>
            </div>
    `
}

if (document.querySelector("footer")) {
    document.querySelector("footer").innerHTML = `
    <div class="footer-inner container row py-5">
            <div class="part-1 col-md-4 text-center">
                <a href="index.html"><img src="images/logo.png" alt="index.html"></a>
                <p class="text-center">Get the breathing space now, and <br> we'll extend your term at the other <br>
                    end.</p>
                <div class="social">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-bands fab fa-youtube"></i>
                </div>
            </div>
            <div class="navigation col-md-3 text-center text-lg-start text-md-start mt-3">
                <h2>Navigation</h2>
                <a href="index.html">
                    <h4>Home</h4>
                </a>
                <a href="shop.html">
                    <h4>Shop</h4>
                </a>
                <a href="about.html">
                    <h4>About</h4>
                </a>
                <a href="contact.html">
                    <h4>Contact</h4>
                </a>
            </div>
            <div class="service col-md-2 text-center text-lg-start text-md-start mt-3">
                <h2>Services</h2>
                <a href="landscaping.html">
                    <h4>Landscapig</h4>
                </a>
                <a href="planting.html">
                    <h4>Planting</h4>
                </a>
                <a href="watering.html">
                    <h4>Watering</h4>
                </a>
                <a href="fence.html">
                    <h4>Fence</h4>
                </a>
                <a href="removing.html">
                    <h4>Removing</h4>
                </a>
                <a href="moving.html">
                    <h4>Lawn Mowing</h4>
                </a>
            </div>
            <div class="contact col-md-3 text-center text-lg-start text-md-start mt-3">
                <h2>Contact us</h2>
                <h4 class="email">consulto98@gmail.com</h4>
                <h4 class="address">76/A, Green road, NYC</h4>
                <h4 class="num">(80) 783 367-8907</h4>
            </div>
        </div>
    `
}
if (document.querySelector(".newsletter")) {
    document.querySelector(".newsletter").classList.add("py-4");
    document.querySelector(".newsletter").innerHTML = `
    <div class="news-text">
                <h2>Stay Connected</h2>
            </div>
            <div class="news-form">
                <input type="text" placeholder="Enter Email Address">
                <button>Subscribe</button>
            </div>
    `
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const mobileIcon = document.getElementById('bar');
    const closeIcon = document.getElementById('close');

    mobileIcon.addEventListener('click', function () {
        navLinks.classList.toggle('act');
    });

    closeIcon.addEventListener('click', function () {
        navLinks.classList.remove('act');
    });
});

