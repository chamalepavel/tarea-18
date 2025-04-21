// Creación de variable "Paso" para indicar el paso actual en consola
let paso = 0;
const separador = () => {
    paso++;
    console.log(' ');
    console.log('********************************************');
    console.log(`Paso ${paso}`);
    console.log('--------------------------------------------');
};

// Código inicial
let spaceship = {  
    crew: {  
        captain: {  
            name: 'Lily',  
            degree: 'Computer Engineering',  
            cheerTeam() { console.log('You got this!') }  
        },  
        'chief officer': {  
            name: 'Dan',  
            degree: 'Aerospace Engineering',  
            agree() { console.log('I agree, captain!') }  
        },  
        medic: {  
            name: 'Clementine',  
            degree: 'Physics',  
            announce() { console.log('Jets on!') }  
        },  
        translator: {  
            name: 'Shauna',  
            degree: 'Conservation Science',  
            powerFuel() { console.log('The tank is full!') }  
        }  
    }  
};

// Paso 1
separador();

for (const rol in spaceship.crew) {
    console.log(`'${rol}: ${spaceship.crew[rol].name} '`);
}

// Paso 2
separador();

for (const rol in spaceship.crew) {
    console.log(`'${spaceship.crew[rol].name}: ${spaceship.crew[rol].degree} '`);
}
