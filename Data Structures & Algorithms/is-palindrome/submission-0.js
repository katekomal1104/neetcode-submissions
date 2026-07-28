class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s;
    const arr = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");
    let ptr1 = 0;
    let ptr2 = arr.length-1;
    while(ptr1<ptr2)
    {
        if(arr[ptr1]== arr[ptr2])
        {
        ptr1++;
        ptr2--;
        }
        else
        {
            return false;
        }
    }
    return true;
    }
}
