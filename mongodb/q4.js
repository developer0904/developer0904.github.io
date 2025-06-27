db.countryEJS.insertOne({
    empId: ObjectId("685bb9a2f1df37981bbaa8b9"),
    location: [ 'FL', 'OH' ],
})

db.countryEJS.insertMany([

    {
        empId: ObjectId('685bb9b1f1df37981bbaa8ba'),
        location:  [ 'FL', 'OH' ],
    },
    {
        empId:  ObjectId('685d14017ff88d79d7baa8b9'),
        location:  [ 'FL', 'OH' ],
    },
    {
        empId: ObjectId('685d14017ff88d79d7baa8ba'),
        location:  [ 'FL', 'TX' ],
    },
    {
        empId: ObjectId('685d14017ff88d79d7baa8bb'),
        location:  [ 'AZ', 'OH' ],
    },
   
])


