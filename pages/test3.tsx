import React from 'react';  
    
function App() {  
    
 const students = [  
              {  
                'id': 1,   
                'name': 'Mary',   
                'email': 'mary@gmail.com' 
              },  
              {  
                'id': 2,   
                'name': 'Mary',   
                'email': 'mary@gmail.com' 
              },  
              {  
                'id': 3,   
                'name': 'John',   
                'email': 'john@gmail.com'  
              },  
          ];  
    
  return (  
    <div className="container">  
        <h1> Example of React Map Loop </h1>  
     
        <table className="table table-bordered">  
            <tr>  
                <th>ID</th>  
                <th>Name</th>  
                <th>Email</th>  
            </tr>  
    
            {students.map((student, index) => (  
              <tr data-index={index}>  
                <td>{student.id}</td>  
                <td>{student.name}</td>  
                <td>{student.email}</td>  
              </tr>  
            ))}  
    
        </table>  
    
    </div>  
  );  
}  
    
export default App;  