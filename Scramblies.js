//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
    const buf = new Uint8Array(256);
    var i = 0;
    if (str1.length >= str2.length) {
        if (str1 === str2) { return true }
        while(i < str1.length) {
            buf[str1.charCodeAt(i++)] ++;
        }
        i = 0;
        while(i < str2.length) {
            const idx = str2.charCodeAt(i++);
            if(buf[idx] === 0) { return false }
            buf[idx] --;
        }
        return true;
    }
    return false;
}
