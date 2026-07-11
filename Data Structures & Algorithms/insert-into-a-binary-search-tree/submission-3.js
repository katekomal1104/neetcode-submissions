// class TreeNode {
//      constructor(val = 0, left = null, right = null) {
//           this.val = val;
//           this.left = left;
//           this.right = right;
//      }
//   }
 
class Solution {
    insertIntoBST(root, val) {
        let current = root;
        // let obj = new TreeNode
        let newNode = new TreeNode(val);
            if(root == null)
            {
                return newNode;
            }
            while(true)
            {
                if(val<current.val)
                {
                    if(current.left == null)
                    {
                        current.left = newNode;
                        break;
                    }
                    current =current.left;
                }
                if(val>current.val)
                {
                    if(current.right == null)
                    {
                        current.right = newNode;
                        break;
                    }
                    current = current.right;
                }
            }
        
        return root;
    }
}
