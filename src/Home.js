import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';


function Home(){
    const [clothes, setClothes] = useState(data);

 
  return (
    <div >
      <div className="cont">
        <h2 className='back'>Free Standard Shipping</h2>
      </div>
        <Buttons setClothes = {setClothes}/>
      <Clothes anyClothes = {clothes}/>
    </div>
  );



}
export default Home;