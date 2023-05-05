export const cartReducer = (state, action) => {
  switch (action.type) {
    // Handle adding an item to the cart
    case "ADD_ITEM":
      // Find the index of the existing item in the cart, if any
      const existingItemIndex = state.findIndex(
        (cartItem) => cartItem.uuid === action.item.uuid
      );
      // If the item exists in the cart, update its quantity
      if (existingItemIndex !== -1) {
        // Create a shallow copy of the state to prevent direct mutations
        const newState = [...state];
        // Increment the item's quantity in the cart
        newState[existingItemIndex].quantity += 1;
        // Return the updated state
        return newState;
      } else {
        // If the item is not in the cart, add it with an initial quantity of 1
        return [...state, { ...action.item, quantity: 1 }];
      }

    // Handle removing an item from the cart
    case "REMOVE_ITEM":
      // Filter out the item with the specified UUID, effectively removing it from the cart
      return state.filter((item) => item.uuid !== action.uuid);

    // Handle updating the quantity of an item in the cart
    case "UPDATE_ITEM_QUANTITY":
      // Map over the cart items, updating the quantity of the specified item
      return state.map((item) =>
        item.uuid === action.uuid
          ? { ...item, quantity: action.newQuantity }
          : item
      );

    // Handle clearing the entire cart
    case "CLEAR_CART":
      // Return an empty array, representing an empty cart
      return [];

    // Handle unrecognized action types by returning the unmodified state
    default:
      return state;
  }
};
