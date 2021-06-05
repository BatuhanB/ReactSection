import React from "react";
import { Button, Dropdown, Menu, Container } from "semantic-ui-react";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="Kategori1" />
        <Menu.Item name="Kategori2" />
        <Menu.Item name="Kategori3" />
      </Menu>
    </div>
  );
}
