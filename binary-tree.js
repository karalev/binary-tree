'use strict';

class BinaryTree {
	constructor() {
        this._root = null;
	}

	insert(data) {
        var root = this.root;

        if(!root){
            this.root = new Node(data);
            return;
        }

        var currentNode = root;
        var newNode = new Node(data); 

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

	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
