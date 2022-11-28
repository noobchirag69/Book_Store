const productsID = {
    book1_ID: "price_1M91eYSALE1Xw58JehB7rRDt",
    book2_ID: "price_1M91gRSALE1Xw58JvHMadhr5",
    book3_ID: "price_1M91hMSALE1Xw58JVwdi8K10"
};

const productsArray = [
    {
        id: productsID.book1_ID,
        title: "The Immortals of Meluha",
        price: 299
    },
    {
        id: productsID.book2_ID,
        title: "The Secret of the Nagas",
        price: 399
    },
    {
        id: productsID.book3_ID,
        title: "The Oath of the Vayuputras",
        price: 499
    }
];

const getProductData = (id) => {
    let productData = productsArray.find(product => product.id === id);
    if (productData === undefined) {
        console.log("Doesn't Exist!");
    }

    return productData;
}

export { productsID, productsArray, getProductData };