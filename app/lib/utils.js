import { toast } from 'react-toastify';

export const handleLikeClick = (product) => {
    // Recuperar la lista actual de productos favoritos del sessionStorage
    let likedProducts = JSON.parse(sessionStorage.getItem('likedProducts')) || [];
    const existingProductIndex = likedProducts.findIndex(likedProduct => likedProduct.id === product.id);
    let exist = false;
    if (existingProductIndex !== -1) {
        // El producto ya está en la lista, removerlo
        likedProducts.splice(existingProductIndex, 1); // Eliminar el producto de la lista
        toast.success('Product is removed from favorites!');
    } else {
        // El producto no está en la lista, agregarlo
        likedProducts.push(product);
        toast.success('Product is added to favorites!');
    }

    // Guardar la lista actualizada en el sessionStorage
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