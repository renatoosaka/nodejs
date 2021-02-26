process.stdin.on("data", (data) => {
  const name = data.toString().trim().toUpperCase();

  console.log(data);
  
  if (name !== "") {
    process.stdout.write(`Hello ${name}`);
  } else {
    process.stderr.write("Input is empty");
  }
})