import { useEffect, useState } from "react";


const Bottole = () => {

const [bottole ,setBottole] = useState([])


useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => setBottole(data))
},[])


    return (
        <div>
            <h2>bottole here :{bottole.length}</h2>
            <img src={bottole.title} alt="" />
        </div>
    );
};

export default Bottole;