import "./style.css"
const Popup=(props)=>{
    return (
        <>
        <div className="pop-up" >
        <div >
            <h3>{props.product.category}</h3>
            <button>Close</button>
        </div>
        <div>
            <img src={props.product.image} alt='' />
            <h4>{props.product.description}</h4>
        </div>
        </div>
        </>
    )
}
export default Popup