db.employees.aggregate([
    {$match: {salary: {$gt: 300}}},
    {$project:{name: 1, age:1 , salary:1, _id: 0}},
    {$sort: {salary: -1}},
    

])

db.employees.aggregate([
    {$project:{name: 1, age: 1, salary: 1, _id: 0}},
    {$unwind: "$location"},

])


db,employees.aggregate([
    {$project: {name: 1, age: 1, salary: 1, _id: 0, bonus:{$multiply: ["$salary", 2]}}},
])

db.employees.aggregate([
    {$groudp: {_id: "$department", totalSalary: {$sum: "$salary"}, averageSalary: {$avg: "$salary"}}},
    
])

db.orders.insertOne({
    empId: ObjectId("685bb9a2f1df37981bbaa8b9"),
    orderValue: 2000,

})



