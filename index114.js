function rev(parameter) {
    let str = parameter
    i=0
    while (i<str.length) {
    str.charAt(str.length-1-i)
    console.log(str.charAt(str.length-1-i))
    i=i+1
    }
}

rev("foram");