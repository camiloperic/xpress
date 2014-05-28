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
   opNodes: [],
	opSolutions: null,
	state: 'INITIAL'
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
		tree: division.ctxid,
		transformations: [],
		order: [
			[division.ctxid],
			[multiplication.ctxid],
			[subtraction.ctxid, sum.ctxid]
		]
	});
	expression.solutionTrees.push({
		tree: multiplication.ctxid,
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
		tree: multiplication.ctxid,
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
	Xps.EXPRESSIONS.push(expression);
	var opNode_1_0 = new Xps.Node('*');
	var opNode_1_1 = new Xps.Node('-');
	var intNode_1_0 = new Xps.Node(4);
	var intNode_1_1 = new Xps.Node(7);
	var intNode_1_2 = new Xps.Node(2);
	opNode_1_0.setLeft(intNode_1_0);
	opNode_1_0.setRight(opNode_1_1);
	opNode_1_0.ctxid = 0;
	opNode_1_1.setLeft(intNode_1_1);
	opNode_1_1.setRight(intNode_1_2);
	opNode_1_1.ctxid = 1;
	Xps.EXPRESSIONS.push({
		tree: opNode_1_0,
		opNodes: [opNode_1_0, opNode_1_1],
		solutionTrees: [{
			tree: opNode_1_0.ctxid,
			transformations: []
		}]		
	});
	var opNode_2_0 = new Xps.Node('+');
	var opNode_2_1 = new Xps.Node('/');
	var intNode_2_0 = new Xps.Node(5);
	var intNode_2_1 = new Xps.Node(12);
	var intNode_2_2 = new Xps.Node(4);
	opNode_2_0.setLeft(intNode_2_0);
	opNode_2_0.setRight(opNode_2_1);
	opNode_2_0.ctxid = 0;
	opNode_2_1.setLeft(intNode_2_1);
	opNode_2_1.setRight(intNode_2_2);
	opNode_2_1.ctxid = 1;
	Xps.EXPRESSIONS.push({
		tree: opNode_2_0,
		opNodes: [opNode_2_0, opNode_2_1],
		solutionTrees: [{
			tree: opNode_2_0.ctxid,
			transformations: []
		}]		
	});
	var opNode_3_0 = new Xps.Node('/');
	var opNode_3_1 = new Xps.Node('*');
	var intNode_3_0 = new Xps.Node(2);
	var intNode_3_1 = new Xps.Node(4);
	var intNode_3_2 = new Xps.Node(14);
	opNode_3_0.setLeft(opNode_3_1);
	opNode_3_0.setRight(intNode_3_0);
	opNode_3_0.ctxid = 0;
	opNode_3_1.setLeft(intNode_3_1);
	opNode_3_1.setRight(intNode_3_2);
	opNode_3_1.ctxid = 1;
	Xps.EXPRESSIONS.push({
		tree: opNode_3_0,
		opNodes: [opNode_3_0, opNode_3_1],
		solutionTrees: [{
			tree: opNode_3_0.ctxid,
			transformations: []
		},{
			tree: opNode_3_1.ctxid,
			transformations: [{
				id: opNode_3_0.ctxid,
				mirror: false,
				ccw: false
			}]
		},{
			tree: opNode_3_1.ctxid,
			transformations: [{
				id: opNode_3_0.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_3_1.ctxid,
				mirror: true
			}]
		}]		
	});
// 	expression.solutionTrees.push(division.rotate(false));
// 	Xps.EXPRESSIONS.push(expression);
},

play: function() {
	Xps.startDB();
	//This is the time to choose the expression
	Xps.newXp();
// 	Xps.printXp();
	this.appendXp(Xps.CONTEXT.tree);
},

newXp: function() {
	var xp = Xps.EXPRESSIONS[3];
	Xps.toContext(xp);
},

//Deprecated
printXp: function() {
	document.getElementById('main').innerHTML += Xps.htmlfy(Xps.CONTEXT.tree);
},

makeExp: function (lvl) {
   var root = Xps.makeOps(lvl);
   Xps.fillWithInts(root);
   Xps.toContext(root);
   return root;
},

toContext: function (expression) {
   this.CONTEXT.tree = expression.tree;
   this.CONTEXT.solutionTrees = expression.solutionTrees;
	for (var i = 0; i < this.CONTEXT.solutionTrees.length; i++)
		this.CONTEXT.solutionTrees[i].valid = true;
   this.CONTEXT.opNodes = expression.opNodes;
	this.CONTEXT.state = 'SELECTING';
},

changeState: function(state) {
	this.CONTEXT.state = state;
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
		else currNode.left = new Xps.solutionTree.transformationsNode(0);
      if(currNode.right instanceof Xps.Node) queue.push(currNode.right);
		else currNode.right = new Xps.Node(0);
      if (currNode.value == Xps.OPERATION.DIV) currNode.left.factors.push([currNode, solutionTree.transformationscurrNode.right]);
		else currNode.factors.push([currNode.left, currNode.right]);
   }
},solvable
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

htmlfy: function (node, withEq) {
   if (!(node instanceof Xps.Node)) return null;
   if (!node.isOperation()) {
      return '<p class="number">'+node.value+'</p>';
   } else {
      var htmlRet = '';
		var withParentesis = node.parent != null 
									&& node.parent instanceof Xps.Node 
									&& node.nature == Xps.NATURE.SUM 
									&& node.parent.value == Xps.OPERATION.MULT;
      if (node.value == Xps.OPERATION.DIV) {
         htmlRet += '<table>';
         htmlRet += '<tr>';
			if (withParentesis) {
				htmlRet += '<td rowspan=3 class="parentesis"></td>'
			}
         htmlRet += '<td>';
         htmlRet += Xps.htmlfy(node.left, false);
         htmlRet += '</td>';
			if (withParentesis) {
				htmlRet += '<td rowspan=3 class="parentesis"></td>'
			}
			if (withEq) {
				htmlRet += '<td rowspan=3><p class="number">=</p></td>';
			}
         htmlRet += '</tr>';
         htmlRet += '<tr>';
         htmlRet += '<td id="xpsop'+node.ctxid+'" class="divSymbol" onclick="Xps.opClick('+node.ctxid+')">';
         htmlRet += '</td>';
         htmlRet += '</tr>';
         htmlRet += '<tr>';
         htmlRet += '<td>';
         htmlRet += Xps.htmlfy(node.right, false);
         htmlRet += '</td>';
         htmlRet += '</tr>';
         htmlRet += '</table>';
      } else {
         //node.value will be an image
         htmlRet += '<table><tr>'+(withParentesis ? '<td class="parentesis"></td>' : '')+'<td>'+Xps.htmlfy(node.left, false)+'</td><td>'+'<div id = "xpsop'+node.ctxid+'" class="'+Xps.OPCLASSES[node.value]+'" onclick="Xps.opClick('+node.ctxid+')"/>'+'</td><td>'+Xps.htmlfy(node.right, false)+'</td>'+(withParentesis ? '<td class="parentesis"></td>' : '')+(withEq ? '<td><p class="number">=</p></td>' : '')+'</tr></table>';
         //htmlRet += Xps.htmlfy(node.left)+node.value+Xps.htmlfy(node.right);
      }
      return htmlRet;
   }
},

appendXp: function (node) {
	var xpTable = document.getElementById('xpTable');
	var toAppend = '<tr><td>';
	toAppend += this.htmlfy(node, true);
	toAppend += '</td></td>';
	xpTable.innerHTML += toAppend;
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

//Deprecated
testfy: function(elid) {
   var main = document.getElementById(elid);
   var xp = Xps.makeExp(6);
   main.innerHTML += Xps.htmlfy(xp);
   main.innerHTML += Xps.stringfy(xp);
},

askForSolution: function(opid, solutionKey) {
	var op = Xps.CONTEXT.opNodes[opid];
	var questionHtml = '';
	questionHtml += '<tr id="opLine'+solutionKey+'"><td class="'+this.getOpNsName(opid)+'Line"><table><tr><td>';
	questionHtml += Xps.htmlfy(op, true);
	questionHtml += '</td><td>';
	questionHtml += '<input id= "op'+solutionKey+'" type="number" onblur="Xps.solSubmit(event,'+opid+')" onkeypress="Xps.solEnter(event,'+opid+')"></input>';
// 	questionHtml += '<input id= "op'+solutionKey+'" type="number" onkeypress="Xps.solEnter(event,'+opid+')"></input>';
	questionHtml += '</td></tr></table></td></tr>';
	document.getElementById('xpTable').innerHTML += questionHtml;
	document.getElementById('op'+solutionKey).focus();
},

getOpNsName: function(opid) {
	var op = Xps.CONTEXT.opNodes[opid].value;
	if (op == Xps.OPERATION.SUM) {
		return 'sum';
	} else if (op == Xps.OPERATION.SUB) {
		return 'sub';
	} else if (op == Xps.OPERATION.MULT) {
		return 'mult';
	} else if (op == Xps.OPERATION.DIV) {
		return 'div';
	}
},

select: function(opid) {
	console.log('OPERATION SELECTED: ', opid);
	var opEl = document.getElementById('xpsop'+opid);
	var opNodes = Xps.CONTEXT.opNodes;
   var opNode = Xps.CONTEXT.opNodes[opid];
   var solvable = false;
	var solutionTrees = Xps.CONTEXT.solutionTrees;
   var solutionTreesToPop = [];
	var notValid = [];
	var indice = {};
   for (var i = 0; i < solutionTrees.length; i++) {
		console.log('   SOLUTION TREE: ', i);
		var solutionTree = solutionTrees[i];
		if (!solutionTree.valid) continue;
		console.log('      VALID SOLUTION TREE! ');
		var distransformations = this.transform(solutionTree.transformations);
		if (!opNode.left.isOperation() && !opNode.right.isOperation()) {
			console.log('      OPERATION VALID FOR TREE');
			solvable = true;
			var currIndx = opNode.left.value+'op'+opNode.right.value;
			console.log('      SOLUTION KEY: ', currIndx);
			if (typeof indice[currIndx] == 'undefined')
				indice[currIndx] = [i];
			else {
				indice[currIndx].push(i);
			}
			console.log('      SOLUTION KEYS: ', indice);
		} else notValid.push(i);
		this.transform(distransformations);
   }
   console.log('   ANALISIS IS DONE FOR SOLUTION TREE: ', i);
   if (solvable) {
		Xps.CONTEXT.opSolutions = indice;
		for (var key in indice) {
			console.log(   'SOLUTION KEY IS ', key);
			console.log(   'SOLUTION FIRST IS ', indice[key][0]);
			var solutionTree = solutionTrees[indice[key][0]];
			var distransformations = this.transform(solutionTree.transformations);
			this.askForSolution(opid, key);
			this.transform(distransformations);
		}
		for (var i = 0; i < notValid.length; i++) {
			solutionTrees[notValid[i]].valid = false;
		}
	}
	console.log('OPERATION SELECTION ENDED');
   return solvable;
},

opClick: function(opid) {
	if (Xps.CONTEXT.state == 'SOLVING') return;
   if (Xps.select(opid)) {
		Xps.changeState('SOLVING');
// 		Xps.askForSolution(opid);
	} else {
		//Send WRONG message
	}
},

solSubmit: function(event, opid) {
	var op = this.CONTEXT.opNodes[opid];
	if (!op.isOperation()) return;
	var key = event.target.id.substring(2, event.target.id.length)
	var opSolution = this.CONTEXT.opSolutions[key];
	var solutionTree = this.CONTEXT.solutionTrees[opSolution[0]];
	var distransformations = this.transform(solutionTree.transformations);
	var isOpRoot = (op.parent == null);
	console.log('key is ', key);
	console.log('opSolution is ', opSolution);
	if (op.solve(parseInt(event.target.value))) {
		this.CONTEXT.tree = this.CONTEXT.opNodes[solutionTree.tree];
		Xps.changeState('SELECTING');
		console.log('event',event);
		if (isOpRoot) Xps.CONTEXT.tree = Xps.CONTEXT.opNodes[opid];
		event.target.parentNode.innerHTML = '<p class="number">'+parseInt(event.target.value)+'</p>';
// 		Xps.printXp();
		for (var currKey in this.CONTEXT.opSolutions) {
			if (currKey != key) {
				var toDestroy = document.getElementById('opLine'+currKey);
				toDestroy.deleteCell();
				var notValid = this.CONTEXT.opSolutions[currKey];
				for (var i = 0; i < notValid.length; i++) {
					if (this.CONTEXT.solutionTrees[notValid[i]].valid)
						this.CONTEXT.solutionTrees[notValid[i]].valid = false;
				}
			}
		}
		for (var i = 0; i < this.CONTEXT.solutionTrees.length; i++) {
			if (!this.CONTEXT.solutionTrees[i].valid || i == opSolution[0]) continue;
			for (var j = 0; j < distransformations.length; j++) {
				this.CONTEXT.solutionTrees[i].transformations.push(distransformations[j]);
			}
		}
		solutionTree.transformations = [];
		this.appendXp(Xps.CONTEXT.tree);
	} else {
		this.transform(distransformations);
	}
},

transform: function(transformations) {
	var distransformations = [];
	for (var j = transformations.length -1; j >= 0; j--) {
		var transformation = transformations[j];
		var transNode = Xps.CONTEXT.opNodes[transformation.id];
		console.log('Transforming: ', transformation);
		if (transformation.mirror) {
			transNode.mirror();
			distransformations.push({
				id: transNode.ctxid,
				mirror: true
			});
		} else {
			//Not here, switch root elsewhere
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
	return distransformations;
},

solEnter: function(event, opid) {
	if (event.keyCode != 13) return;
	this.solSubmit(event, opid);
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
//          console.log('undefined');         
      } else if (value == null) {
//          console.log('null');
      } else if (value.length == 1 && (Xps.OPERATION.SUM+Xps.OPERATION.SUB).indexOf(value) != -1) {
         //Sum and subtraction
//          console.log('sum');
         this.value = value;
         this.operation = true;
         this.nature = Xps.NATURE.SUM;
         if (value == Xps.OPERATION.SUM) this.inverse = false;
         else this.inverse = true;
      } else if (value.length == 1 && (Xps.OPERATION.MULT+Xps.OPERATION.DIV).indexOf(value) != -1) {
         //Multiplication and division
//          console.log('mul');
         this.value = value;
         this.operation = true;
         this.nature = Xps.NATURE.MULT;
         if (value == Xps.OPERATION.MULT) this.inverse = false;
         else this.inverse = true;
      } else if (Xps.RE.NUMBERS.test(value)) {
//          console.log('integer');
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
					console.error('Can\'t rotate node ccw', this);
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
					console.error('Can\'t rotate node cw', this);
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
		
		this.solve = function(result) {
			if (!this.isOperation()) return false;
			var solution = eval(this.left.value+this.value+this.right.value);
			if (result != solution) return false;
			console.log('solution, result', solution, result);
			var solutionNode = new Xps.Node(solution);
			solutionNode.ctxid = this.ctxid;
			if (this.parent != null && this.ctxid == this.parent.left.ctxid) {
				this.parent.left = solutionNode;
			} else if (this.parent != null && this.ctxid == this.parent.right.ctxid) {
				this.parent.right = solutionNode;
			}
			Xps.CONTEXT.opNodes[this.ctxid] = solutionNode;
			return true;
		},		
		
      this.isSum = function() {
         if (!this.operation) return null;
         return this.nature == 'SUM' ? true : false;
      };
   } else return new Node(value);
}

};
