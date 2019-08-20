const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'];


    const mutantsA = mutants.filter(function(mutants){
        return mutants === 'Iceman';
    });
    

    const mutantsB = mutants.filter(function(mutants){
        return mutants === 'Magneto';
    });
    

    const mutantsC = mutants.filter(function(mutants){
        return mutants === 'Gambit';
    });


        console.log(mutants);
    console.log(mutantsA);
    console.log(mutantsB);
    console.log(mutantsC);