// Write TypeScript code!

let title: string = 'MyApp';
let run: string = '0';
let stopped: string = '0';

document.getElementById('app.title').innerHTML = title;
document.getElementById('app.run').innerHTML = run;
document.getElementById('app.stop').innerHTML = stopped;

let counterRun: number = 0;
let counterStop: number = 0;

let intervalId = setInterval(() => {
  counterRun++;

  document.getElementById('app.run').innerHTML = counterRun.toString();

  if (counterRun == 5) {
    counterRun--;
    document.getElementById('app.run').innerHTML = '0';

    counterStop++;
    document.getElementById('app.stop').innerHTML = counterStop.toString();

    if (counterStop == 3) {
      counterStop--;
      document.getElementById('app.stop').innerHTML = '0';
    }
}
}, 1000);
