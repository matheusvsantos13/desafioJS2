const students = [
  {
    name: "Luiz",
    grade1: 5,
    grade2: 6,
  },
  {
    name: "Alexandra",
    grade1: 10,
    grade2: 7,
  },
  {
    name: "Carlos",
    grade1: 8,
    grade2: 3,
  },
  {
    name: "Gabriel",
    grade1: 9,
    grade2: 7,
  }
]

function studentGrade(grade1, grade2) {
  let finalGrade = ((grade1 + grade2) / 2).toFixed(2)
  return finalGrade
}

for(let student of students){
  individualGrade = studentGrade(student.grade1, student.grade2)
  let approvedOrNot = individualGrade < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

  alert(`A média de ${student.name} é ${individualGrade}.
${approvedOrNot}`)
}