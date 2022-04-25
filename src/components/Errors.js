import React from 'react' 


function Errors({errors}) {
    
  return (
    <div className="alert alert-danger alert-dismissible fade show mt-2" role="alert">
        <strong>{errors}</strong> 
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
  )
}

export default Errors