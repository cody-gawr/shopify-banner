import { ResourcePicker } from "@shopify/app-bridge-react";
import { EmptyState, Page } from "@shopify/polaris";
import React, { useState } from 'react';
import ProductList from "../components/ProductList";

function index() {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([]);

  function handleProductionSelection(payload) {
    setIsOpen(false);
    setProducts(payload.selection);
  }

  return (
    <>
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductionSelection}
      />
      {products.length > 0 ? (
        <Page
          title="Product Selector"
          primaryAction={{
            content: "Select Product",
            onAction: () => setIsOpen(true)
          }}
        >
          <ProductList products={products} />
        </Page>
      ) : (
        <EmptyState
          heading="Manage the products you want to display"
          action={{
            content: "Select Products",
            onAction: () => setIsOpen(true)
          }}
        >
          <p>Select the products you want to use on your banner</p>
        </EmptyState>
      )}
    </>
  )
}

export default index;
