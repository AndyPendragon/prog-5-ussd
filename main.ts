import { type MenuItem, menu } from "./model/menu.ts";

function displayMainMenu(menu: MenuItem) {
  console.log(menu.label);
  if (menu.children) {
    for (const item of menu.children) {
      console.log(`  ${item.key}. ${item.label}`);
    }
  }
}
function displaySubMenu(menu: MenuItem, inputKey: string) {
  const found = menu.children?.find((item) => item.key === inputKey);
  if (!found) {
    console.log("\nOption invalide.");
    return;
  }

  console.log(`\n${found.label}`);
  if (found.children) {
    for (const child of found.children) {
      console.log(`  ${child.key}. ${child.label}`);
    }
  } else {
    console.log("  (Pas de sous-menu)");
  }
}

async function main() {
  displayMainMenu(menu);

  const buf = new Uint8Array(1024);
  await Deno.stdout.write(
    new TextEncoder().encode("\nChoisissez une option: "),
  );
  const n = <number>await Deno.stdin.read(buf);

  const input = new TextDecoder().decode(buf.subarray(0, n)).trim();
  displaySubMenu(menu, input);
}

main();
