function getLongerText(p1,p2) {
    let str1 = p1
    let str2 = p2

    if (str1.length>str2.length) {
        return console.log(p1,str1.length)
    } else {
        return console.log(p2,str2.length)
    }
}

getLongerText("foram","pat");
getLongerText("forampatel","xyz");