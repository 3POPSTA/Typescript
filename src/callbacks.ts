// Functions can be passed as values and invoked through callback parameters.
const greet = (): void => {
  console.log("Hello");
};

function execute(callback: () => void): void {
  callback();
}

execute(greet);