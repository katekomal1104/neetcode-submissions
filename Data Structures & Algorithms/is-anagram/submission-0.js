class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sort1 = s.split("").sort().join("");
        let sort2 = t.split("").sort().join("");
        if(sort1==sort2)
        {
            return true;
        }
        return false;
    }
}
