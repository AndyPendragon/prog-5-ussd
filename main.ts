import { menu, type MenuItem } from "./model/menu.ts";

function displayMainMenu(menu: MenuItem) {
  console.log(menu.label);
  if (menu.children) {
    for (const item of menu.children) {
      console.log(`  ${item.key}. ${item.label}`);
    }
  }
}

displayMainMenu(menu);
