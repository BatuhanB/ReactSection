import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Button, Dropdown, Menu, Container, Grid } from "semantic-ui-react";
import Navi from "./Navi";

export default function Dashboard() {
  return (
    <div>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
