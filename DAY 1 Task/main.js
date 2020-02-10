class Group {
  constructor() {
    this.students = [];
  }

  createArray(n, m) {
    for (let i = 0; i < n; i++) {
      this.students.push([]);
      for (let j = 0; j < m; j++) {
        this.students[i][j] = {
          name: `${j + 1}-th student`,
          mark: `${Number(((Math.random() * 5) + 5).toFixed(2))}`,
          age: `${Number(Math.floor(Math.random() * 4) + 18)}`
        };
      }
    }
    console.log(this.students);
    return this.students;
  }

  calculateAverage(n, m) {
    let averageArray = [];
    let average;
    for (let i = 0; i < n; i++) {
      average = 0;
      for (let j = 0; j < m; j++) {
        average += Number(this.students[i][j].mark);
        console.log(this.students[i][j].mark);
      }
      averageArray.push(Number((average / m).toFixed(2)));
    }
    console.log(averageArray);
  }

}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startBut').addEventListener('click', () => {
    let group = new Group();
    group.createArray(document.getElementById('n').value, document.getElementById('m').value);
    group.calculateAverage(document.getElementById('n').value, document.getElementById('m').value);
  });
});