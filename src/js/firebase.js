const getDBURL =
  "https://slutprojectwebshop-default-rtdb.europe-west1.firebasedatabase.app/alpha.json";

async function getFirebase() {
  try {
    const response = await fetch(getDBURL);
    const dbData = await response.json();
    return dbData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export { getFirebase };
