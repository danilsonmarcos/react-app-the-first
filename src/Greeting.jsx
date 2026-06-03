//function to greet people when entering on the site
function Greeting (){
    return <h1>Hello, and welcome to our application</h1>; 
}

//after creating the fucntional component we have to export it, to allow the main file to import it
//at this time, the export don't have to follow all the function-requeriments. We just have to pass the name of the function
export default Greeting; 
