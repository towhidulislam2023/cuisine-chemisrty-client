/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
    return (
        <>
            <div className="App">
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div ref={ref}>
                   <div>
                    
                   </div>
                </div>
            </div>
        </>

    );
};

export default Blog;