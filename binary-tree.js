'use strict';

class BinaryTree {
	constructor() {
        this.root = null;
	}

	insert(data) {
        var root = this.root;
        //case when there's no root
        if(!root){
            this.root = new Node(data);
            return;
        }

        var currentNode = root;
        var newNode = new Node(data); 
        //if the value is less than the current node's
        while(currentNode){
            if(data < currentNode.data){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    break;
                }
                else{
                    currentNode = currentNode.left;
                }
            }
            //if the value is greater than the current node's
            else{
                if(!currentNode.right){
                    currentNode.right = newNode;
                    break;
                }
                else{
                    currentNode = currentNode.right;
                }
            }
        }
	}

	contains(data) {
        var found       = false;
        var current     = this.root

        //make sure there's a node to search
        while(!found && current){

            //if the value is less than the current node's, go left
            if (data < current.data){
                current = current.left;

            //if the value is greater than the current node's, go right
            } else if (data > current.data){
                current = current.right;

            //values are equal
            } else {
                found = true;
            }
        }

        // true if the node was found
        return found;
	}

	remove(data) {
        
	}
    traverse(process){
        function inOrder(node){
            if (node){

                //traverse the left subtree
                if (node.left !== null){
                    inOrder(node.left);
                }            

                //call the process method on this node
                process.call(this, node);

                //traverse the right subtree
                if (node.right !== null){
                    inOrder(node.right);
                }
            }
        }

        //start with the root
        inOrder(this._root);
    }

	size() {
        
	}

	isEmpty() {

	}
}
