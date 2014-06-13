Xps = {

EXPRESSIONS: [],

PRIMENUMBERS: {
   SET:[2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
   PROBABILITIES:[55,89,110,123,131,136,139,141,142,143]
},
NATURE: {SUM:'SUM', MULT:'MULT'},
OPERATION: {SUM:'+', SUB:'-', MULT:'*', DIV:'/'},
RE: {NUMBERS: new RegExp(/^[-+]?\d+$/)},
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
	score: [],
	state: 'INITIAL'
},

CONTAINERID: '',

//Xps Methods
startDB: function() {
	// XP: 4*(7-2)
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
	
	// XP: 5+12/4
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
	
	// XP: 14*4/2
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

	// XP: (7+5)/(3*2)
	var opNode_4_0 = new Xps.Node('/');
	var opNode_4_1 = new Xps.Node('+');
	var opNode_4_2 = new Xps.Node('*');
	var intNode_4_0 = new Xps.Node(7);
	var intNode_4_1 = new Xps.Node(5);
	var intNode_4_2 = new Xps.Node(3);
	var intNode_4_3 = new Xps.Node(2);
	opNode_4_0.setLeft(opNode_4_1);
	opNode_4_0.setRight(opNode_4_2);
	opNode_4_0.ctxid = 0;
	opNode_4_1.setLeft(intNode_4_0);
	opNode_4_1.setRight(intNode_4_1);
	opNode_4_1.ctxid = 1;
	opNode_4_2.setLeft(intNode_4_2);
	opNode_4_2.setRight(intNode_4_3);
	opNode_4_2.ctxid = 2;
	Xps.EXPRESSIONS.push({
		tree: opNode_4_0,
		opNodes: [opNode_4_0, opNode_4_1, opNode_4_2],
		solutionTrees: [{
			tree: opNode_4_0.ctxid,
			transformations: []
		},{
			tree: opNode_4_2.ctxid,
			transformations: [{
				id: opNode_4_0.ctxid,
				mirror: false,
				ccw: true
			}]
		},{
			tree: opNode_4_2.ctxid,
			transformations: [{
				id: opNode_4_0.ctxid,
				mirror: false,
				ccw: true
			},{
				id: opNode_4_2.ctxid,
				mirror: true
			}]
		}]		
	});
	
	// XP: (6-4)*3+5
	var opNode_5_0 = new Xps.Node('+');
	var opNode_5_1 = new Xps.Node('*');
	var opNode_5_2 = new Xps.Node('-');
	var intNode_5_0 = new Xps.Node(5);
	var intNode_5_1 = new Xps.Node(3);
	var intNode_5_2 = new Xps.Node(6);
	var intNode_5_3 = new Xps.Node(4);
	opNode_5_0.setLeft(opNode_5_1);
	opNode_5_0.setRight(intNode_5_0);
	opNode_5_0.ctxid = 0;
	opNode_5_1.setLeft(opNode_5_2);
	opNode_5_1.setRight(intNode_5_1);
	opNode_5_1.ctxid = 1;
	opNode_5_2.setLeft(intNode_5_2);
	opNode_5_2.setRight(intNode_5_3);
	opNode_5_2.ctxid = 2;
	Xps.EXPRESSIONS.push({
		tree: opNode_5_0,
		opNodes: [opNode_5_0, opNode_5_1, opNode_5_2],
		solutionTrees: [{
			tree: opNode_5_0.ctxid,
			transformations: []
		}]		
	});
	
	// XP: (11-2)/3+5
	var opNode_6_0 = new Xps.Node('+');
	var opNode_6_1 = new Xps.Node('/');
	var opNode_6_2 = new Xps.Node('-');
	var intNode_6_0 = new Xps.Node(5);
	var intNode_6_1 = new Xps.Node(3);
	var intNode_6_2 = new Xps.Node(11);
	var intNode_6_3 = new Xps.Node(2);
	opNode_6_0.setLeft(opNode_6_1);
	opNode_6_0.setRight(intNode_6_0);
	opNode_6_0.ctxid = 0;
	opNode_6_1.setLeft(opNode_6_2);
	opNode_6_1.setRight(intNode_6_1);
	opNode_6_1.ctxid = 1;
	opNode_6_2.setLeft(intNode_6_2);
	opNode_6_2.setRight(intNode_6_3);
	opNode_6_2.ctxid = 2;
	Xps.EXPRESSIONS.push({
		tree: opNode_6_0,
		opNodes: [opNode_6_0, opNode_6_1, opNode_6_2],
		solutionTrees: [{
			tree: opNode_6_0.ctxid,
			transformations: []
		}]		
	});
	
	// XP: (13-4)*6/(2+1)
	var opNode_7_0 = new Xps.Node('/');
	var opNode_7_1 = new Xps.Node('*');
	var opNode_7_2 = new Xps.Node('+');
	var opNode_7_3 = new Xps.Node('-');
	var intNode_7_0 = new Xps.Node(13);
	var intNode_7_1 = new Xps.Node(4);
	var intNode_7_2 = new Xps.Node(6);
	var intNode_7_3 = new Xps.Node(2);
	var intNode_7_4 = new Xps.Node(1);
	opNode_7_0.setLeft(opNode_7_1);
	opNode_7_0.setRight(opNode_7_2);
	opNode_7_0.ctxid = 0;
	opNode_7_1.setLeft(opNode_7_3);
	opNode_7_1.setRight(intNode_7_2);
	opNode_7_1.ctxid = 1;
	opNode_7_2.setLeft(intNode_7_3);
	opNode_7_2.setRight(intNode_7_4);
	opNode_7_2.ctxid = 2;
	opNode_7_3.setLeft(intNode_7_0);
	opNode_7_3.setRight(intNode_7_1);
	opNode_7_3.ctxid = 3;
	Xps.EXPRESSIONS.push({
		tree: opNode_7_0,
		opNodes: [opNode_7_0, opNode_7_1, opNode_7_2, opNode_7_3],
		solutionTrees: [{
			tree: opNode_7_0.ctxid,
			transformations: []
		},{
			tree: opNode_7_1.ctxid,
			transformations: [{
				id: opNode_7_0.ctxid,
				mirror: false,
				ccw: false
			}]
		},{
			tree: opNode_7_1.ctxid,
			transformations: [{
				id: opNode_7_0.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_7_1.ctxid,
				mirror: true
			}]
		}]		
	});
	
	// XP: 21/(2+5)-3*4
	var opNode_8_0 = new Xps.Node('-');
	var opNode_8_1 = new Xps.Node('/');
	var opNode_8_2 = new Xps.Node('*');
	var opNode_8_3 = new Xps.Node('+');
	var intNode_8_0 = new Xps.Node(21);
	var intNode_8_1 = new Xps.Node(3);
	var intNode_8_2 = new Xps.Node(4);
	var intNode_8_3 = new Xps.Node(2);
	var intNode_8_4 = new Xps.Node(5);
	opNode_8_0.setLeft(opNode_8_1);
	opNode_8_0.setRight(opNode_8_2);
	opNode_8_0.ctxid = 0;
	opNode_8_1.setLeft(intNode_8_0);
	opNode_8_1.setRight(opNode_8_3);
	opNode_8_1.ctxid = 1;
	opNode_8_2.setLeft(intNode_8_1);
	opNode_8_2.setRight(intNode_8_2);
	opNode_8_2.ctxid = 2;
	opNode_8_3.setLeft(intNode_8_3);
	opNode_8_3.setRight(intNode_8_4);
	opNode_8_3.ctxid = 3;
	Xps.EXPRESSIONS.push({
		tree: opNode_8_0,
		opNodes: [opNode_8_0, opNode_8_1, opNode_8_2, opNode_8_3],
		solutionTrees: [{
			tree: opNode_8_0.ctxid,
			transformations: []
		}]		
	});
	
	// XP: 5*3-36/6+2
	var opNode_9_0 = new Xps.Node('+');
	var opNode_9_1 = new Xps.Node('-');
	var opNode_9_2 = new Xps.Node('*');
	var opNode_9_3 = new Xps.Node('/');
	var intNode_9_0 = new Xps.Node(2);
	var intNode_9_1 = new Xps.Node(5);
	var intNode_9_2 = new Xps.Node(3);
	var intNode_9_3 = new Xps.Node(36);
	var intNode_9_4 = new Xps.Node(6);
	opNode_9_0.setLeft(opNode_9_1);
	opNode_9_0.setRight(intNode_9_0);
	opNode_9_0.ctxid = 0;
	opNode_9_1.setLeft(opNode_9_2);
	opNode_9_1.setRight(opNode_9_3);
	opNode_9_1.ctxid = 1;
	opNode_9_2.setLeft(intNode_9_1);
	opNode_9_2.setRight(intNode_9_2);
	opNode_9_2.ctxid = 2;
	opNode_9_3.setLeft(intNode_9_3);
	opNode_9_3.setRight(intNode_9_4);
	opNode_9_3.ctxid = 3;
	Xps.EXPRESSIONS.push({
		tree: opNode_9_0,
		opNodes: [opNode_9_0, opNode_9_1, opNode_9_2, opNode_9_3],
		solutionTrees: [{
			tree: opNode_9_0.ctxid,
			transformations: []
		},{
			tree: opNode_9_1.ctxid,
			transformations: [{
				id: opNode_9_0.ctxid,
				mirror: false,
				ccw: false
			}]
		}]		
	});
	
	// XP: (14*21)/7+12/(7-4)
	var opNode_10_0 = new Xps.Node('+');
	var opNode_10_1 = new Xps.Node('/');
	var opNode_10_2 = new Xps.Node('/');
	var opNode_10_3 = new Xps.Node('*');
	var opNode_10_4 = new Xps.Node('-');
	var intNode_10_0 = new Xps.Node(7);
	var intNode_10_1 = new Xps.Node(12);
	var intNode_10_2 = new Xps.Node(14);
	var intNode_10_3 = new Xps.Node(21);
	var intNode_10_4 = new Xps.Node(7);
	var intNode_10_5 = new Xps.Node(4);
	opNode_10_0.setLeft(opNode_10_1);
	opNode_10_0.setRight(opNode_10_2);
	opNode_10_0.ctxid = 0;
	opNode_10_1.setLeft(opNode_10_3);
	opNode_10_1.setRight(intNode_10_0);
	opNode_10_1.ctxid = 1;
	opNode_10_2.setLeft(intNode_10_1);
	opNode_10_2.setRight(opNode_10_4);
	opNode_10_2.ctxid = 2;
	opNode_10_3.setLeft(intNode_10_2);
	opNode_10_3.setRight(intNode_10_3);
	opNode_10_3.ctxid = 3;
	opNode_10_4.setLeft(intNode_10_4);
	opNode_10_4.setRight(intNode_10_5);
	opNode_10_4.ctxid = 4;
	Xps.EXPRESSIONS.push({
		tree: opNode_10_0,
		opNodes: [opNode_10_0, opNode_10_1, opNode_10_2, opNode_10_3, opNode_10_4],
		solutionTrees: [{
			tree: opNode_10_0.ctxid,
			transformations: []
		},{
			tree: opNode_10_0.ctxid,
			transformations: [{
				id: opNode_10_1.ctxid,
				mirror: false,
				ccw: false
			}]
		},{
			tree: opNode_10_0.ctxid,
			transformations: [{
				id: opNode_10_1.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_10_3.ctxid,
				mirror: true
			}]
		}]		
	});
	
	// XP: 6*(15-3)/(4-5*2)
	var opNode_11_0 = new Xps.Node('/');
	var opNode_11_1 = new Xps.Node('*');
	var opNode_11_2 = new Xps.Node('-');
	var opNode_11_3 = new Xps.Node('-');
	var opNode_11_4 = new Xps.Node('*');
	var intNode_11_0 = new Xps.Node(6);
	var intNode_11_1 = new Xps.Node(4);
	var intNode_11_2 = new Xps.Node(15);
	var intNode_11_3 = new Xps.Node(3);
	var intNode_11_4 = new Xps.Node(5);
	var intNode_11_5 = new Xps.Node(2);
	opNode_11_0.setLeft(opNode_11_1);
	opNode_11_0.setRight(opNode_11_2);
	opNode_11_0.ctxid = 0;
	opNode_11_1.setLeft(intNode_11_0);
	opNode_11_1.setRight(opNode_11_3);
	opNode_11_1.ctxid = 1;
	opNode_11_2.setLeft(intNode_11_1);
	opNode_11_2.setRight(opNode_11_4);
	opNode_11_2.ctxid = 2;
	opNode_11_3.setLeft(intNode_11_2);
	opNode_11_3.setRight(intNode_11_3);
	opNode_11_3.ctxid = 3;
	opNode_11_4.setLeft(intNode_11_4);
	opNode_11_4.setRight(intNode_11_5);
	opNode_11_4.ctxid = 4;
	Xps.EXPRESSIONS.push({
		tree: opNode_11_0,
		opNodes: [opNode_11_0, opNode_11_1, opNode_11_2, opNode_11_3, opNode_11_4],
		solutionTrees: [{
			tree: opNode_11_0.ctxid,
			transformations: []
		},{
			tree: opNode_11_1.ctxid,
			transformations: [{
				id: opNode_11_0.ctxid,
				mirror: false,
				ccw: false
			}]
		},{
			tree: opNode_11_1.ctxid,
			transformations: [{
				id: opNode_11_0.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_11_1.ctxid,
				mirror: true
			}]
		}]		
	});
	
	// XP: (3+5)*2-4*6/2
	var opNode_12_0 = new Xps.Node('-');
	var opNode_12_1 = new Xps.Node('*');
	var opNode_12_2 = new Xps.Node('/');
	var opNode_12_3 = new Xps.Node('+');
	var opNode_12_4 = new Xps.Node('*');
	var intNode_12_0 = new Xps.Node(2);
	var intNode_12_1 = new Xps.Node(2);
	var intNode_12_2 = new Xps.Node(3);
	var intNode_12_3 = new Xps.Node(5);
	var intNode_12_4 = new Xps.Node(4);
	var intNode_12_5 = new Xps.Node(6);
	opNode_12_0.setLeft(opNode_12_1);
	opNode_12_0.setRight(opNode_12_2);
	opNode_12_0.ctxid = 0;
	opNode_12_1.setLeft(opNode_12_3);
	opNode_12_1.setRight(intNode_12_0);
	opNode_12_1.ctxid = 1;
	opNode_12_2.setLeft(opNode_12_4);
	opNode_12_2.setRight(intNode_12_1);
	opNode_12_2.ctxid = 2;
	opNode_12_3.setLeft(intNode_12_2);
	opNode_12_3.setRight(intNode_12_3);
	opNode_12_3.ctxid = 3;
	opNode_12_4.setLeft(intNode_12_4);
	opNode_12_4.setRight(intNode_12_5);
	opNode_12_4.ctxid = 4;
	Xps.EXPRESSIONS.push({
		tree: opNode_12_0,
		opNodes: [opNode_12_0, opNode_12_1, opNode_12_2, opNode_12_3, opNode_12_4],
		solutionTrees: [{
			tree: opNode_12_0.ctxid,
			transformations: []
		},{
			tree: opNode_12_0.ctxid,
			transformations: [{
				id: opNode_12_2.ctxid,
				mirror: false,
				ccw: false
			}]
		},{
			tree: opNode_12_0.ctxid,
			transformations: [{
				id: opNode_12_2.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_12_4.ctxid,
				mirror: true
			}]
		}]		
	});
	
	// XP: 4*(2+3*(7-4)/(1+2))
	var opNode_13_0 = new Xps.Node('*');
	var opNode_13_1 = new Xps.Node('+');
	var opNode_13_2 = new Xps.Node('/');
	var opNode_13_3 = new Xps.Node('*');
	var opNode_13_4 = new Xps.Node('+');
	var opNode_13_5 = new Xps.Node('-');
	var intNode_13_0 = new Xps.Node(4);
	var intNode_13_1 = new Xps.Node(2);
	var intNode_13_2 = new Xps.Node(3);
	var intNode_13_3 = new Xps.Node(1);
	var intNode_13_4 = new Xps.Node(2);
	var intNode_13_5 = new Xps.Node(7);
	var intNode_13_6 = new Xps.Node(4);
	opNode_13_0.setLeft(intNode_13_0);
	opNode_13_0.setRight(opNode_13_1);
	opNode_13_0.ctxid = 0;
	opNode_13_1.setLeft(intNode_13_1);
	opNode_13_1.setRight(opNode_13_2);
	opNode_13_1.ctxid = 1;
	opNode_13_2.setLeft(opNode_13_3);
	opNode_13_2.setRight(opNode_13_4);
	opNode_13_2.ctxid = 2;
	opNode_13_3.setLeft(intNode_13_2);
	opNode_13_3.setRight(opNode_13_5);
	opNode_13_3.ctxid = 3;
	opNode_13_4.setLeft(intNode_13_3);
	opNode_13_4.setRight(intNode_13_4);
	opNode_13_4.ctxid = 4;
	opNode_13_5.setLeft(intNode_13_5);
	opNode_13_5.setRight(intNode_13_6);
	opNode_13_5.ctxid = 5;
	Xps.EXPRESSIONS.push({
		tree: opNode_13_0,
		opNodes: [opNode_13_0, opNode_13_1, opNode_13_2, opNode_13_3, opNode_13_4, opNode_13_5],
		solutionTrees: [{
			tree: opNode_13_0.ctxid,
			transformations: []
		},{
			tree: opNode_13_0.ctxid,
			transformations: [{
				id: opNode_13_2.ctxid,
				mirror: false,
				ccw: false
			}]
		},{
			tree: opNode_13_0.ctxid,
			transformations: [{
				id: opNode_13_2.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_13_3.ctxid,
				mirror: true
			}]
		}]		
	});
	
	// XP: (21*7)/(11-4)*(7+3)/5
	var opNode_14_0 = new Xps.Node('*');
	var opNode_14_1 = new Xps.Node('/');
	var opNode_14_2 = new Xps.Node('/');
	var opNode_14_3 = new Xps.Node('*');
	var opNode_14_4 = new Xps.Node('-');
	var opNode_14_5 = new Xps.Node('+');
	var intNode_14_0 = new Xps.Node(5);
	var intNode_14_1 = new Xps.Node(21);
	var intNode_14_2 = new Xps.Node(7);
	var intNode_14_3 = new Xps.Node(11);
	var intNode_14_4 = new Xps.Node(4);
	var intNode_14_5 = new Xps.Node(7);
	var intNode_14_6 = new Xps.Node(3);
	opNode_14_0.setLeft(opNode_14_1);
	opNode_14_0.setRight(opNode_14_2);
	opNode_14_0.ctxid = 0;
	opNode_14_1.setLeft(opNode_14_3);
	opNode_14_1.setRight(opNode_14_4);
	opNode_14_1.ctxid = 1;
	opNode_14_2.setLeft(opNode_14_5);
	opNode_14_2.setRight(intNode_14_0);
	opNode_14_2.ctxid = 2;
	opNode_14_3.setLeft(intNode_14_1);
	opNode_14_3.setRight(intNode_14_2);
	opNode_14_3.ctxid = 3;
	opNode_14_4.setLeft(intNode_14_3);
	opNode_14_4.setRight(intNode_14_4);
	opNode_14_4.ctxid = 4;
	opNode_14_5.setLeft(intNode_14_5);
	opNode_14_5.setRight(intNode_14_6);
	opNode_14_5.ctxid = 5;
	Xps.EXPRESSIONS.push({
		tree: opNode_14_0,
		opNodes: [opNode_14_0, opNode_14_1, opNode_14_2, opNode_14_3, opNode_14_4, opNode_14_5],
		solutionTrees: [{
			tree: opNode_14_0.ctxid,
			transformations: []
		},{
			tree: opNode_14_0.ctxid,
			transformations: [{
				id: opNode_14_1.ctxid,
				mirror: false,
				ccw: false
			}]
		},{
			tree: opNode_14_0.ctxid,
			transformations: [{
				id: opNode_14_1.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_14_3.ctxid,
				mirror: true
			}]
		},{
			tree: opNode_14_1.ctxid,
			transformations: [{
				id: opNode_14_0.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_14_1.ctxid,
				mirror: false,
				ccw: false
			}]
		},{
			tree: opNode_14_1.ctxid,
			transformations: [{
				id: opNode_14_0.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_14_1.ctxid,
				mirror: false,
				ccw: false
			},{
				id: opNode_14_3.ctxid,
				mirror: true
			}]
		}]		
	});
	
	// XP: (9+6)/(7-2)*(3+10)*2
	var opNode_15_0 = new Xps.Node('*');
	var opNode_15_1 = new Xps.Node('/');
	var opNode_15_2 = new Xps.Node('*');
	var opNode_15_3 = new Xps.Node('+');
	var opNode_15_4 = new Xps.Node('-');
	var opNode_15_5 = new Xps.Node('+');
	var intNode_15_0 = new Xps.Node(2);
	var intNode_15_1 = new Xps.Node(9);
	var intNode_15_2 = new Xps.Node(6);
	var intNode_15_3 = new Xps.Node(7);
	var intNode_15_4 = new Xps.Node(2);
	var intNode_15_5 = new Xps.Node(3);
	var intNode_15_6 = new Xps.Node(10);
	opNode_15_0.setLeft(opNode_15_1);
	opNode_15_0.setRight(opNode_15_2);
	opNode_15_0.ctxid = 0;
	opNode_15_1.setLeft(opNode_15_3);
	opNode_15_1.setRight(opNode_15_4);
	opNode_15_1.ctxid = 1;
	opNode_15_2.setLeft(opNode_15_5);
	opNode_15_2.setRight(intNode_15_0);
	opNode_15_2.ctxid = 2;
	opNode_15_3.setLeft(intNode_15_1);
	opNode_15_3.setRight(intNode_15_2);
	opNode_15_3.ctxid = 3;
	opNode_15_4.setLeft(intNode_15_3);
	opNode_15_4.setRight(intNode_15_4);
	opNode_15_4.ctxid = 4;
	opNode_15_5.setLeft(intNode_15_5);
	opNode_15_5.setRight(intNode_15_6);
	opNode_15_5.ctxid = 5;
	Xps.EXPRESSIONS.push({
		tree: opNode_15_0,
		opNodes: [opNode_15_0, opNode_15_1, opNode_15_2, opNode_15_3, opNode_15_4, opNode_15_5],
		solutionTrees: [{
			tree: opNode_15_0.ctxid,
			transformations: []
		},{
			tree: opNode_15_2.ctxid,
			transformations: [{
				id: opNode_15_0.ctxid,
				mirror: false,
				ccw: true
			}]
		}]		
	});
	
// 	expression.solutionTrees.push(division.rotate(false));
// 	Xps.EXPRESSIONS.push(expression);
},

start: function(parentId){
	this.CONTAINERID = parentId;
	var parent = document.getElementById(this.CONTAINERID);
	var startHtml = '';
	startHtml += '<div id="bgDiv"></div>';
	startHtml += '<div id="spanDiv">';
	startHtml +=	'<table id="startTable">';
	startHtml +=		'<tr class="startTableRow"><td></td></tr>';
	startHtml +=		'<tr class="startTableRow"><td>';
	startHtml +=			'<div id="spanWarnDiv"></div>';
	startHtml +=		'</td></tr>';
	startHtml +=	   '<tr class="startTableRow"><td></td></tr>';
	startHtml +=	'</table>';
	startHtml += '</div>';
	startHtml += '<div id="xpDiv" visible="false"><table id="xpTable"></table></div>';
	startHtml += '<div id="startDiv">';
	startHtml +=	'<table id="startTable">';
	startHtml +=		'<tr class="startTableRow"><td></td></tr>';
	startHtml +=		'<tr class="startTableRow"><td>';
	startHtml +=			'<div id="startButton" onclick="Xps.play()"><p class="text">Play</p></div>';
	startHtml +=		'</td></tr>';
	startHtml +=	   '<tr class="startTableRow"><td></td></tr>';
	startHtml +=	'</table>';
	startHtml += '</div>';
	parent.innerHTML = startHtml;
},

play: function() {
	var startDiv = document.getElementById('startDiv');
	var xpDiv = document.getElementById('xpDiv');
	startDiv.style.visibility = 'hidden';
	startDiv.style.zIndex = 0;
	xpDiv.style.visibility = 'visible';
	xpDiv.style.zIndex = 100;
	this.startDB();
	//This is the time to choose the expression
	this.newXp();
// 	Xps.printXp();
	this.appendXp(Xps.CONTEXT.tree);
},

next: function() {
	var xpTable = document.getElementById('xpTable');
	xpTable.innerHTML = '';
	this.newXp();
	this.appendXp(Xps.CONTEXT.tree);
},

exit: function() {
	var xpTable = document.getElementById('xpTable');
	xpTable.innerHTML = '';
	var xpDiv = document.getElementById('xpDiv');
	xpDiv.style.visibility = 'hidden';
	var parent = document.getElementById(this.CONTAINERID);
	var scoredSerie = {
		name: 'Score',
		data: []
	};
	var toScoreSerie = {
		name: 'To score',
		data: []
	};
	var totalScore = {
		name: 'Total',
		data: []
	};
	var total = 0;
	var missing = 0;
	for (var i = 4; i >= 0; i--) {
		var count = this.CONTEXT.score.length-1-i;
		if (count >= 0) {
			var score = this.CONTEXT.score[count];
			var value = (score.select + score.solve)*10/(score.ops*2-1)
			scoredSerie.data.push(value);
			total += value;
			toScoreSerie.data.push(0);
			totalScore.data.push(0);
		} else {
			missing++;
		}
	}
	for (var i = 0; i < missing; i++) {
		scoredSerie.data.push(0);
		toScoreSerie.data.push({y:5});
		totalScore.data.push(0);
	}
	scoredSerie.data.push(0);
	toScoreSerie.data.push(0);
	totalScore.data.push(total/5);
	console.log('series are: ', {scored: scoredSerie, toScore: toScoreSerie, total: totalScore});
	var hc = new Highcharts.Chart({
		chart : {
			renderTo : Xps.CONTAINERID,
			type     : 'column'
		},
		title: {
			text: 'Stacked column chart'
		},
		xAxis: {
			categories: ['1', '2', '3', '4', '5', 'TOTAL'],
			plotBands: [{
				color: '#FCFFC5',
				from: 4.5-missing,
				to: 4.5
			}]
		},
		yAxis: [{
			min: 0,
			title: {
				text: ''
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: 'gray'
				}
			}
		}],
		legend: {
			align: 'right',
			x: -70,
			verticalAlign: 'top',
			y: 20,
			floating: true,
			backgroundColor: 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		plotOptions: {
			column: {
				stacking: 'normal'/*,*/
// 				dataLabels: {
// 					enabled: true,
// 					color: 'white',
// 					style: {
// 						textShadow: '0 0 3px black, 0 0 3px black'
// 					}
// 				}
			}
		},
// 		series: [{name:'la', data: [1,2,3,4,5,6]}]
		series: [scoredSerie,toScoreSerie,totalScore]
	});
},

newXp: function() {
// 	var rdm = Math.round(Math.random()*(Xps.EXPRESSIONS.length-1));
// 	console.log('rdm is ', rdm);
// 	if (rdm != Xps.EXPRESSIONS.legnth-1) {
// 		var toLast = Xps.EXPRESSIONS[rdm];
// 		Xps.EXPRESSIONS[rdm] = Xps.EXPRESSIONS[Xps.EXPRESSIONS.length-1];
// 		Xps.EXPRESSIONS[Xps.EXPRESSIONS.length-1] = toLast;
// 	}
// 	var xp = this.EXPRESSIONS.pop();
// 	this.toContext(xp);
// 	//Using + and - expression generation
	this.toContext(this.makeExp(3,[Xps.OPERATION.SUM, Xps.OPERATION.SUB]));
	console.log(this.treefy(this.CONTEXT.tree,0));
// Code for testing specific expressions
// 	this.toContext(this.EXPRESSIONS[8]);
},

//Deprecated
printXp: function() {
	document.getElementById('main').innerHTML += Xps.htmlfy(Xps.CONTEXT.tree);
},

makeExp: function (lvl, operations) {
   var root = Xps.makeOps(lvl, operations);
   Xps.fillWithInts(root);
   return root;
},

toContext: function (expression) {
	if (expression instanceof Xps.Node) {
		var currNode = expression;
		var opNodes = [currNode];
		var count = 0;
		while (typeof currNode.nextNode != 'undefined' && currNode.nextNode != null) {
			currNode = currNode.nextNode;
			console.log('adding opnode to opnodes', currNode);
			opNodes.push(currNode);
		}
		var solutionTrees = Xps.evaluateTree(expression, opNodes);
		var catalanNumber = Xps.factorial(opNodes.length*2)/(Xps.factorial(opNodes.length+1)*Xps.factorial(opNodes.length));
		console.log('n is ', opNodes.length, ', catalan number is ', catalanNumber, ', solutions trees count is ', solutionTrees.length);
		expression = {
			tree: expression,
			opNodes: opNodes,
			solutionTrees: solutionTrees
		};
		console.log('expression is ', expression);
	}
   this.CONTEXT.tree = expression.tree;
   this.CONTEXT.solutionTrees = expression.solutionTrees;
	for (var i = 0; i < this.CONTEXT.solutionTrees.length; i++)
		this.CONTEXT.solutionTrees[i].valid = true;
   this.CONTEXT.opNodes = expression.opNodes;
	this.CONTEXT.state = 'SELECTING';
	this.CONTEXT.score.push({
		select: 0,
		solve: 0,
		ops: expression.opNodes.length
	});
	this.CONTEXT.opToSolve = expression.opNodes.length;
	this.CONTEXT.currentScore = this.CONTEXT.opToSolve > 1 ? 1 : 0;
},

changeState: function(state) {
	this.CONTEXT.state = state;
},

makeOps: function (lvl, operations) {
	if (operations == null || typeof operations == 'undefined') {
		operations = [
			Xps.OPERATION.SUM, 
			Xps.OPERATION.SUB, 
			Xps.OPERATION.MULT, 
			Xps.OPERATION.DIV
		];
	} else {
		for (i in operations){
			op = operations[i];
			if (op != Xps.OPERATION.SUM
				&& op != Xps.OPERATION.SUB
				&& op != Xps.OPERATION.MULT
				&& op != Xps.OPERATION.DIV
			) {
				console.log('Operation ', op, ' in operations is not valid');
				return null;
			}
		}
	}
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
	var last = null;
   for (var i = 0; i < lvl; i++) {
		var operation = operations[Math.floor(Math.random()*operations.length)];
      var curr = new Xps.Node(operation);
		curr.ctxid = i;
      if (root == null) root = curr;
		else {
			last.nextNode = curr;
			// Building a tree that can only rotate ccw.
			last.setLeft(curr);
//          rdm = Math.ceil(Math.random()*emptyNodes.length)-1;
//          console.log('rdm for emptyNodes is: ', rdm);
//          console.log('emptyNode[rdm]', emptyNodes[rdm]);
//          console.log('rdm for emptyNodes is: ', rdm);
//          if (rdm != emptyNodes.length-1) {
//             var toPop = emptyNodes[rdm];
//             emptyNodes[rdm] = emptyNodes[emptyNodes.length-1];
//             emptyNodes[emptyNodes.length-1] = toPop;
//          }
//          var emptyNode = emptyNodes.pop(rdm);
//          console.log('emptyNode is: ', emptyNode);
//          if (emptyNode.child == 'left') {
//             emptyNode.parent.setLeft(curr);
//          } else {
//             emptyNode.parent.setRight(curr);
//          }
      }
      emptyNodes.push({parent:curr, child:'left'});
      emptyNodes.push({parent:curr, child:'right'});
      console.log('emptyNodes is now: ', emptyNodes);
		last = curr;
   }
   return root;
},

/**
fillWithInts: function (root, lvl) {
   if (root == null) {
       console.error(Xps.ERROR["02"]);
       return;evaluateTree
   }this.CONTEXT.currentScore = 1;
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
          currNode.setLeft(new Xps.Node(this.getInt(-20,20)));
      }
      if(currNode.right instanceof Xps.Node) {
          queue.push(currNode.right);
      } else {
          currNode.setRight(new Xps.Node(this.getInt(-20,20)));
      }
   }
   
},

//evaluateTreeTest
evaluateTreeTest: function () {
	var x = new Xps.Node('+');
	var y = new Xps.Node('+');
	var z = new Xps.Node('+');
	var t = new Xps.Node('+');
	x.setLeft(new Xps.Node(3));
	x.setRight(y);
	x.ctxid=0;
	y.setLeft(new Xps.Node(4));
	y.setRight(z);
	y.ctxid=1;
	z.setLeft(new Xps.Node(5));
	z.setRight(t);
	z.ctxid=2;
	t.setLeft(new Xps.Node(1));
	t.setRight(new Xps.Node(2));
	t.ctxid=3;
	console.log(this.evaluateTree(x, [x,y,z,t]));
},

evaluateTree: function (node, opNodes) {
	console.log('evaluateTree for node ', node);
	console.log(this.treefy(node,0));
	// This evaluation works only for expressions with + and - ops.
	// Recipy: when integer node return am empty list of transformations
	//         when node, get transformations for child nodes,
	//         combine them (caterisan product like) creating a set of transformations.
	//         The current node will then get tested for rotations (cw and ccw)
	//         for every possible transformation in the combined set.
	if (!node.isOperation()) { 
		console.log('evaluatedTree for node ', node);
		return [{tree: node, transformations: []}]; 
	}
	var leftTransformations = this.evaluateTree(node.left, opNodes);
	var rightTransformations = this.evaluateTree(node.right, opNodes);
	var transformations = [];
	for (var i = 0; i < leftTransformations.length; i++) {
		for (var j = 0; j < rightTransformations.length; j++) {
			var ltf = leftTransformations[i];
			var rtf = rightTransformations[j];
			console.log('combining ', ltf, ' and ', rtf);
			transformations[transformations.length] = {
				tree: node.ctxid,
				transformations: ltf.transformations.concat(rtf.transformations)
			};
		}
	}
	var newTransformations = [];
	for (var i = 0; i < transformations.length; i++) {
		var ctf = transformations[i];
		console.log('analyzing ', ctf);
		var distransformations = this.transform(ctf.transformations, opNodes);
		var currNode = node;
		var cwTfs = [];
		var cwDtfs = [];
		while (currNode.left != null && currNode.left.isOperation()) {
			console.log('can rotate clock wise');
			var cwTf = {id: currNode.ctxid, mirror: false, ccw: false};
			cwTfs.push(cwTf);
			console.log('cwTfs', cwTfs);
			var dtf = this.transform([cwTf],opNodes);
			console.log('dtf, ', dtf);
			cwDtfs.push(dtf[0]);
			console.log('cwDtfs, ', cwDtfs);
			var abctoconcat = [];
			console.log('tfsToContact',abctoconcat);
			for (var j = cwTfs.length - 1; j >= 0; j--) {
				abctoconcat.push(cwTfs[j]);
				console.log('tfsToContact',abctoconcat);
			}
			newTransformations.push({
				tree: currNode.parent.ctxid,
				transformations: abctoconcat.concat(ctf.transformations)
			});
			console.log(this.treefy(currNode.parent,0));
			currNode = currNode.parent;
		}
		this.transform(cwDtfs, opNodes);
		currNode = node;
		var ccwTfs = [];
		var ccwDtfs = [];
		while (currNode.right != null && currNode.right.isOperation()) {
			console.log('can rotate counter clock wise', this.treefy(currNode,0));
			var ccwTf = {id: currNode.ctxid, mirror: false, ccw: true};
			ccwTfs.push(ccwTf);
			console.log('ccwTfs', ccwTfs);
			var dtf = this.transform([ccwTf],opNodes);
			console.log('dtf, ', dtf);
			ccwDtfs.push(dtf[0]);
			console.log('ccwDtfs, ', ccwDtfs);
			var abctoconcat = [];
			console.log('tfsToContact',abctoconcat);
			for (var j = ccwTfs.length - 1; j >= 0; j--) {
				abctoconcat.push(ccwTfs[j]);
				console.log('tfsToContact',abctoconcat);
			}
			console.log('tfsToContact',abctoconcat);
			newTransformations.push({
				tree: currNode.parent.ctxid,
				transformations: abctoconcat.concat(ctf.transformations)
			});
			console.log('ccw parent', this.treefy(currNode.parent,0));
			currNode = currNode.parent;
		}
		this.transform(ccwDtfs, opNodes);
		this.transform(distransformations, opNodes);
	}
	console.log('evaluatedTree for node ', node);
	return transformations.concat(newTransformations);
},

htmlfy: function (node, withEq) {
   if (!(node instanceof Xps.Node)) return null;
   if (!node.isOperation()) {
		var withParentesis = node.value < 0 && node.parent != null && node.parent.value != this.OPERATION.DIV;
      return '<p class="number">'+(withParentesis ? '('+node.value+')' : node.value)+'</p>';
   } else {
      var htmlRet = '';
		var withParentesis = node.parent != null 
									&& node.parent instanceof Xps.Node 
									&& ((node.nature == Xps.NATURE.SUM 
									&& node.parent.value == Xps.OPERATION.MULT)
									|| (node.value == Xps.OPERATION.SUM
									&&	node.parent.value == Xps.OPERATION.SUB));
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
         htmlRet += '<table><tr>'+(withParentesis ? '<td class="parentesis"></td>' : '')
			+'<td>'+Xps.htmlfy(node.left, false)+'</td><td>'
			+'<div id = "xpsop'+node.ctxid+'" class="'
			+Xps.OPCLASSES[node.value]+'" onclick="Xps.opClick('+node.ctxid+')"/>'
			+'</td><td>'+Xps.htmlfy(node.right, false)+'</td>'
			+(withParentesis ? '<td class="parentesis"></td>' : '')
			+(withEq ? '<td><p class="number">=</p></td>' : '')+'</tr></table>';
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

appendNextButton: function () {
	var xpTable = document.getElementById('xpTable');
	var toAppend = '<tr><td>';
	toAppend += '<div id="nextButton" onclick="Xps.next()"><p class="text">Next...</p></div>'
	toAppend += '</td></td>';
	xpTable.innerHTML += toAppend;
},

appendExitButton: function () {
	var xpTable = document.getElementById('xpTable');
	var toAppend = '<tr><td>';
	toAppend += '<div id="exitButton" onclick="Xps.exit()"><p class="text">Exit</p></div>'
	toAppend += '</td></td>';
	xpTable.innerHTML += toAppend;
},

spanWarn: function(increase, value) {
	var spanDiv = document.getElementById('spanDiv');
	var spanWarnDiv = document.getElementById('spanWarnDiv');
	spanDiv.style.visibility = 'visible';
	spanDiv.style.zIndex = 300;
	spanWarnDiv.addEventListener('animationend', function(){spanDiv.style.visibility = 'hidden';spanWarnDiv.className='animateShim';spanDiv.style.zIndex = 0;}, false);
	spanWarnDiv.addEventListener('webkitAnimationEnd', function(){spanDiv.style.visibility = 'hidden';spanWarnDiv.className='animateShim';spanDiv.style.zIndex = 0;}, false);
	spanWarnDiv.addEventListener('oanimationend', function(){spanDiv.style.visibility = 'hidden';spanWarnDiv.className='animateShim';spanDiv.style.zIndex = 0;}, false);
	spanWarnDiv.addEventListener('MSAnimationEnd', function(){spanDiv.style.visibility = 'hidden';spanWarnDiv.className='animateShim';spanDiv.style.zIndex = 0;}, false);
	spanWarnDiv.className = '';
	if (increase) {
		spanWarnDiv.innerHTML = '<p class="text, animateNum">+'+value+'</p>';
		spanWarnDiv.className = 'animateInc';
	} else {
		spanWarnDiv.innerHTML = '<p class="text, animateNum">-'+value+'</p>';
		spanWarnDiv.className = 'animateDec';
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
			console.log(   'SOLUTION INDEX IS ', indice[key][0]);
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

score: function(right) {
	var variation = this.CONTEXT.currentScore;
	if (this.CONTEXT.state == 'SELECTING') {
		if (right) {
			this.CONTEXT.score[this.CONTEXT.score.length-1].select += variation;
			this.CONTEXT.currentScore = 1;
			this.CONTEXT.opToSolve--;
		} else {
		   variation = variation/2;
			this.CONTEXT.currentScore = variation;
		}
	} else if (this.CONTEXT.state == 'SOLVING') {
		if (right) {
			this.CONTEXT.score[this.CONTEXT.score.length-1].solve += variation;
			this.CONTEXT.currentScore = this.CONTEXT.opToSolve > 1 ? 1 : 0;
		} else {
			variation = variation/2;
			this.CONTEXT.currentScore = variation;
		}
	}
	return variation;
},

opClick: function(opid) {
	if (Xps.CONTEXT.state == 'SOLVING') return;
   if (Xps.select(opid)) {
		var scored = this.score(true);
		this.spanWarn(true, scored);
		Xps.changeState('SOLVING');
// 		Xps.askForSolution(opid);
	} else {
		var scored = this.score(false);
		this.spanWarn(false, scored);
		//Send WRONG message
	}
},

solSubmit: function(event, opid) {
	if (event.target.value == '') return;
	var op = this.CONTEXT.opNodes[opid];
	if (!op.isOperation()) return;
	var key = event.target.id.substring(2, event.target.id.length);
	console.log('key is ', key);
	var opSolution = this.CONTEXT.opSolutions[key];
	console.log('opSolutions is ', opSolution);
	var solutionTree = this.CONTEXT.solutionTrees[opSolution[0]];
	console.log('solutionTree is ', solutionTree);
	var distransformations = this.transform(solutionTree.transformations);
	var isOpRoot = (op.parent == null);
	console.log('op is root? ', isOpRoot)
	console.log('key is ', key);
	console.log('opSolution is ', opSolution);
	if (op.solve(parseInt(event.target.value))) {
		console.log('solutionTree.tree is', solutionTree.tree);
		this.CONTEXT.tree = this.CONTEXT.opNodes[solutionTree.tree];
		console.log('this.CONTEXT.tree is ',this.CONTEXT.tree);
		console.log('event',event);
// 		if (isOpRoot) Xps.CONTEXT.tree = Xps.CONTEXT.opNodes[opid];
		console.log('this.CONTEXT.tree is ', this.CONTEXT.tree);
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
		var increase = this.score(true);
		this.spanWarn(true, increase);
		this.changeState('SELECTING');
		if (!this.CONTEXT.tree.isOperation()) {
			console.log('!!!   !!!   !!!   FINISHED');
			if(this.EXPRESSIONS.length > 0)this.appendNextButton();
			this.appendExitButton();
		}
	} else {
		var decrease = this.score(false);
		this.spanWarn(false, decrease);
		this.transform(distransformations);
	}
},

transform: function(transformations, opNodes) {
	var distransformations = [];
	for (var j = transformations.length -1; j >= 0; j--) {
		var transformation = transformations[j];
		var transNode = (typeof opNodes != undefined  
								&& opNodes != null 
									? opNodes[transformation.id] 
									: this.CONTEXT.opNodes[transformation.id]);
		console.log('Transforming: ', transformation, ' opNodes ', opNodes);
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
			// This is for console.log sake only
			var solutionTreeRoot = transNode;
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
		console.log('Transformed: ', transformation);
// 		console.log('Transformed tree', '\n'+Xps.treefy(solutionTreeRoot, 0));
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

getInt: function (from, to) {
	return Math.floor(Math.random()*(to-from+1))+from;
},

isInt: function(node) {
	if (node instanceof Xps.Node && !node.isOperation()) return true;
	else return false;
},

isOp: function(node) {
	if (node instanceof Xps.Node && node.isOperation()) return true;
	else return false;
},

factorial: function(num) {
	var ans = 1;
	while(num > 0) {
		ans = ans*num;
		num--
	}
	return ans;
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
					if (this.parent != null) {
						if (this.parent.right.ctxid == this.ctxid) {
							this.parent.setRight(pivot);
							console.log('this.parent',this.parent,'pivot right', pivot);
						} else {
							this.parent.setLeft(pivot);
							console.log('this.parent',this.parent,'pivot left', pivot);
						}
					}
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
					if (this.parent != null) {
						if (this.parent.right.ctxid == this.ctxid) {
							this.parent.setRight(pivot);
							console.log('this.parent',this.parent,'pivot right', pivot);
						} else {
							this.parent.setLeft(pivot);
							console.log('this.parent',this.parent,'pivot left', pivot);
						}
					}
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
			var solution = eval('('+this.left.value+')'+this.value+'('+this.right.value+')');
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