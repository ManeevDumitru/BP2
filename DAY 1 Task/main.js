class Group {
  constructor() {
    this.students = [];
  }

  createArray() {
    const n = 3;
    for (let i = 0; i < n; i++) {
      this.students.push([]);
      for (let j = 0; j < n; j++) {
        this.students[i][j] = {};
        this.students[i][j].name = `${j + 1}-th student`;
        this.students[i][j].mark = `${Number(((Math.random() * 5) + 5).toFixed(2))}`;
        this.students[i][j].age = `${Number(Math.floor(Math.random() * 4) + 18)}`;

      }
    }
    console.log(this.students);
    return this.students;
  }

  calculateAverage() {
    const n = 3;
    let average = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        average += Number(this.students[i][j].mark);
        console.log(this.students[i][j].mark);
      }
    }
    console.log(average / (n * n));
  }

}

document.addEventListener('DOMContentLoaded', () => {
  let group = new Group();
  group.createArray();
  group.calculateAverage();
});