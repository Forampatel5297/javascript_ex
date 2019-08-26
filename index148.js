const superhero = {
    name: 'Batman',
    secretName: 'Bruce',
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strength: 70
};

const showsuperHero = function (superhero) {
const getProperties = Object.keys(superhero);
    getProperties.forEach(property => {
        console.log(`${property} - ${superhero[property]}`);
    })
}

showsuperHero(superhero);

console.log('Speed', superhero.speed);

let propertyName = 'speed';
superhero[propertyName] = 80;

console.log('Speed', superhero.speed);
