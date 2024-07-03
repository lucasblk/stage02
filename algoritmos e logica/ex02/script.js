const students = [
    {
        name: "Lucas",
        nota1: 7.5,
        nota2: 10,
        
    },
    {
        name: "Naiara",
        nota1: 9,
        nota2: 4.8,
        
    },
    {
        name: "Pedro",
        nota1: 2.9,
        nota2: 8,
        
    },
    {
        name: "Maria",
        nota1: 6.6,
        nota2: 5.5,
        
    }
]
function average(student) {
    media = (student.nota1 + student.nota2)/2
    return media
}


for(let student of students) {
    average(student)
    if(media >= 6) {
        alert(`Parabens, ${student.name}, voce passou de ano com a media = ${media}`)
    } else {
        alert(`Que pena, ${student.name}, voce nao passou de ano, sua media foi = ${media}`)
    }
    
}



