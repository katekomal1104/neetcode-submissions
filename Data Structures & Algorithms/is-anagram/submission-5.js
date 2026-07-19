class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
    return false;
}
        let frequency = {};
        for(let ch of s)
        {
            if(!(ch in frequency))
            
            {
                frequency[ch] = 1;
            }
            else
            {
                frequency[ch]++;
            }
        }
        for(let ch of t)
        {
            if(frequency[ch] === undefined || frequency[ch] === 0)
            {
                return false;
            }
            frequency[ch]--;
        }
        return true;
    }
}
