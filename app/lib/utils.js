import { toast } from 'react-toastify';

export const handleLikeClick = (product) => {
    // Recover actual list of fav products from sessionStorage
    let likedProducts = JSON.parse(sessionStorage.getItem('likedProducts')) || [];
    const existingProductIndex = likedProducts.findIndex(likedProduct => likedProduct.id === product.id);
    let exist = false;
    if (existingProductIndex !== -1) {
        // If the product is already on the list, remove it.
        likedProducts.splice(existingProductIndex, 1); // Remove the product from the fav list
        toast.success('Product is removed from favorites!');
    } else {
        // If the product is not on the list, remove it.
        likedProducts.push(product);
        toast.success('Product is added to favorites!');
    }

    // Save update list on sessionStorage
    sessionStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    return likedProducts;
};

export const apiNotificationConnection = (message, status) => {
    if(status === 200){
        toast.success(message)
    }else if(status === 400){
        toast.warning(message)
    }else{
        toast.error(message);
    }
}