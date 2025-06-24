const fetchData = async () => {
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        data.map((value) => {
            console.log(`ID: ${value.id}, Title: ${value.title}, Completed: ${value.completed}`);
        });
    }catch(error){
        console.error('Error fetching data:', error);
    }
}

fetchData();