// export const getStaticProps=async()=>{
//   const response =await fetch('https://jsonplaceholder.typicode.com/users');
//   const data=await response.json();

//   return{
//     props:{Users: data}
//   }
// }
const About = ({Users}) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1>This is About page</h1>
      </div>

      {/* {Users.map((data)=>{
        <h1>{data.name}</h1>
      })} */}
    </div>
  );
};

export default About;
