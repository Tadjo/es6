{
    const glob = /\d/g;
    const str = '123a4b';
    let digit;
    console.group('global');
    while ((digit = glob.exec(str))) {
        console.log(digit[0]); // 1, 2, 3, 4
    }
    console.groupEnd();
}
{
    const sticky = /\d/gy;
    const str = '123a4b';
    let digit;
    console.group('sticky');
    while ((digit = sticky.exec(str))) {
        console.log(digit[0]); // 1, 2, 3
        console.log('Last Index: ', sticky.lastIndex);
    }
    console.log('Last Index: ', sticky.lastIndex);
    sticky.lastIndex = 4;
    console.log(sticky.exec(str)[0]);
    console.groupEnd();
}
