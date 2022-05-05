import React from "react";
import styled from "styled-components";
import Section from "./Section";


const Home = () => {
    return (
      <Container>
      <Section
        title="Model-S"
        description="Order Online for Tuchless Delivery"
        backgroundImg="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model-Y"
        description="Order Online for Tuchless Delivery"
        backgroundImg="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model-3"
        description="Order Online for Tuchless Delivery"
        backgroundImg="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model-X"
        description="Order Online for Tuchless Delivery"
        backgroundImg="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panel In America"
        description="Money-back guarentee"
        backgroundImg="solar-panel.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Cost Less Than a New Roof Plus Panels"
        backgroundImg="solar-roof.jpg"
        leftButtonText="Order now"
        rightButtonText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftButtonText="Shop now"
        rightButtonText=""
      />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  height: 100vh;
`;
