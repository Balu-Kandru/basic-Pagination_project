const Pagenation =({posts , totalposts,pagenate })=>{
    const pageNumber=[]
    for(let i=1;i<=Math.ceil(totalposts / posts);i++){
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className="page">
                {
                    pageNumber.map(num=>(
                        <li key={num}>
                            <a onClick={()=>{pagenate(num)}} href="!#" >{num}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default Pagenation