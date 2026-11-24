const nigu = {
    'name':'Manigger',
    'age':21,
    'optional':{
        'surname':'singh'
    }
};

console.log(nigu?.optional?.name);
console.log(nigu.optional.name);
console.log(nigu.joke); // this should give error but its ambiguous