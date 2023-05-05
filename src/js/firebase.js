const dbURL =
  "https://slutprojectwebshop-default-rtdb.europe-west1.firebasedatabase.app/alpha.json";

// Async function to fetch data from Firebase
async function getFirebaseData() {
  try {
    const response = await fetch(dbURL); // Fetch data from the provided URL

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const dbData = await response.json(); // Parse the fetched data as JSON
    return dbData; // Return the parsed data
  } catch (error) {
    console.error("Error fetching data:", error); // Log any error encountered during the fetch operation
    throw error; // Rethrow the error to be caught and handled by the caller
  }
}

// Function to get the product key for a given item ID from allProducts object
const getProductKey = (allProducts, itemId) => {
  return Object.keys(allProducts).find(
    (key) => allProducts[key].uuid === itemId // Find and return the key with matching item ID (uuid)
  );
};

// Async function to fetch all products from the database
const fetchAllProducts = async () => {
  try {
    const response = await fetch(dbURL); // Fetch data from the provided URL
    return await response.json(); // Return the parsed JSON data
  } catch (error) {
    throw new Error(`Error fetching all products: ${error}`); // Throw error with a custom message
  }
};

// Async function to update the stock of a product in the database
const updateStockInDB = async (productKey, updatedStock) => {
  try {
    // Create a patch object to update only the stock value of the product
    const patchObject = { [`${productKey}/stock`]: updatedStock };
    // Set request options for the PATCH method
    const options = {
      method: "PATCH",
      body: JSON.stringify(patchObject),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    // Send a PATCH request to update the stock in the database
    await fetch(dbURL, options);
  } catch (error) {
    throw new Error(`Error updating stock in DB: ${error}`); // Throw error with a custom message
  }
};

// Async function to update the stock of a product by item ID and the quantity to remove
const updateStock = async (itemId, quantityToRemove) => {
  try {
    // Fetch all products from the database
    const allProducts = await fetchAllProducts();
    // Get the product key for the given item ID
    const productKey = getProductKey(allProducts, itemId);

    // Throw an error if the product key is not found
    if (!productKey) {
      throw new Error(`Product with UUID ${itemId} not found.`);
    }

    // Get the current stock of the product
    const currentStock = allProducts[productKey].stock;

    // Check if there is enough stock to remove the specified quantity
    if (currentStock >= quantityToRemove) {
      // Calculate the updated stock after removing the quantity
      const updatedStock = currentStock - quantityToRemove;
      // Update the stock in the database
      await updateStockInDB(productKey, updatedStock);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error updating stock:", error.message); // Log the error message
    throw error; // Rethrow the error to be caught and handled by the caller
  }
};

export { getFirebaseData, updateStock };
