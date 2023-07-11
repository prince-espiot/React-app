

function getName(){
    const name = 'Prince_get';
    if (name)
        return name;
    else 
        return "World";
}
//PascalCasing
function Message(){
    const name = 'Prince';
    return <h1>Hello {getName()}</h1>;
}


export default Message;