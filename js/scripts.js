$(document).ready(function(){

  var names = ['Mindy', 'Chelsea', 'Meg', 'Gagan', 'Shubham', 'Will', 'Erik', 'Mike', 'Sumbul Ahmad', 'Françoise', 'Adeeti', 'Kevin', 'Julz', 'Shandra', 'Yah', 'Beth', 'Susan', 'Carolyn', 'Cindy', 'John', 'Colleen', 'Navpreet', 'Raja', 'Fiona', 'Heidi', 'Johny', 'Laura', 'Julie', 'Shruti', 'Yael', 'Josh' , 'Jenny', 'Mary-Ann', 'Vera', 'Armando', 'Sanjana', 'Nadine', 'Shannon', 'Arem', 'Brody', 'Jiabao', 'Fletcher', 'Kristina', 'Robert', 'Baris', 'Bhumika', 'Shawkat', 'Barry', 'Beau', 'Arpit', 'Garima', 'Prashant', 'Abhishek', 'Alaina', 'Leon', 'Cielomae', 'Jon', 'Michael', 'Brad', 'Gordon Gerard', 'Kristen', 'Miranda Joi', 'David', 'Adam', 'Puja', 'Jill', 'Hanns Wolfram', 'Chris', 'Lindsay'];

  var surnames = ['Borovsky', 'Burnette', 'Frost', 'Gupta', 'Kedia', 'Thimbleby', 'Neuenschwander', 'Abbott', 'Desai', 'Marble', 'Ullal', 'Lynch', 'Arney', 'Rica', 'Cason', 'Dakin', 'Prescott', 'Wolfman-Estrada', 'Lin', 'Ternus', 'Novielli', 'Kaloty', 'Bose', 'O’Leary', 'Delgado', 'Srouji', 'Metz', 'Broms', 'Haldea', 'Garten', 'Shaffer', 'Chen', 'Ionascu', 'Carr', 'Gonzalez', 'Ranka', 'De Coteau', 'Sinunu', 'Duplessis', 'Huval', 'Li', 'Rothkopf', 'Raspe', 'Sherwood', 'Cetinok', 'Dadbhawala', 'Kabbara', 'Munsterteiger', 'Trudel', 'Akkinepalli', 'Joshi', 'Gupta', 'Singh', 'Schulner', 'Wei', 'Sabas', 'McCormack', 'Schwekutsch', 'Freitag', 'McLean', 'Haithcox', 'Sequoia', 'Smoley', 'Chaarawi', 'Das', 'Sample', 'Tappeiner', 'Bauerlein', 'Schweigler'];

$('#generate').on('click', function(){
  
  var name = names[Math.floor(Math.random()*names.length)];
  var surname = surnames[Math.floor(Math.random()*surnames.length)];

  $('#name').text(name+" "+surname);
})

})
