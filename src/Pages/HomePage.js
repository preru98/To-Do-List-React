import React, { useEffect, useState } from 'react';
import Lists from '../Components/List';

function HomePage() {

    const [lists, setLists] = useState(null);

    useEffect(() => {
        const url = "http://localhost:3003/list/";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setLists(json);
            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };

        fetchData();

    }, []);

  return (
    <div className="HomePage">
      <Lists allLists = {lists}/>
    </div>
  );
}

export default HomePage;
