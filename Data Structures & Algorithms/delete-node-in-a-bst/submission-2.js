class Solution {

    deleteNode(root, key) {

        // -------------------------
        // Find the node
        // -------------------------
        let parent = null;
        let current = root;

        while (current && current.val !== key) {

            parent = current;

            if (key < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        // Node not found
        if (current === null) {
            return root;
        }

        // ==================================================
        // CASE 1 : Node has NO children (Leaf)
        // ==================================================
        if (current.left === null && current.right === null) {

            // Deleting the only node in the tree
            if (parent === null) {
                return null;
            }

            if (parent.left === current) {
                parent.left = null;
            } else {
                parent.right = null;
            }

            return root;
        }

        // ==================================================
        // CASE 2 : Node has ONLY LEFT child
        // ==================================================
        if (current.left !== null && current.right === null) {

            // Deleting the root
            if (parent === null) {
                return current.left;
            }

            if (parent.left === current) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }

            return root;
        }

        // ==================================================
        // CASE 3 : Node has ONLY RIGHT child
        // ==================================================
        if (current.left === null && current.right !== null) {

            // Deleting the root
            if (parent === null) {
                return current.right;
            }

            if (parent.left === current) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }

            return root;
        }

        // ==================================================
        // CASE 4 : Node has TWO children
        // ==================================================

        let rightNodeParent = current;
        let rightNode = current.right;

        // Find the smallest node in the right subtree
        while (rightNode.left !== null) {
            rightNodeParent = rightNode;
            rightNode = rightNode.left;
        }

        // Copy the smallest value
        current.val = rightNode.val;

        // Remove the duplicate node
        if (rightNodeParent.left === rightNode) {
            rightNodeParent.left = rightNode.right;
        } else {
            rightNodeParent.right = rightNode.right;
        }

        return root;
    }
}