function Todoitem(props) {
    const activityarr = props.activityarr;
    const setActivityarr = props.setActivityarr;
    function handleDelete(Deleteid) {

        var temparr = activityarr.filter(function(item){
            if(item.id === Deleteid)
            {
                return false;
            } else {
                return true;
            }
    })
    setActivityarr(temparr);
}

    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.item.activity}</p>
        <button className="text-red-600 hover:cursor-pointer" onClick={()=> {handleDelete(props.id)}}>Delete</button>
        </div>

    )
}
export default Todoitem;