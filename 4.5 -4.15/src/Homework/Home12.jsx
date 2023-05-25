import React from "react";
import Product from ".././Home12/Product";
import { useState } from 'react';

function Home12() {

const product = [
{
name: "Ford",
description:
"Эта машина представляет собой идеальное сочетание стиля, комфорта и производительности, что делает ее превосходным выбором для всех, кто ищет надежный автомобиль. ",
price: 1000000,
src:"https://oir.mobi/uploads/posts/2020-12/1606946214_15-p-sinie-mashini-29.jpg"
},
{
name: "Mercedec",
description:
"Новейшие технологии и инновации, встроенные в эту машину, обеспечивают безопасность и удовлетворение при каждой поездке, а также экономия топлива на длительные расстояния. ",
price: 200000,
src:"https://sportishka.com/uploads/posts/2022-04/1651170605_2-sportishka-com-p-sovremennie-mashini-mashini-krasivo-foto-2.jpg"
},
{
name: "BMW",
description:
"Высокая надежность и долговечность этой машины гарантируют ее долгую службу и меньшую стоимость владения в будущем. ",
price: 234000,
src:"https://sportishka.com/uploads/posts/2022-11/1667460723_58-sportishka-com-p-mashina-lamborgini-aventador-vkontakte-66.jpg"
},
{
name: "Dodge",
description:
"Дизайн этой машины не только красив, но он также функционален, что предоставляет удобство и легкость использования, а также обеспечивает хорошую управляемость на дороге. ",
price: 349000,
src:"https://w-dog.ru/wallpapers/2/0/323575968804151/ferrari-f430-belyj.jpg"
},
{
name: "Audi",
description:
"Кроме того, покупка этой машины предоставляет возможность наслаждаться роскошью и комфортом на каждой поездке, делая каждую поездку приятной и удобной.",
price: 3336550,
src:"https://img3.goodfon.ru/original/2048x1536/a/26/aston-martin-v12-zagato-aston.jpg"
},
{
name: "Bantly",
description:
"Высокая надежность и долговечность этой машины гарантируют ее долгую службу и меньшую стоимость владения в будущем.",
price: 200400,
src:"https://sportishka.com/uploads/posts/2022-08/1660744161_10-sportishka-com-p-mashina-skorpion-krasivo-foto-25.jpg"
},
];

const [products, setProducts] = useState([...product]);

const sortByPriceAsc = () => {
const sortedProducts = [...products];
sortedProducts.sort((a, b) => a.price - b.price);
setProducts(sortedProducts);
};

const sortByPriceDesc = () => {
const sortedProducts = [...products];
sortedProducts.sort((a, b) => b.price - a.price);
setProducts(sortedProducts);
};

const sortByName = () => {
const sortedProducts = [...products];
sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
setProducts(sortedProducts);
};


return (
<>
<header>
<nav>
<ul>
<li>
<button onClick={sortByPriceAsc}>
Сортировать по возрастанию цены
</button>
</li>
<li>
<button onClick={sortByPriceDesc}>
Сортировать по убыванию цены
</button>
</li>
<li>
<button onClick={sortByName}>
Сортировать по алфавиту
</button>
</li>
</ul>
</nav>
</header>
<div
style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
>
{products.map((product) => (
<Product
key={product.name}
name={product.name}
description={product.description}
price={product.price}
src ={product.src}
/>
))}
</div>
</>
);
}

export default Home12;