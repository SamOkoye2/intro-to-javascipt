function Blog(){
    obj = {job:"Teacher", subject:"Computer", Period:"second"}
    return obj.Period

}
console.log(Blog())

function Teacher(){
    for(let Key in obj){
        console.log(Key,obj[Key])
    }
}
Teacher()

function great(){
    let a = {Boy:"M", Girl:"F", Age:"int"}
    let {Boy, ...rest} = a
    console.log(rest)
    console.log(A.rest)
}

function Duty(){
    let obj = {school:"place", church:"building", Home:"house", Boy:"ma", Clothe:"shirt"}
    let {school, ...rent} = obj
    console.log(rent)
}