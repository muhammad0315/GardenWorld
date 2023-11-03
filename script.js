var feProduct = [
    {
        feImg : "images/products/f1.jpg",
        feName : "Outdoor Plant",
        feTitle : "Alstonia Scholaris | Dita Tree",
        fePrice : "Rs 2,750",
    },
    {
        feImg : "images/products/f2.jpg",
        feName : "Fruit Plant",
        feTitle : "Annona Cherimola | Custard Apple",
        fePrice : "Rs 6,000",
    },
    {
        feImg : "images/products/f3.jpg",
        feName : "Outdoor Plant",
        feTitle : "Moringa Oliefera | Drumstick",
        fePrice : "Rs 2,925",
    },
    {
        feImg : "images/products/f4.webp",
        feName : "Fruit Plant",
        feTitle : "Chiku Plant",
        fePrice : "Rs 7,450",
    },
    {
        feImg : "images/products/f5.jpg",
        feName : "Outdoor Plant",
        feTitle : "Gulmohar | Delonix Regia",
        fePrice : "Rs 3,750",
    },
    {
        feImg : "images/products/f6.jpg",
        feName : "Indoor PLant",
        feTitle : "Gladiator Red Rose",
        fePrice : "Rs 2,625",
    },
    {
        feImg : "images/products/f7.jpg",
        feName : "Fruit Plant",
        feTitle : "Coffee Plant",
        fePrice : "Rs 7,500",
    },
    {
        feImg : "images/products/f8.jpg",
        feName : "Indoor Plant",
        feTitle : "Eranthemum Red",
        fePrice : "Rs 2,025",
    },
    {
        feImg : "images/products/f9.jpg",
        feName : "Indoor Plant",
        feTitle : "Ficus Bonsai Plant",
        fePrice : "Rs 20,250",
    },
    {
        feImg : "images/products/f10.jpg",
        feName : "Herbaceous",
        feTitle : "Peace Lily (imported)",
        fePrice : "Rs 4,900",
    },
    {
        feImg : "images/products/f11.jpg",
        feName : "Herbaceous",
        feTitle : "Anthurium | Flamingo Lily",
        fePrice : "Rs 13,260",
    },
    {
        feImg : "images/products/f12.jpg",
        feName : "Indoor Plant",
        feTitle : "Miniture Rose | Button Rose(white)",
        fePrice : "Rs 1,620",
    },
    
]

for(i=0;i<feProduct.length;i++){
    document.querySelector('.pro-container').innerHTML+=`
    <div class="pro">
    <img src="${feProduct[i].feImg}" alt="">
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
    <h4>${feProduct[i].fePrice}</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
</div>`
}

