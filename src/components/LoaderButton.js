 import React from 'react';
 import { Button, Spinner } from 'react-bootstrap'; 

 const LoaderButton = ({
    isLoading,
    className = "",
    disabled = false,
    ...props
  }) => {    
    return (
        <Button
            className={`${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            { props.children }
            
            { isLoading && 
                <Spinner 
                    size="sm"
                    animation="border" 
                    role="status" 
                    className="ml-2 align-middle"
                >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }
        </Button>
    )
}

export default LoaderButton;
