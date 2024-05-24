import { toast } from 'react-toastify';

export const handleLikeClick = (product) => {
    // Recuperar la lista actual de productos favoritos del sessionStorage
    let likedProducts = JSON.parse(sessionStorage.getItem('likedProducts')) || [];
    const existingProductIndex = likedProducts.findIndex(likedProduct => likedProduct.id === product.id);
    let exist = false;
    if (existingProductIndex !== -1) {
        // El producto ya está en la lista, removerlo
        likedProducts.splice(existingProductIndex, 1); // Eliminar el producto de la lista
        toast('Product is removed from favorites!');
    } else {
        // El producto no está en la lista, agregarlo
        likedProducts.push(product);
        toast('Product is added to favorites!');
    }

    // Guardar la lista actualizada en el sessionStorage
    sessionStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    return likedProducts;
};


export const checkIfProductLiked = (productId) => {
    // Obtener la lista de productos favoritos del sessionStorage
    const likedProducts = JSON.parse(sessionStorage.getItem('likedProducts')) || [];
    
    // Verificar si el productId está presente en la lista de productos favoritos
    const isProductLiked = likedProducts.some(likedProduct => likedProduct.id === productId);

    // Almacenar el producto actual en sessionStorage
    if (isProductLiked) {
        let productColors = JSON.parse(sessionStorage.getItem('likedProducts')) || {};
        sessionStorage.setItem('likedProducts', JSON.stringify(productColors));
    }

    return isProductLiked;
};

  