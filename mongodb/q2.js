db.employees.find(); //will return all documents in the employees collection
db.employees.find({}); //will also return all documents in the employees collection 
db.employees.find({name: "John"}); //will return documents where the name field is "John"
db.employees.find({name: "John", age: 30}); //will return documents where the name field is "John" and age field is 30
db.employees.find({name: "John", age: {$gt: 30}}); //will return documents where the name field is "John" and age field is greater than 30
db.employees.find({name: "John", age: {$lt: 30}}); //will return documents where the name field is "John" and age field is less than 30
db.employees.find().skip(1); //will skip the first document and return the rest
db.employees.find().limit(1); //will return the first document
db.employees.find().skip(1).limit(1); //will skip the first document and return the second document
db.employees.find().sort({age: 1}); //will return documents sorted by age in ascending order
db.employees.find().sort({age: -1}); //will return documents sorted by age in descending order
db.employees.find().sort({age: 1, name: -1}); //will return documents sorted by age in ascending order and name in descending order
db.employees.find({name: "John"}).sort({age: 1}); //will return documents where the name field is "John" and sorted by age in ascending order
db.employees.find({name: "John"}).sort({age: 1}).skip(1); //will return documents where the name field is "John", sorted by age in ascending order, and skip the first document
db.employees.find({name: "John"}).sort({age: 1}).skip(1).limit(1); //will return documents where the name field is "John", 
// sorted by age in ascending order, skip the first document, and return the second document
db.employees.find({name: "John"}).sort({age: 1}).skip(1).limit(1).pretty(); //will return documents where the name field is "John", 
// sorted by age in ascending order, skip the first document, return the second document,
// and format the output in a more readable way
db.employees.find({name: "John"}).sort({age: 1}).skip(1).limit(1).pretty().count(); //will return the count of documents where the
// name field is "John", sorted by age in ascending order, skip the first document,
// return the second document, and format the output in a more readable way
db.employees.find({name: "John"}).sort({age: 1}).skip(1).limit(1).pretty().count(true); //will return the count of documents where
// the name field is "John", sorted by age in ascending order, skip the first document
// return the second document, format the output in a more readable way, and include the count
// of documents that match the query
db.employees.find({name: "John"}).sort({age: 1}).skip(1).limit(1).pretty().count(true).explain(); //will return the execution
// plan for the query where the name field is "John", sorted by age in ascending order
// skip the first document, return the second document, format the output in a more readable way
// include the count of documents that match the query, and explain how the query will be executed
db.employees.find({department:"IT"},{_id:0, name:1, age:1}); //will return documents where the department field is "IT"
// and only include the name and age fields in the output, excluding the _id field
db.employees.find({department:"IT"},{_id:0, name:1, age:1}).sort({age: 1}); //will return documents where the department field is "IT"
// only include the name and age fields in the output, excluding the _id field,

db.employees.find({_id:false,name:true, age:true}).sort({salary: -1}).limit(1); //will return documents where the _id field is false,

