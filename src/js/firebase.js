const getDBURL =
  "https://slutprojectwebshop-default-rtdb.europe-west1.firebasedatabase.app/alpha.json";

async function getFirebase() {
  const response = fetch(getDBURL);
  const dbData = (await response).json();
  return dbData;
}

export { getFirebase };
