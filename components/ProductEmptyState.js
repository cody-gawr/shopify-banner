import React from 'react';
import { EmptyState } from '@shopify/polaris'

function ProductEmptyState({ setIsOpen }) {
  return (
    <EmptyState
      heading="Manage the products you want to display"
      action={{
        content: "Select Products",
        onAction: () => setIsOpen(true)
      }}
    >
      <p>Select the products you want to use on your banner</p>
    </EmptyState>
  );
}

export default ProductEmptyState;
