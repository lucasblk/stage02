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

/* CRIE UMA FUNCAO QUE CALCULA O IMC DESSES PACIENTES E MOSTRA O IMC DE CADA PACIENTE EM UM ALERT */

function CalcIMC(weight, height) {
    return (weight / (height/100)**2).toFixed(2)
}

function message(patient) {
    return `Paciente ${patient.name} tem IMC: ${CalcIMC(patient.weight, patient.height)}`
}

for(let patient of patients) {
    let imcMsg = message(patient)
    alert(imcMsg)
}