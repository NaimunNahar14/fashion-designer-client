import React from 'react';
import Title from '../../Components/Title';

const PopularClass = () => {

    return (
       <> 
       <div className='mb-4'>
       <Title heading={"Popular Classes Section"}></Title>
       <div className='grid grid-cols-3 gap-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/YjHhTBr/pexels-photo-7763060.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">ClassName: Fashion Orientation</h2>
                    <p>InstructorName: Zakir Khan</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/Bgdm71P/240-F-192862416-au7g-PTsrnj-Td-L7rg-Jnrq0jrjh-HTK9-Nw-Z.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">ClassName: Color and Theory for Design</h2>
                    <p>InstructorName: Humayra Zaman</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/cbpx7yz/240-F-189978816-5b-IYq-XD4tm-XZKn96-JUv-H7-Vmrhc5-S76-K2.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">ClassName: Pattern Design</h2>
                    <p>InstructorName: Amir Rahman</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/s65wy92/240-F-189979040-6kj9-S2w4-DXpis7-DS3-O9-Lt02j-Rs-MFFWf-C.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">ClassName: Fashion Photography</h2>
                    <p>InstructorName:Jamil Ahsan</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/zmZp8d6/240-F-190105720-D4-Tr-M79-Gjf9-Cf-VP6vx9-W40n-K98-Mn23u5.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">ClassName: Material Study and design</h2>
                    <p>InstructorName: Farhana Akter</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/jkn27yn/240-F-268187447-m81pg21ynculz2gb-Cs-YQ7l-Qqb-DPdnkm-P.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">ClassName: Computer Application for design</h2>
                    <p>InstructorName: Akib Zaman</p>

                </div>
            </div>




        </div>
       </div>
       
       </>
    );
};

export default PopularClass;