class Student{
  constructor(name, grades=[]){
    this.name = name;
    this.grades = grades;
  }

  getAverage(){
    console.log(`${this.name}'s grades are ${this.grades}`);
    let sumGrades = 0;

    for (let i=0; i < this.grades.length; i++){
      sumGrades += this.grades[i];
    }

    let avgGrades = sumGrades / this.grades.length;
    let roundedGrades = Math.round(avgGrades * 10) / 10;
    console.log(`The sum of their grades are ${sumGrades}`);
    console.log(`The average of ${this.name}'s grades is ${roundedGrades}`);
  }

}

const Jacob = new Student("Jacob", [75, 56, 39]);
const Azul = new Student("Azul", [85, 31, 95]);

Jacob.getAverage();
Azul.getAverage();