export const cartReducer = (state, action) => {
  switch (action.type) {
    // When the action type is "ADD_ITEM", the reducer will add an item to the cart.
    case "ADD_ITEM":
      // Check if the item already exists in the cart by finding its index in the cart state.
      // If the item doesn't exist, the index will be -1.
      const existingItemIndex = state.findIndex(
        (cartItem) => cartItem.uuid === action.item.uuid
      );
      // If the item exists in the cart, update the quantity of the item.
      if (existingItemIndex !== -1) {
        // Create a shallow copy of the state to prevent direct mutations.
        const newState = [...state];
        // Increment the quantity of the item in the cart.
        newState[existingItemIndex].quantity += 1;
        // Return the updated state.
        return newState;
      } else {
        // If the item is not in the cart, add it to the cart with a quantity of 1.
        return [...state, { ...action.item, quantity: 1 }];
      }

    // When the action type is "REMOVE_ITEM", the reducer will remove an item from the cart.
    case "REMOVE_ITEM":
      // Filter the cart state to exclude the item with the specified UUID.
      return state.filter((item) => item.uuid !== action.uuid);

    // When the action type is "UPDATE_ITEM_QUANTITY", the reducer will update the quantity of an item in the cart.
    case "UPDATE_ITEM_QUANTITY":
      // Map over the cart state and update the item's quantity if it matches the specified UUID.
      return state.map((item) =>
        item.uuid === action.uuid
          ? { ...item, quantity: action.newQuantity }
          : item
      );

    // When the action type is "CLEAR_CART", the reducer will clear the entire cart.
    case "CLEAR_CART":
      // Return an empty array to signify an empty cart.
      return [];

    // If the action type doesn't match any of the predefined types, return the unmodified state.
    default:
      return state;
  }
};
