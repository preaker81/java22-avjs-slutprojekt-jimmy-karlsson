const getDBURL =
  "https://slutprojectwebshop-default-rtdb.europe-west1.firebasedatabase.app/alpha.json";

// Asynchronous function to fetch data from Firebase
async function getFirebaseData() {
  try {
    const response = await fetch(getDBURL); // Fetch data from the provided URL
    const dbData = await response.json(); // Parse the fetched data as JSON
    return dbData; // Return the parsed data
  } catch (error) {
    console.error("Error fetching data:", error); // Log any error encountered during the fetch operation
    throw error; // Rethrow the error to be caught and handled by the caller
  }
}

// Asynchronous function to update data to Firebase
const updateStock = async (itemId, quantityToRemove) => {
  try {
    // Fetch all products
    const response = await fetch(getDBURL);
    const allProducts = await response.json();

    // Find the product with the matching UUID
    const productKey = Object.keys(allProducts).find(
      (key) => allProducts[key].uuid === itemId
    );

    if (!productKey) {
      console.error(`Product with UUID ${itemId} not found.`);
      return false;
    }

    // Get the current stock
    const currentStock = allProducts[productKey].stock;

    // Check if there's enough stock to remove the requested quantity
    if (currentStock >= quantityToRemove) {
      // Update the stock in the database
      const updatedStock = currentStock - quantityToRemove;

      // Create the patch object
      const patchObject = {
        [`${productKey}/stock`]: updatedStock,
      };

      // Set options for the PATCH request
      const options = {
        method: "PATCH",
        body: JSON.stringify(patchObject),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      // Send the PATCH request
      await fetch(getDBURL, options);

      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error updating stock:", error);
    throw error;
  }
};

export { getFirebaseData, updateStock };
