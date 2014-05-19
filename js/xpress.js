Xps = {

PRIMENUMBERS: {SET:[2, 3, 5, 7, 11, 13, 17, 19, 23, 29], PROBABILITIES:[55,89,110,123,131,136,139,141,142,143]},
NATURE: {SUM:'SUM', MULT:'MULT'},
OPERATION: {SUM:'+', SUB:'-', MULT:'*', DIV:'/'},
RE: {NUMBERS: new RegExp(/^\d+$/)},
ERROR: {
	"01": 'The level may be parseable as an integer. Unable to create operation structure'
},

//Xps Methods
makeExp: function (lvl) {
	
},

makeOps: function (lvl) {
	/**
	Creates the operation structure
	that can only rotate ccw:
		None of the operation nodes can have 
		a same nature operation node as a left child
	The level stands now for the number 
	of operations that will be created.
	**/
	if (!Xps.RE.NUMBERS.test(lvl)) {
		console.error(Xps.ERROR["01"]);
	}
	var root = null;
	var last = null;
	for (var i = 0; i < lvl; i++) {
		var rdm = Math.ceil(Math.random()*4);
		var operation = '';
		switch(rdm) {
			case 1:
				operation = Xps.OPERATION.SUM;
				console.log('Picked a ' + Xps.OPERATION.SUM);
				break;
			case 2:
				operation = Xps.OPERATION.SUB;
				console.log('Picked a ' + Xps.OPERATION.SUB);
				break;
			case 3:
				operation = Xps.OPERATION.MULT;
				console.log('Picked a ' + Xps.OPERATION.MULT);
				break;
			case 4:
				operation = Xps.OPERATION.DIV;
				console.log('Picked a ' + Xps.OPERATION.DIV);
				break;
		}
		var curr = new Xps.Node(operation);
		if (root == null) root = curr;
		else last.right = curr;
		last = curr;
	}
	return root;
},

fillOps: function (lvl) {
	
},

stringfy: function (node) {
	if (!(node instanceof Xps.Node)) return null;
	if (!node.operation) return node.value;
	return (node.nature == Xps.NATURE.MULT && node.left.nature == Xps.NATURE.SUM ? "(" : "") + Xps.stringfy(node.left) + (node.nature == Xps.NATURE.MULT && node.left.nature == Xps.NATURE.SUM ? ")" : "") + node.value + (node.nature == Xps.NATURE.MULT && node.right.nature == Xps.NATURE.SUM ? "(" : "") + Xps.stringfy(node.right) + (node.nature == Xps.NATURE.MULT && node.right.nature == Xps.NATURE.SUM ? ")" : "");
},

getPrime: function () {
	
},

//Xps Objects
Node: function Node(value){
	value = ''+value;
	if (this instanceof Node) {
		if (value == undefined) {
			console.log('undefined');			
		} else if (value == null) {
			console.log('null');
		} else if (value.length == 1 && (Xps.OPERATION.SUM+Xps.OPERATION.SUB).indexOf(value) != -1) {
			//Sum and subtraction
			console.log('sum');
			this.value = value;
			this.operation = true;
			this.nature = Xps.NATURE.SUM;
			if (value == Xps.OPERATION.SUM) this.inverse = false;
			else this.inverse = true;
		} else if (value.length == 1 && (Xps.OPERATION.MULT+Xps.OPERATION.DIV).indexOf(value) != -1) {
			//Multiplication and division
			console.log('mul');
			this.value = value;
			this.operation = true;
			this.nature = Xps.NATURE.MULT;
			if (value == Xps.OPERATION.SUM) this.inverse = false;
			else this.inverse = true;
		} else if (Xps.RE.NUMBERS.test(value)) {
			console.log('integer');
			this.value = parseInt(value);
			this.operation = false;
		} else {
			console.log('value must be +,-,*,/ or an integer');
			return null;
		}
		this.left = null;
		this.right = null;
		this.rotate = function() {
			//Rotate the tree ccw
			/**
			Is this node an operation?
			Is the right child an operation node with the same nature?
			**/
			if (
				this.operation && 
				this.right != null && 
				this.right.operation &&
				this.nature == this.right.nature
			) {
				//Rotate it
				var pivot = this.right;
				this.right = pivot.left;
				pivot.left = this;
				return pivot;
			} else {
				console.error('Can\'t rotate node');
				return null;
			}
		};
		//set methods
		this.setLeft = function(node) {
			if (!this.operation) {
				console.error('Can\'t set left child for an integer, operations only.');
			} else {
				if(node instanceof Node) {
					this.left = node;
				} else {
					console.error('Can\'t set a non-Node as left child');
				}
			}
		}
		this.setRight = function(node) {
			if (!this.operation) {
				console.error('Can\'t set right child for an integer, operations only.');
			} else {
				if(node instanceof Node) {
					this.right = node;
				} else {
					console.error('Can\'t set a non-Node as right child');
				}
			}
		}
		//is/get methods
		this.isOperation = function() {
			return this.operation
		};
		this.isSum = function() {
			if (!this.operation) return null;
			return this.nature == 'SUM' ? true : false;
		};
	} else return new Node(value);
}

};
