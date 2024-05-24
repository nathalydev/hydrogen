// BaseService.js

const API_HOST = 'http://localhost';  // Modify this with the host of the API
const API_PORT = 4000;  // Modify this with the port of API

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
      console.error('Error when trying to add favorite:', error);
      return { error: 'Internal server error' };
    }
  }

  static async deleteFavorite(userID, productID) {
    try {
      const response = await fetch(`${API_HOST}:${API_PORT}/api/favorite/delete?userID=${userID}&productID=${productID}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      console.error('Error when trying to delete favorite:', error);
      return { error: 'Internal server error' };
    }
  }

  static async getUserFavorites(userID) {
    try {
      const response = await fetch(`${API_HOST}:${API_PORT}/api/favorites/user/${userID}`);
      return await response.json();
    } catch (error) {
      console.error('Error when trying to get favorite:', error);
      return { error: 'Internal server error' };
    }
  }
}

export default BaseService;
