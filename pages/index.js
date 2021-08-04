import { ResourcePicker } from "@shopify/app-bridge-react";
import { Heading, Page } from "@shopify/polaris";
import React, { useState } from 'react';

function index() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Page
        title="Product Selector"
        primaryAction={{
          content: "Select Product",
          onAction: () => setIsOpen(true)
        }}
      >
        <ResourcePicker
          resourceType="Product"
          open={isOpen}
          onCancel={() => setIsOpen(false)}
          onSelection={(payload) => {
            setIsOpen(false);
            console.log(payload);
          } }
        />
      </Page>
    </div>
  )
}

export default index;
