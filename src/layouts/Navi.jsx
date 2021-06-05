import React from "react";
import { Button, Dropdown, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed>
        <Container textAlign="center">
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <CartSummary>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button primary>Sign Up</Button>
              </Menu.Item>
            </Menu.Menu>
          </CartSummary>
        </Container>
      </Menu>
    </div>
  );
}
