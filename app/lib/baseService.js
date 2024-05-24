// BaseService.js

const API_HOST = 'http://localhost';  // Modifica esto con el host del API
const API_PORT = 4000;  // Modifica esto con el puerto del API

class BaseService {
  static async addFavorite(userID, product) {
    try {
      const response = await fetch(`${API_HOST}:${API_PORT}/api/favorite/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID, product }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error al agregar favorito:', error);
      return { error: 'Error interno del servidor' };
    }
  }

  static async deleteFavorite(userID, productID) {
    try {
      const response = await fetch(`${API_HOST}:${API_PORT}/api/favorite/delete?userID=${userID}&productID=${productID}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      console.error('Error al eliminar favorito:', error);
      return { error: 'Error interno del servidor' };
    }
  }

  static async getUserFavorites(userID) {
    try {
      const response = await fetch(`${API_HOST}:${API_PORT}/api/favorites/user/${userID}`);
      return await response.json();
    } catch (error) {
      console.error('Error al obtener favoritos:', error);
      return { error: 'Error interno del servidor' };
    }
  }
}

export default BaseService;
