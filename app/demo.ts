async function main() {
  // @ts-ignore
  const demo = await import("virtual:server-entry");
  console.log(demo);
}

main();
