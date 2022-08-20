// Write TypeScript code!

let title: string = 'MyApp';
document.getElementById('app.title').innerHTML = title;

let counter: number = 0;

while (counter <= 20) {
  let intervalId = setInterval(() => {
    counter++;
    document.getElementById('app.run').innerHTML = counter.toString();
  }, 1000);
}
