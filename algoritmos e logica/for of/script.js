let patients = [
    {
        name: 'Lucas',
        age: 29,
        weight: 86,
        height: 183
    },
    {
        name: 'Naiara',
        age: 26,
        weight: 60,
        height: 165
    },
    {
        name: 'Ana',
        age: 54,
        weight: 58,
        height: 160
    }
]

let pacientsNames = []
let pacientsAge = []
let pacientsWeight = []

for(let patient of patients) {
    pacientsNames.push(patient.name)
    pacientsAge.push(patient.age)
    pacientsWeight.push(patient.weight)
}

alert(`Paciente: ${pacientsNames},
    idade: ${pacientsAge} anos,
    peso: ${pacientsWeight} Kg`)