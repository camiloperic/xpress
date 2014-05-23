Xps = {

EXPRESSIONS: [],

PRIMENUMBERS: {
   SET:[2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
   PROBABILITIES:[55,89,110,123,131,136,139,141,142,143]
},
NATURE: {SUM:'SUM', MULT:'MULT'},
OPERATION: {SUM:'+', SUB:'-', MULT:'*', DIV:'/'},
RE: {NUMBERS: new RegExp(/^\d+$/)},
OPCLASSES: {'+':'sumSymbol', '-':'subSymbol', '*':'multSymbol'},
ERROR: {
   "01": 'The level may be parseable as an integer. Unable to create operation structure.',
   "02": 'Root is null, impossible to fill tree with integers.'
},

CONTEXT: {
   tree: null,
   solutionTrees: [],
   opNodes: []
},

//Xps Methods
startDB: function() {
	var expression = {
		tree: null,
		solutionTrees: [],
		opNodes: []
	};
	var division = new Xps.Node('/');
	var multiplication = new Xps.Node('*');
	var sum = new Xps.Node('+');
	var subtraction = new Xps.Node('-');
	var thirteen = new Xps.Node(13);
	var four = new Xps.Node(4);
	var six = new Xps.Node(6);
	var two = new Xps.Node(2);
	var one = new Xps.Node(1);
	division.setLeft(multiplication);
	division.setRight(sum);
	multiplication.setLeft(subtraction);
	multiplication.setRight(six);
	sum.setLeft(two);
	sum.setRight(one);
	subtraction.setLeft(thirteen);
	subtraction.setRight(four);
	expression.tree = division;
	//This wont be here for long
	var queue = [division];
	var id = 0;
	while(queue.length > 0) {
		var curr = queue.pop();
		if (curr.left.isOperation()) queue.push(curr.left);
		if (curr.right.isOperation()) queue.push(curr.right);
                curr.ctxid = id++;
		expression.opNodes.push(curr);
   	}
	expression.solutionTrees.push({
		transformations: [],
		order: [
			[division.ctxid],
			[multiplication.ctxid],
			[subtraction.ctxid, sum.ctxid]
		]
	});
	expression.solutionTrees.push({
		transformations: [{
			id: division.ctxid,
			mirror: false,
			ccw: false
		}],
		order: [
			[multiplication.ctxid],
			[division.ctxid],
			[subtraction.ctxid, sum.ctxid]
		]
	});
	expression.solutionTrees.push({
		transformations: [{
			id: division.ctxid,
			mirror: false,
			ccw: false
		},{
			id: multiplication.ctxid,
			mirror: true
		}],
		order: [
			[multiplication.ctxid],
			[division.ctxid],
			[subtraction.ctxid, sum.ctxid]
		]
	});	
	Xps.toContext(expression);
	document.getElementById('main').innerHTML += Xps.htmlfy(division);
// 	expression.solutionTrees.push(division.rotate(false));
// 	Xps.EXPRESSIONS.push(expression);
},

makeExp: function (lvl) {
   var root = Xps.makeOps(lvl);
   Xps.fillWithInts(root);2
   Xps.toContext(root);
   return root;
},

toContext: function (expression) {
   this.CONTEXT.tree = expression.tree;
   this.CONTEXT.solutionTrees = expression.solutionTrees;
   this.CONTEXT.opNodes = expression.opNodes;
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
   // {parent:Node, child:'left' or 'right'}
   var emptyNodes = [];
   var root = null;
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
      else {
         rdm = Math.ceil(Math.random()*emptyNodes.length)-1;
         console.log('rdm for emptyNodes is: ', rdm);
         console.log('emptyNode[rdm]', emptyNodes[rdm]);
         console.log('rdm for emptyNodes is: ', rdm);
         if (rdm != emptyNodes.length-1) {
            var toPop = emptyNodes[rdm];
            emptyNodes[rdm] = emptyNodes[emptyNodes.length-1];
            emptyNodes[emptyNodes.length-1] = toPop;
         }
         var emptyNode = emptyNodes.pop(rdm);
         console.log('emptyNode is: ', emptyNode);
         if (emptyNode.child == 'left') {
            emptyNode.parent.setLeft(curr);
         } else {
            emptyNode.parent.setRight(curr);
         }
      }
      emptyNodes.push({parent:curr, child:'left'});
      emptyNodes.push({parent:curr, child:'right'});
      console.log('emptyNodes is now: ', emptyNodes);
   }
   return root;
},

/**
fillWithInts: function (root, lvl) {
   if (root == null) {
       console.error(Xps.ERROR["02"]);
       return;
   }
   var queue = [root];
   while(queue.length > 0){
      var currNode = queue.pop();
      if(currNode.left instanceof Xps.Node) queue.push(currNode.left);
		else currNode.left = new Xps.Node(0);
      if(currNode.right instanceof Xps.Node) queue.push(currNode.right);
		else currNode.right = new Xps.Node(0);
      if (currNode.value == Xps.OPERATION.DIV) currNode.left.factors.push([currNode, currNode.right]);
		else currNode.factors.push([currNode.left, currNode.right]);
   }
},
**/

fillWithInts: function (root, lvl) {
   if (root == null) {
       console.error(Xps.ERROR["02"]);
       return;
   }
   var queue = [root];
   while(queue.length > 0){
      var currNode = queue.pop();
      if(currNode.left instanceof Xps.Node) {
          queue.push(currNode.left);
      } else {
          currNode.setLeft(new Xps.Node(Xps.getPrime()));
      }
      if(currNode.right instanceof Xps.Node) {
          queue.push(currNode.right);
      } else {
          currNode.setRight(new Xps.Node(Xps.getPrime()));
      }
   }
   
},

htmlfy: function (node) {
   if (!(node instanceof Xps.Node)) return null;
   if (!node.isOperation()) {
      return '<p class="number">'+node.value+'</p>';
   } else {
      var htmlRet = '';
      if (node.value == Xps.OPERATION.DIV) {
         htmlRet += '<table>';
         htmlRet += '<tr>';
         htmlRet += '<td>';
         htmlRet += Xps.htmlfy(node.left);
         htmlRet += '</td>';
         htmlRet += '</tr>';
         htmlRet += '<tr>';
         htmlRet += '<td id="xpsop'+node.ctxid+'" class="divisionSymbol" onclick="Xps.opClick('+node.ctxid+')">';
         htmlRet += '</td>';
         htmlRet += '</tr>';
         htmlRet += '<tr>';
         htmlRet += '<td>';
         htmlRet += Xps.htmlfy(node.right);
         htmlRet += '</td>';
         htmlRet += '</tr>';
         htmlRet += '</table>';
      } else {
         //node.value will be an image
         htmlRet += '<table><tr><td>'+Xps.htmlfy(node.left)+'</td><td>'+'<div id = "xpsop'+node.ctxid+'" class="'+Xps.OPCLASSES[node.value]+'" onclick="Xps.opClick('+node.ctxid+')"/>'+'</td><td>'+Xps.htmlfy(node.right)+'</td></tr></table>';
         //htmlRet += Xps.htmlfy(node.left)+node.value+Xps.htmlfy(node.right);
      }
      if (node.parent != null && node.parent instanceof Xps.Node && node.nature == Xps.NATURE.SUM && node.parent.value == Xps.OPERATION.MULT) {
         htmlRet = '<table><tr><td class="parentesis"></td><td>'+htmlRet+'</td><td class="parentesis"></td></tr></table>';
      }
      return htmlRet;
   }
},

stringfy: function (node) {
   if (!(node instanceof Xps.Node)) return null;
   if (!node.operation) return node.value;
   return (node.nature == Xps.NATURE.MULT && node.left.nature == Xps.NATURE.SUM ? "(" : "") + Xps.stringfy(node.left) + (node.nature == Xps.NATURE.MULT && node.left.nature == Xps.NATURE.SUM ? ")" : "") + node.value + (node.nature == Xps.NATURE.MULT && node.right.nature == Xps.NATURE.SUM ? "(" : "") + Xps.stringfy(node.right) + (node.nature == Xps.NATURE.MULT && node.right.nature == Xps.NATURE.SUM ? ")" : "");
},

treefy: function(node, lvl) {
	var retTree = '';
	var count = lvl;
	while(count-- > 0) {
		if (count == 0) retTree += '|__';
		else retTree += '   ';
	}
	retTree += node.value + '\n';
	if (node.left != null) retTree += Xps.treefy(node.left,lvl+1);
	if (node.right != null) retTree += Xps.treefy(node.right,lvl+1);
	return retTree;
},

testfy: function(elid) {
   var main = document.getElementById(elid);
   var xp = Xps.makeExp(6);
   main.innerHTML += Xps.htmlfy(xp);
   main.innerHTML += Xps.stringfy(xp);
},

opClick: function(opid) {
   var opEl = document.getElementById('xpsop'+opid);
	var opNodes = Xps.CONTEXT.opNodes;
   var opNode = Xps.CONTEXT.opNodes[opid];
   var solvable = false;
	var solutionTrees = Xps.CONTEXT.solutionTrees;
   var solutionTreesToPop = [];
	var indice = [];
   for (var i = 0; i < solutionTrees.length; i++) {
		var solutionTreeRoot = Xps.CONTEXT.tree;
		var solutionTree = solutionTrees[i];
		var order = solutionTree.order;
		var firstLevel = order[order.length-1];
		var orderIndex = firstLevel.indexOf(opid);
      if (orderIndex != -1) {
			solvable = true;
			var transformations = solutionTree.transformations;
			var distransformations = [];
			for (var j = transformations.length -1; j >= 0; j--) {
				var transformation = transformations[j];
				var transNode = opNodes[transformation.id];
				console.log('transNode', transNode);
				console.log('Transforming: ', transformation);
				if (transformation.mirror) {
					transNode.mirror();
					distransformations.push({
						id: transNode.ctxid,
						mirror: true
					});
				} else {
					var switchRoot = (transNode.parent == null);
					var newRoot = transNode.rotate(transformation.ccw);
					if (switchRoot) {
						solutionTreeRoot = newRoot;
						console.log('Switching root to ', newRoot.ctxid);
					}
					distransformations.push({
						id: transNode.parent.ctxid,
						mirror: false,
						ccw: !transformation.ccw
					});
				}
				console.log('Transformed tree', '\n'+Xps.treefy(solutionTreeRoot, 0));
			}
			while (distransformations.length > 0) {
				console.log('Distransforming: ', distransformation);
				var distransformation = distransformations.pop();
				var transNode = opNodes[distransformation.id];
				if (distransformation.mirror) {
					transNode.mirror();
				} else {
					transNode.rotate(distransformation.ccw);
				}
			}
			solutionTreeRoot = Xps.CONTEXT.tree;
			console.log('Distransformed tree', '\n'+Xps.treefy(solutionTreeRoot, 0));
			var currIndx = opNode.left.ctxid + '|' + opNode.ctxid + '|' + opNode.right.ctxid;
			if (indice.indexOf(currIndx) == -1) {
				document.getElementById('main').innerHTML += Xps.htmlfy(opNode);
				indice.push(currIndx);
			}
			if (orderIndex != firstLevel.length-1) {
				var toLast = firstLevel[orderIndex];
				firstLevel[orderIndex] = firstLevel[firstLevel.length-1];
				firstLevel[firstLevel.length-1] = toLast;
			}
			firstLevel.pop();
			if (firstLevel.length == 0) {
				order.pop();
			}
      } else {
         solutionTreesToPop.push(i);
      }
   }
   if (solvable) {
		while(solutionTreesToPop.length > 0) {
			var idToPop = solutionTreesToPop.pop();
			if (idToPop != solutionTrees.length) {
				var toLast = solutionTrees[idToPop];
				solutionTrees[idToPop] = solutionTrees[solutionTrees.length-1];
				solutionTrees[solutionTrees.length-1] = toLast;
			}
			solutionTrees.pop();
		}
		var solution = eval(opNode.left.value+opNode.value+opNode.right.value);
		console.log('solution', solution);
		var solutionNode = new Xps.Node(solution);
		if (opNode.parent != null && opNode.ctxid == opNode.parent.left.ctxid) {
			opNode.parent.left = solutionNode;
		} else if (opNode.parent != null && opNode.ctxid == opNode.parent.right.ctxid) {
			opNode.parent.right = solutionNode;
		} else {
			Xps.CONTEXT.tree = solutionNode;
		}
		document.getElementById('main').innerHTML += Xps.htmlfy(Xps.CONTEXT.tree);
	} else {
		
	}
   console.log('Solvable: ', solvable);
   /**
   if (opNode.selected) {
      opEl.className = opEl.className.substring(0, opEl.className.length-3);
      opNode.selected = false;
      var nodePos = Xps.CONTEXT.selected.indexOf(opid);
      if (nodePos != Xps.CONTEXT.selected.length-1) {
         var toPop = Xps.CONTEXT.selected[nodePos];
         Xps.CONTEXT.selected[nodePos] = Xps.CONTEXT.selected[Xps.CONTEXT.selected.length-1];
         Xps.CONTEXT.selected[Xps.CONTEXT.selected.length-1] = toPop;
      }
      Xps.CONTEXT.selected.pop();
   } else {
      opEl.className += 'Sel';
      opNode.selected = true;
      Xps.CONTEXT.selected.push(opid);
   }
   **/
},

//Not prime for now
getPrime: function () {
   return Math.ceil(Math.random()*18)+2;
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
         if (value == Xps.OPERATION.MULT) this.inverse = false;
         else this.inverse = true;
      } else if (Xps.RE.NUMBERS.test(value)) {
         console.log('integer');
         this.value = parseInt(value);
         this.operation = false;
      } else {
         console.log('value must be +,-,*,/ or an integer');
         return null;
      }
      this.factors = [];
      this.parent = null;
      this.left = null;
      this.right = null;
		this.mirror = function() {
			if (
				this.operation && 
				!this.inverse
			) {
				var toRight = this.left;
				this.setLeft(this.right);
				this.setRight(toRight);
			}
		},
      this.rotate = function(ccw) {
			if (ccw) {
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
					this.setRight(pivot.left);
					pivot.parent = this.parent;
					pivot.setLeft(this);
					return pivot;
				} else {
					console.error('Can\'t rotate node ccw');
					return null;
				}
			} else {
				//Rotate the tree cw
				/**
				Is this node an operation?
				Is the left child an operation node with the same nature?
				**/
				if (
					this.operation && 
					this.left != null && 
					this.left.operation &&
					this.nature == this.left.nature
				) {
					//Rotate it
					var pivot = this.left;
					this.setLeft(pivot.right);
					pivot.parent = this.parent;
					pivot.setRight(this);
					return pivot;
				} else {
					console.error('Can\'t rotate node cw');
					return null;
				}
			}
      };
      //set methods
      this.setLeft = function(node) {
         if (!this.operation) {
            console.error('Can\'t set left child for an integer, operations only.');
         } else {
            if(node instanceof Node) {
               this.left = node;
               node.parent = this;
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
               node.parent = this;
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
