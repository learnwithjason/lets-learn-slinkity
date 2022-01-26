import React from 'react';

export default function AddToCart() {
  const [added, setAdded] = React.useState(false);

  function updateAdded() {
    setAdded(true);
  }

  return (
    <button onClick={updateAdded}>
      {added ? 'In Your Cart' : 'Add To Cart'}
    </button>
  );
}
