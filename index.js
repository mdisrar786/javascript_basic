function one(){
    let a = 10;
    function two(){
        let b = 20
        function three(){
            let c = 50;
            console.log(a)
            console.log(b)
        }
        three()
    }
    two()
}
one()