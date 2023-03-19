export default function Shimmer(){
    return (
        <>
                <div className="flex flex-wrap justify-between m-10" data-testid = "shimmer">
        {    Array(15).fill("").map((item,index)=> {
      return  <img className="bg-blue-100 m-5 w-64 h-72" key={index}/>})}

        </div>
        </>
    )
}