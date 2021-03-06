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

debug: false,

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

/*
 * start function
 * 	
 * 	PARAMS
 * 		parentId: xpress container id
 * 	
 * 	- prints the game screen inside the container
 */
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

/*
 * play function 
 * 
 * 	- hides the start screen,
 * 	- shows the expressions screen
 * 	- starts the expressions data base
 * 	- prepares the first expression to be tested
 * 	- prints the prepared expression.
 */
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

/*
 * next function
 * 
 * 	- clears the expressions table
 * 	- prepares the next expression to be tested
 * 	- prints the prepared expression.
 */
next: function() {
	var xpTable = document.getElementById('xpTable');
	xpTable.innerHTML = '';
	this.newXp();
	this.appendXp(Xps.CONTEXT.tree);
},

/*
 * exit function
 * 
 * 	- clears the expressions table
 * 	- hides the expressions screen
 * 	- generates and print the score chart
 */
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
		scoredSerie.data.push(null);
		toScoreSerie.data.push({y:5});
		totalScore.data.push(null);
	}
	scoredSerie.data.push(0);
	toScoreSerie.data.push(0);
	totalScore.data.push(total/5);
	//console.log('series are: ', {scored: scoredSerie, toScore: toScoreSerie, total: totalScore});
	var hc = new Highcharts.Chart({
		chart : {
			renderTo : Xps.CONTAINERID,
			type     : 'column'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: ['1', '2', '3', '4', '5', 'TOTAL'],
			plotBands: [{
				color: 'rgba(255,0,0,0.25)',
				from: 4.5-missing,
				to: 4.5,
				label: {
					text: 'Work to do...',
					align: 'left',
					y: 30,
					x: 5,
					style: {
						fontSize: '32px',
						fontFamily: '"Arial Black", Gadget, sans-serif',
						fontWeight: 'bold',
						color: 'white'
					}
				}
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
		series: [scoredSerie,totalScore]
	});
},

/*
 * newXp function
 * 
 * 	- picks randomly one of the expressions on the DB
 * 		OR generates a new expression
 * 	- sets the expression to the game context
 */
newXp: function() {
	// Getting expressions from 'DB'
	var rdm = Math.round(Math.random()*(Xps.EXPRESSIONS.length-1));
	//console.log('rdm is ', rdm);
	if (rdm != Xps.EXPRESSIONS.legnth-1) {
		var toLast = Xps.EXPRESSIONS[rdm];
		Xps.EXPRESSIONS[rdm] = Xps.EXPRESSIONS[Xps.EXPRESSIONS.length-1];
		Xps.EXPRESSIONS[Xps.EXPRESSIONS.length-1] = toLast;
	}
	var xp = this.EXPRESSIONS.pop();
	this.toContext(xp);
	// Using + and - expression generation
// 	var newXp = this.makeExp(5,[Xps.OPERATION.SUM, Xps.OPERATION.SUB]);
// 	//console.log('newXp is ', newXp);
// 	//console.log('Newly created xp: ', this.treefy(newXp,0));
// 	this.toContext(newXp);
	//console.log(this.treefy(this.CONTEXT.tree,0));
// 	Code for testing specific expressions
// 	this.toContext(this.EXPRESSIONS[3]);
},

/*
 * makeExp function
 * 
 * 	PARAMS
 * 		lvl: number of operations
 * 		operations: array of possible operations
 * 	RETURN
 * 		generated tree
 * 
 * 	- generates an operation only tree
 * 	- fills the generated tree with integers
 */
makeExp: function (lvl, operations) {
   var root = Xps.makeOps(lvl, operations);
   Xps.fillWithInts(root);
   return root;
},

/*
 * toContext function
 * 
 * 	PARAMS
 * 		expression: the expression to be set into the game context,
 * 			either a expression object or a node
 * 	
 * 	- when the expression is a node
 * 		- generates an array with all the nodes
 * 		- evaluates every possible solution tree
 * 	- sets the expression into the game context
 */
toContext: function (expression) {
	if (expression instanceof Xps.Node) {
		var opNodes = [];
		var count = 0;
		var nodeQ = new Queue();
		nodeQ.enqueue(expression);
		while (!nodeQ.isEmpty()) {
			var currNode = nodeQ.dequeue();
			currNode.ctxid = count;
			//console.log('adding node with ctxid ' + count, currNode);
			count++;
			//console.log('adding opnode to opnodes', currNode);
			opNodes.push(currNode);
			if (currNode.left != null && currNode.left.isOperation()) nodeQ.enqueue(currNode.left);
			if (currNode.right != null && currNode.right.isOperation()) nodeQ.enqueue(currNode.right);
		}
		//console.log('opNodes is ', opNodes);
		//console.log('!@#$% !@#$% xp: ', expression, ' | opNodes: ', opNodes);
		var solutionTrees = this.evaluateTreeIt(expression, opNodes);
		//console.log('solutionTrees is',solutionTrees);
// 		var solutionTrees = [];
		var catalanNumber = Xps.factorial(opNodes.length*2)/(Xps.factorial(opNodes.length+1)*Xps.factorial(opNodes.length));
		//console.log('n is ', opNodes.length, ', catalan number is ', catalanNumber, ', solutions trees count is ', solutionTrees.length);
		expression = {
			tree: expression,
			opNodes: opNodes,
			solutionTrees: solutionTrees
		};
		//console.log('expression is ', expression);
	}
   this.CONTEXT.tree = expression.tree;
	this.CONTEXT.tree.link();
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

/*
 * changeState function
 * 	
 * 	PARAMS
 * 		state: new state to be set
 * 
 * 	- changes the current game state (SELECTING, SOLVING)
 */
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
				//console.log('Operation ', op, ' in operations is not valid');
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
	var setLeft = Math.floor(Math.random()*2) == 0;
	//console.log('setLeft is ', setLeft);
   for (var i = 0; i < lvl; i++) {
		var operation = operations[Math.floor(Math.random()*operations.length)];
      var curr = new Xps.Node(operation);
// 		curr.ctxid = i;
      if (root == null) root = curr;
		else {
			last.nextNode = curr;
			// Building a tree that can only rotate ccw.
// 			if (setLeft) last.setLeft(curr);
// 			else last.setRight(curr);
			// Creating every possible tree
         rdm = Math.ceil(Math.random()*emptyNodes.length)-1;
//          //console.log('rdm for emptyNodes is: ', rdm);
//          //console.log('emptyNode[rdm]', emptyNodes[rdm]);
//          //console.log('rdm for emptyNodes is: ', rdm);
         if (rdm != emptyNodes.length-1) {
            var toPop = emptyNodes[rdm];
            emptyNodes[rdm] = emptyNodes[emptyNodes.length-1];
            emptyNodes[emptyNodes.length-1] = toPop;
         }
         var emptyNode = emptyNodes.pop(rdm);
//          //console.log('emptyNode is: ', emptyNode);
         if (emptyNode.child == 'left') {
            emptyNode.parent.setLeft(curr);
         } else {
            emptyNode.parent.setRight(curr);
         }
      }
      emptyNodes.push({parent:curr, child:'left'});
      emptyNodes.push({parent:curr, child:'right'});
      //console.log('emptyNodes is now: ', emptyNodes);
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
evaluateTreeRecTest: function (from, to, tests, operations) {
	//Avoiding an infinite loop
	if (from > to || tests < 0) return;
	if (typeof operations == 'undefined') operations = [Xps.OPERATION.SUM,Xps.OPERATION.SUB,Xps.OPERATION.MULT,Xps.OPERATION.DIV];
	var testData = '';
	var rawData = '';
	for (var i = from; i <= to; i++) {
		for (var j = 0; j < tests; j++) {
			var xp = this.makeExp(i,operations);
			var opNodes = [];
			var count = 0;
			var nodeQ = new Queue();
			nodeQ.enqueue(xp);
			while (!nodeQ.isEmpty()) {
				var currNode = nodeQ.dequeue();
				currNode.ctxid = count;
				count++;
				opNodes.push(currNode);
				if (currNode.left != null && currNode.left.isOperation()) nodeQ.enqueue(currNode.left);
				if (currNode.right != null && currNode.right.isOperation()) nodeQ.enqueue(currNode.right);
			}
			var start = Date.now();
			var xpSols = this.evaluateTreeRec(xp, opNodes);
			var diff = Date.now() - start;
			var catalanNumber = Xps.factorial(i*2)/(Xps.factorial(i+1)*Xps.factorial(i));
			if (testData != '') {
				testData += '\n';
// 				rawData += '\n';
				rawData += ',';
			}
			testData += 'n is ' + i + ' | cn is ' + catalanNumber + ' | sn is ' + xpSols.length + ' [' + diff + 'ms]';
			rawData += '['+i+','+diff+']';
		}
	}
	console.log('###############################################################');
	console.log('################## RESULTS ARE ################################');
	console.log('###############################################################');
	console.log('\n\n'+testData+'\n\n'+rawData);
// 	var x = new Xps.Node('+');
// 	var y = new Xps.Node('+');
// 	var z = new Xps.Node('+');
// 	var t = new Xps.Node('+');
// 	var s = new Xps.Node('+');
// 	x.setLeft(new Xps.Node(3));
// 	x.setRight(new Xps.Node(1));
// 	x.ctxid=0;
// 	y.setLeft(x);
// 	y.setRight(z);
// 	y.ctxid=1;
// 	z.setLeft(new Xps.Node(5));
// 	z.setRight(t);
// 	z.ctxid=2;
// 	t.setLeft(new Xps.Node(7));
// 	t.setRight(new Xps.Node(2));
// 	t.ctxid=3;
// 	var x = new Xps.Node('+');
// 	var y = new Xps.Node('+');
// 	var z = new Xps.Node('+');
// 	var t = new Xps.Node('+');
// 	x.setLeft(y);
// 	x.setRight(new Xps.Node(1));
// 	x.ctxid=0;
// 	y.setLeft(z);
// 	y.setRight(new Xps.Node(3));
// 	y.ctxid=1;
// 	z.setLeft(t);
// 	z.setRight(new Xps.Node(5));
// 	z.ctxid=2;
// 	t.setLeft(new Xps.Node(7));
// 	t.setRight(new Xps.Node(2));
// 	t.ctxid=3;
// 	//console.log('!@#$% !@#$% xp: ', y, ' | opNodes: ', [x,y,z,t]);
// 	var sols = this.evaluateTreeRec(x, [x,y,z,t]);
// 	//console.log(sols);
// 	var catalanNumber = Xps.factorial(4*2)/(Xps.factorial(4+1)*Xps.factorial(4));
// 	//console.log('n is ', 4, ', catalan number is ', catalanNumber, ', solutions trees count is ', sols.length);
},

//evaluateTreeTest
evaluateTreeItTest: function (from, to, tests, operations) {
	//Avoiding an infinite loop
	if (from > to || tests < 0) return;
	if (typeof operations == 'undefined') operations = [Xps.OPERATION.SUM,Xps.OPERATION.SUB,Xps.OPERATION.MULT,Xps.OPERATION.DIV];
	var testData = '';
	var rawData = '';
	for (var i = from; i <= to; i++) {
		for (var j = 0; j < tests; j++) {
			var xp = this.makeExp(i,operations);
			var opNodes = [];
			var count = 0;
			var nodeQ = new Queue();
			nodeQ.enqueue(xp);
			while (!nodeQ.isEmpty()) {
				var currNode = nodeQ.dequeue();
				currNode.ctxid = count;
				count++;
				opNodes.push(currNode);
				if (currNode.left != null && currNode.left.isOperation()) nodeQ.enqueue(currNode.left);
				if (currNode.right != null && currNode.right.isOperation()) nodeQ.enqueue(currNode.right);
			}
			var start = Date.now();
			var xpSols = this.evaluateTreeIt(xp, opNodes);
			var diff = Date.now() - start;
			var catalanNumber = Xps.factorial(i*2)/(Xps.factorial(i+1)*Xps.factorial(i));
			if (testData != '') {
				testData += '\n';
// 				rawData += '\n';
				rawData += ',';
			}
			testData += 'n is ' + i + ' | cn is ' + catalanNumber + ' | sn is ' + xpSols.length + ' [' + diff + 'ms]';
			rawData += '['+i+','+diff+']';
		}
	}
	console.log('###############################################################');
	console.log('################## RESULTS ARE ################################');
	console.log('###############################################################');
	console.log('\n\n'+testData+'\n\n'+rawData);
	
	
// 	var x = new Xps.Node('+');
// 	var y = new Xps.Node('+');
// 	var z = new Xps.Node('+');
// 	var t = new Xps.Node('+');
// 	x.setLeft(new Xps.Node(3));
// 	x.setRight(new Xps.Node(1));
// 	x.ctxid=0;
// 	y.setLeft(x);
// 	y.setRight(z);
// 	y.ctxid=1;
// 	z.setLeft(new Xps.Node(5));
// 	z.setRight(t);
// 	z.ctxid=2;
// 	t.setLeft(new Xps.Node(7));
// 	t.setRight(new Xps.Node(2));
// 	t.ctxid=3;
// 	var x = new Xps.Node('+');
// 	var y = new Xps.Node('+');
// 	var z = new Xps.Node('+');
// 	var t = new Xps.Node('+');
// 	var r = new Xps.Node('+');
// // 	var s = new Xps.Node('+');
// 	x.setLeft(y);
// 	x.setRight(new Xps.Node(20));
// 	x.ctxid=0;
// 	y.setLeft(new Xps.Node(10));
// 	y.setRight(z);
// 	y.ctxid=1;
// 	z.setLeft(t);
// 	z.setRight(r);
// 	z.ctxid=2;
// 	t.setLeft(new Xps.Node(-19));
// 	t.setRight(new Xps.Node(17));
// 	t.ctxid=3;
// 	r.setLeft(new Xps.Node(14));
// 	r.setRight(new Xps.Node(-16));
// 	r.ctxid=4;
// // 	s.setLeft(new Xps.Node(12));
// // 	s.setRight(new Xps.Node(-19));
// // 	s.ctxid=3;
// 	//console.log('!@#$% !@#$% xp: ', y, ' | opNodes: ', [x,y,z,t]);
// 	var sols = this.evaluateTreeIt(x, [x,y,z,t,r]);
// 	//console.log(sols);
// 	var catalanNumber = Xps.factorial(5*2)/(Xps.factorial(5+1)*Xps.factorial(5));
// 	//console.log('n is ', 5, ', catalan number is ', catalanNumber, ', solutions trees count is ', sols.length);
},



getTransKey: function (transformations) {
	//console.log('key for', transformations );
	var key = '';
	for(var i = 0; i < transformations.transformations.length; i++) {
		var trans = transformations.transformations[i];
		if (i != 0) key += '|';
		key += trans.id+'_'+trans.ccw;
	}
	return key;
},

getSolKey: function (node) {
	var solKey = '';
	var lArr = this.lvlArray(node);
	for (var i = 0; i < lArr.length; i++) {
		if (i > 0) solKey += '|';
		solKey += lArr[i];
	}
	return solKey;
},

evaluateTreeRec: function (node, opNodes) {
	//console.log('evaluateTree for node ', node);
	//console.log(this.treefy(node,0));
	var begin = Date.now();
	var transKeys = {};
	// This evaluation works only for expressions with + and - ops.
	// Recipy: when integer node return am empty list of transformations
	//         when node, get transformations for child nodes,
	//         combine them (caterisan product like) creating a set of transformations.
	//         The current node will then get tested for rotations (cw and ccw)
	//         for every possible transformation in the combined set.
	if (!node.isOperation()) { 
		//console.log('evaluatedTree for node ', node);
		return [{tree: node, transformations: []}]; 
	}
	//This code will be duplicated inside every while iteration
	var leftTransformations = this.evaluateTreeRec(node.left, opNodes);
	var rightTransformations = this.evaluateTreeRec(node.right, opNodes);
	var transformations = [];
	for (var i = 0; i < leftTransformations.length; i++) {
		for (var j = 0; j < rightTransformations.length; j++) {
			var ltf = leftTransformations[i];
			var rtf = rightTransformations[j];
			//console.log('combining ', ltf, ' and ', rtf);
			var transToAdd = {
				tree: node.ctxid,
				transformations: ltf.transformations.concat(rtf.transformations)
			};
			var key = this.getTransKey(transToAdd);
			//console.log(key + ' for', transToAdd);
			if (typeof transKeys[key] == 'undefined') {
				transKeys[key] = transToAdd;
			}
			transformations[transformations.length] = transToAdd;
		}
	}
	var newTransformations = [];
	for (var i = 0; i < transformations.length; i++) {
		var ctf = transformations[i];
		//console.log('analyzing ', ctf);
		var distransformations = this.transform(ctf.transformations, opNodes);
		var currNode = node;
		var cwTfs = [];
		var cwDtfs = [];
		while (currNode.left != null && currNode.left.isOperation()) {
			//console.log('can rotate clock wise');
			var cwTf = {id: currNode.ctxid, mirror: false, ccw: false};
			cwTfs.push(cwTf);
			//console.log('cwTfs', cwTfs);
			var dtf = this.transform([cwTf],opNodes);
			//console.log('dtf, ', dtf);
			cwDtfs.push(dtf[0]);
			//console.log('cwDtfs, ', cwDtfs);
			var abctoconcat = [];
			//console.log('tfsToContact',abctoconcat);
			for (var j = cwTfs.length - 1; j >= 0; j--) {
				abctoconcat.push(cwTfs[j]);
				//console.log('tfsToContact',abctoconcat);
			}
			var newTransToAdd = {
				tree: currNode.parent.ctxid,
				transformations: abctoconcat.concat(ctf.transformations)
			};
			newTransformations.push(newTransToAdd);
			var newTransKey = this.getTransKey(newTransToAdd);
			//console.log(newTransKey + ' for', newTransToAdd);
			if (typeof transKeys[newTransKey] == 'undefined') {
				transKeys[newTransKey] = newTransToAdd;
			}
			var cwLeftTransformations = this.evaluateTreeRec(currNode.parent.left, opNodes);
			var cwRightTransformations = this.evaluateTreeRec(currNode, opNodes);
			for (var i = 0; i < cwLeftTransformations.length; i++) {
				for (var j = 0; j < cwRightTransformations.length; j++) {
					var ltf = cwLeftTransformations[i];
					var rtf = cwRightTransformations[j];
					//console.log('combining ', ltf, ' and ', rtf);
					var cwNewTransToAdd = {
						tree: node.ctxid,
						transformations: ltf.transformations.concat(rtf.transformations,abctoconcat)
					};
					var cwNewTransKey = this.getTransKey(cwNewTransToAdd);
					if (typeof transKeys[cwNewTransKey] == 'undefined') {
						transKeys[cwNewTransKey] = cwNewTransToAdd;
					}
				}
			}
			//console.log(this.treefy(currNode.parent,0));
			currNode = currNode.parent;
		}
		this.transform(cwDtfs, opNodes);
		currNode = node;
		var ccwTfs = [];
		var ccwDtfs = [];
		while (currNode.right != null && currNode.right.isOperation() && currNode.value == this.OPERATION.SUM) {
			//console.log('can rotate counter clock wise\n', this.treefy(currNode,0));
			var ccwTf = {id: currNode.ctxid, mirror: false, ccw: true};
			ccwTfs.push(ccwTf);
			//console.log('ccwTfs', ccwTfs);
			var dtf = this.transform([ccwTf],opNodes);
			//console.log('dtf, ', dtf);
			ccwDtfs.push(dtf[0]);
			//console.log('ccwDtfs, ', ccwDtfs);
			var abctoconcat = [];
			//console.log('tfsToContact',abctoconcat);
			for (var j = ccwTfs.length - 1; j >= 0; j--) {
				abctoconcat.push(ccwTfs[j]);
				//console.log('tfsToContact',abctoconcat);
			}
			//console.log('tfsToContact',abctoconcat);
			var newTransToAdd = {
				tree: currNode.parent.ctxid,
				transformations: abctoconcat.concat(ctf.transformations)
			};
			newTransformations.push(newTransToAdd);
			var newTransKey = this.getTransKey(newTransToAdd);
			//console.log(newTransKey + ' for', newTransToAdd);
			if (typeof transKeys[newTransKey] == 'undefined') {
				transKeys[newTransKey] = newTransToAdd;
			}
			var ccwLeftTransformations = this.evaluateTreeRec(currNode, opNodes);
			var ccwRightTransformations = this.evaluateTreeRec(currNode.parent.right, opNodes);
			for (var i = 0; i < ccwLeftTransformations.length; i++) {
				for (var j = 0; j < ccwRightTransformations.length; j++) {
					var ltf = ccwLeftTransformations[i];
					var rtf = ccwRightTransformations[j];
					//console.log('combining ', ltf, ' and ', rtf);
					var ccwNewTransToAdd = {
						tree: node.ctxid,
						transformations: ltf.transformations.concat(rtf.transformations,abctoconcat)
					};
					var ccwNewTransKey = this.getTransKey(ccwNewTransToAdd);
					if (typeof transKeys[ccwNewTransKey] == 'undefined') {
						transKeys[ccwNewTransKey] = ccwNewTransToAdd;
					}
				}
			}
			//console.log('ccw parent', this.treefy(currNode.parent,0));
			currNode = currNode.parent;
		}
		this.transform(ccwDtfs, opNodes);
		this.transform(distransformations, opNodes);
	}
	//console.log('evaluatedTree for node ', node);
	var rtnTrans = [];
	for (key in transKeys) rtnTrans.push(transKeys[key]);
	//console.log('transKeys is ',JSON.stringify(transKeys));
	var diff = Date.now() - begin;
	//console.log('rec time ' + diff + ' ms');
	return rtnTrans;
// 	return transformations.concat(newTransformations);
},

evaluateTreeIt: function (node, opNodes) {
	var begin = Date.now();
	if (this.debug) {
		console.debug('[!] A arvore recebida para avaliação é a primeira solução possível');
		console.debug('[!] A primeira solução é adicionada ao mapa de árvores');
		console.debug('[!] A primeira solução é adicionada a fila para avaliação de soluções');
	}
	/*
	 * The solutions map (solsKeys) is inicialized
	 * with the default solution, the current tree.
	 */
	var firstKey = this.getSolKey(node);
	var solsKeys = {};
	solsKeys[firstKey] = {tree: node.ctxid, transformations: []};
	if (this.debug) {
		console.debug('[!] Chave da solução: ' + firstKey);
		console.debug('[!] Árvore da solução:\n\n' + this.treefy(node,0));
	}
	/*
	 * The solutions queue is inicialized
	 * with the default solution.
	 */
	var solsQueue = new Queue();
	solsQueue.enqueue({tree: node.ctxid, transformations: []});
	var count = 0;
	var solsCount = 1;
	/*
	 * While the solutions queue is not empty then
	 */
	while(!solsQueue.isEmpty()) {
		var inCount = 0;
		//console.log(//console.log('Count is ', count++));
		/*
		 * The first solution in the queue is dequeued.
		 * The tree is transformed to the dequeued solution.
		 * The inverse transformation is stored to be used later.
		 * A list of all the nodes is created where 
		 * 	every node has its parent before it on the list
		 * The created list is iterated 
		 * 	from its last node 
		 * 	to its first
		 * This way the evaluation works bottom up
		 * The nodeTrans map stores the possible 
		 * subtrees for every operation node.
		 */
		var currSol = solsQueue.dequeue();
		var solDtfs = this.transform(currSol.transformations, opNodes);
		var lArr = this.lvlArray(opNodes[currSol.tree]);
		if (this.debug) {
			console.debug('[!]   Existe solução na fila a ser avaliada');
			console.debug('[!]   A solução S1 a ser avaliada é a seguinte:\n\n' + this.treefy(opNodes[currSol.tree],0));
			console.debug('[!]   Para a solução a ser avaliada a ordem será esta lista [' + lArr + '] do último até o primeiro');
		}
		var nodeTrans = {};
		for (var i = lArr.length-1; i >=0; i--) {
			/*
			 * The iteration current node is selected to be evaluated.
			 * A cartesian product of the sets of possible solution trees 
			 * for the left and right child nodes is created,
			 * containing all the combinations on possible subtrees.
			 * The cartesian product is iterated for evaluation of each element.
			 */
			var currNode = opNodes[lArr[i]];
			var lsols;
			if (currNode.left.isOperation()) lsols = nodeTrans['op_'+currNode.left.ctxid];
			else lsols = [{tree: currNode.left, transformations:[]}];
			var rsols;
			if (currNode.right.isOperation()) rsols = nodeTrans['op_'+currNode.right.ctxid];
			else rsols = [{tree: currNode.right, transformations:[]}];
			nodeTrans['op_'+currNode.ctxid] = [];
			if (this.debug) {
				console.debug('[!]      O nó ' + lArr[i] + ' será avaliado para a árvore corrente');
				console.debug('[!]      A subárvore cuja raíz é este nó é:\n\n'+this.treefy(currNode, 0));
				console.debug('[!]      O mapa de soluções por nó recebe a entrada de uma lista vazia para o nó corrente');
			}
			//!!!!!!!!!!1
			for (var j = 0; j < lsols.length; j++) {
				for (var k = 0; k < rsols.length; k++) {
					/*
					 * The current solution element generated by the cartesian product
					 * is selected and added as a possible transformation for the current node.
					 * The current tree is then transformed with the current solution element
					 * ant the set for reverting such transformation is stored for later.
					 */
					var ltf = lsols[j];
					var rtf = rsols[k];
					var solToAdd = {
						tree: currNode.ctxid,
						transformations: ltf.transformations.concat(rtf.transformations,currSol.transformations)
					};
					(nodeTrans['op_'+currNode.ctxid]).push(solToAdd);
					var distransformations = this.transform(solToAdd.transformations, opNodes);
					if (this.debug) {
						console.debug('[!]         A solução S2 corrente do produto cartesiano das \n'+
										  '[!]         transformações dos filhos do nó corrente resulta na árvore:\n\n'+this.treefy(currNode,0)+'\n'+
										  '[!]         S3, combinação de S1 e S2, é adicionada à lista de soluções\n'+
										  '[!]         para o nó corrente no mapa de soluções por nó');
					}
					/*
					 * When the evaluation current node is the root
					 * the current solution tree key is tested against
					 * the solutions map.
					 * When the solution is not in the map it is added to it
					 * and enqueued in the main solutions queue
					 */
					if (currNode.parent == null) {
						inCount++;
						var solKey = this.getSolKey(opNodes[solToAdd.tree]);
						if (this.debug) {
							console.debug('[!]         Como o nó corrente é raíz a solução S3 \n'+
											  '[!]         será testada contra o mapa de soluções com a chave: ' + solKey);
						}
						if (typeof solsKeys[solKey] == 'undefined') {
							if (this.debug) {
								console.debug('[!]         A solução S3 não está no mapa e será adicionada ao mesmo,\n'+
												  '[!]         assim como colocada na fila de soluções para avaliação.');
							}
							solsKeys[solKey] = solToAdd;
							solsQueue.enqueue(solToAdd);
						}
					}
// 					var distransformations = this.transform(solToAdd.transformations, opNodes);
					/*
					 * As long as the current node can be rotated cw
					 * it will be rotated and evaluated
					 * Once more the set for reverting the rotation
					 * is stored for reverting it later.
					 * The node that will be evaluated for rotation
					 * changes from current node to its parent 
					 * when a rotation is made.
					 * Such node is referenced as while node
					 * the initially points to current node.
					 * The new set of transformations 
					 * now includes the new possible rotations
					 * and is added as possible solution for the current node.
					 * If the pivot node involved in the cw rotation
					 * is now a root node the newly created solution
					 * will be tested by using it's key against the solutions map.
					 * If not there, again, a solution is added to the map
					 * associated with it's key and the solution itself is enqueued
					 * in the possible solutions queue that is used to 
					 * controll the main iteration of this algorithm.
					 */
					if (this.debug) {
						console.debug('[!]         O nó corrente será testado para rotações no sentido horário');
					}
					var cwTfs = [];
					var cwDtfs = [];
					var whileNode = currNode;
					while (whileNode.left != null 
								&& whileNode.left.isOperation()) {
						if (this.debug) {
							console.debug('[!]            O nó corrente pode ser girado no sentido horário');
						}
						//console.log('can rotate clock wise');
						var cwTf = {id: whileNode.ctxid, mirror: false, ccw: false};
						cwTfs.push(cwTf);
						var dtf = this.transform([cwTf],opNodes);
						cwDtfs.push(dtf[0]);
						if (this.debug) {
							console.debug(
								'[!]            A subárvore para o nó corrente é:\n\n'+this.treefy(whileNode.parent,0)+'\n'+
								'[!]            S4, combinação de S3 com todas as rotações horárias já executadas\n'+
								'[!]            é adicionada à lista de soluções\n'+
								'[!]            para o nó corrente no mapa de soluções por nó'
							);
						}
						var abctoconcat = [];
						for (var l = cwTfs.length - 1; l >= 0; l--)
							abctoconcat.push(cwTfs[l]);
						var newSolToAdd = {
							tree: whileNode.parent.ctxid,
							transformations: abctoconcat.concat(solToAdd.transformations,currSol.transformations)
						};
						(nodeTrans['op_'+currNode.ctxid]).push(newSolToAdd);
// 						if (opNodes[newSolToAdd.tree].parent == null) {
						if (whileNode.parent.parent == null) {
							inCount++;
							var solKey = this.getSolKey(opNodes[newSolToAdd.tree]);
							if (this.debug) {
								console.debug('[!]            Como o pai do nó corrente é raíz a solução S4 \n'+
												  '[!]            será testada contra o mapa de soluções com a chave: ' + solKey);
							}
							if (typeof solsKeys[solKey] == 'undefined') {
								if (this.debug) {
									console.debug('[!]            A solução S4 não está no mapa e será adicionada ao mesmo,\n'+
													  '[!]            assim como colocada na fila de soluções para avaliação.');
								}
								solsKeys[solKey] = newSolToAdd;
								solsQueue.enqueue(newSolToAdd);
							}
						}
						if (this.debug) {
							console.debug('[!]            O nó corrente para a próxima iteração é o pai do corrente nesta iteração');
						}
						whileNode = whileNode.parent;
					}
					/*
					 * After making every possible cw rotation
					 * all rotations made are reverted so the tree
					 * is set to the state it was before the cw evaluation.
					 * The following iteration works just like the previous one,
					 * but now evaluating the possible ccw rotations.
					 * The logic is the same as the cw evaluation altough
					 * the test for rotation depends if the rotated node
					 * is not a subtraction (or it is a sum).
					 */
					if (this.debug) {
						console.debug(
						);
					}
					this.transform(cwDtfs, opNodes);
					if (this.debug) {
						console.debug(
							'[!]         Todas as rotações horárias feitas são revertidas.\n'+
							'[!]         O nó corrente volta a ser o nó corrente antes do teste de rotações\n' +
							'[!]         O nó corrente será testado para rotações no sentido anti-horário'
						);
					}
					var ccwTfs = [];
					var ccwDtfs = [];
					whileNode = currNode;
					while (whileNode.right != null 
								&& whileNode.right.isOperation() 
								&& whileNode.value == this.OPERATION.SUM) {
						//console.log('can rotate counter clock wise');
						if (this.debug) {
							console.debug('[!]            O nó corrente pode ser girado no sentido anti-horário');
						}
						var ccwTf = {id: whileNode.ctxid, mirror: false, ccw: true};
						ccwTfs.push(ccwTf);
						var dtf = this.transform([ccwTf],opNodes);
						ccwDtfs.push(dtf[0]);
						if (this.debug) {
							console.debug(
								'[!]            A subárvore para o nó corrente é:\n'+this.treefy(whileNode.parent,0)+'\n'+
								'[!]            S5, combinação de S3 com todas as rotações anti-horárias já executadas\n'+
								'[!]            é adicionada à lista de soluções\n'+
								'[!]            para o nó corrente no mapa de soluções por nó'
							);
						}
						var abctoconcat = [];
						for (var l = ccwTfs.length - 1; l >= 0; l--)
							abctoconcat.push(ccwTfs[l]);
						var newSolToAdd = {
							tree: whileNode.parent.ctxid,
							transformations: abctoconcat.concat(solToAdd.transformations,currSol.transformations)
						};
						(nodeTrans['op_'+currNode.ctxid]).push(newSolToAdd);
// 						if (opNodes[newSolToAdd.tree].parent == null) {
						if (whileNode.parent.parent == null) {
							inCount++;
							var solKey = this.getSolKey(opNodes[newSolToAdd.tree]);
							if (this.debug) {
								console.debug('[!]            Como o pai do nó corrente é raíz a solução S5 \n'+
												  '[!]            será testada contra o mapa de soluções com a chave: ' + solKey);
							}
							if (typeof solsKeys[solKey] == 'undefined') {
								if (this.debug) {
									console.debug('[!]            A solução S5 não está no mapa e será adicionada ao mesmo,\n'+
													  '[!]            assim como colocada na fila de soluções para avaliação.');
								}
								solsKeys[solKey] = newSolToAdd;
								solsQueue.enqueue(newSolToAdd);
							}
						}
						if (this.debug) {
							console.debug('[!]            O nó corrente para a próxima iteração é o pai do corrente nesta iteração');
						}
						whileNode = whileNode.parent;
					}
					/*
					 * Again, all transformations made ccw
					 * during the ccw evaluation are reverted,
					 * just like done after the cw evaluation.
					 * Before the loop on the current cartesian product
					 * solution element end such solution transformations
					 * are reverted so the tree is set to the state
					 * it was before this iteration.
					 * This loop now will work on the next possible solution
					 * found with the cartesian product.
					 */
					this.transform(ccwDtfs, opNodes);
					if (this.debug) {
						console.debug(
							'[!]         Todas as rotações anti-horárias feitas são revertidas.'
						);
					}
					this.transform(distransformations, opNodes);
					if (this.debug) {
						console.debug(
						'[!]         As tranformações feitas pertencentes a solução S3 são revertidas.'
						);	
					}
					
				}
			}
		}
		/*
		 * Before the main iteration on the possible solutions queue
		 * ends the transformations contained by the solution,
		 * were previously aplied, are reverted
		 * and the tree is set to its initial state.
		 */
		this.transform(solDtfs, opNodes);
		if (this.debug) {
			console.debug(
				'[!]   As tranformações feitas pertencentes a solução S1 são revertidas.\n'+
				'[!]   A árvore volta ao seu estado inicial.'
			);
		}
	}
	var rtnSols = [];
	for (key in solsKeys) rtnSols.push(solsKeys[key]);
	var diff = Date.now() - begin;
	//console.log('it time ' + diff + ' ms');
	/*
	 * The evaluation function ends returning 
	 * the entry set contained in the solutions map.
	 */
	if (this.debug) {
		console.debug(
			'[!]As soluções existentes no mapa de soluções são retornadas.'
		);
	}
	return rtnSols;
	//console.log(solsKeys);
	//console.log(solsKeys);
// 	return nodeTrans['op_'+node.ctxid];
},

lvlArray: function (node) {
	var lArr = [];
	var queue = new Queue();
	queue.enqueue(node);
	while(!queue.isEmpty()) {
		var toQ = queue.dequeue();
		lArr.push(toQ.ctxid);
		if (toQ.left != null && toQ.left.isOperation()) queue.enqueue(toQ.left);
		if (toQ.right != null && toQ.right.isOperation()) queue.enqueue(toQ.right);
	}
	return lArr;
},

htmlfy: function (node, withEq, test) {
   if (!(node instanceof Xps.Node)) return null;
   if (!node.isOperation()) {
		var withParentesis = node.value < 0 && node.parent != null && node.parent.value != this.OPERATION.DIV && node.prev != null;
		var leftNegative = test 
								&& !node.isOperation() 
								&& node.prev != null 
								&& node.prev.value == this.OPERATION.SUB
								&& node.prev.ctxid != node.parent.parent.ctxid
								&& !node.prev.right.parenthesized()
								&& node.prev.right.value != this.OPERATION.DIV;
		if (test) {
			//console.log('leftNegative ', leftNegative, ' for node ', node);
		}
      return '<p class="number">'+(leftNegative ? '-' : '')+(withParentesis ? '('+node.value+')' : node.value)+'</p>';
   } else {
      var htmlRet = '';
		var withParentesis = node.parent != null 
									&& node.parent instanceof Xps.Node 
									&& ((node.nature == Xps.NATURE.SUM 
									&& node.parent.value == Xps.OPERATION.MULT)
									|| (node.nature == Xps.NATURE.SUM
									&&	node.parent.value == Xps.OPERATION.SUB
									&& node.parent.right.ctxid == node.ctxid));
      if (node.value == Xps.OPERATION.DIV) {
         htmlRet += '<table>';
         htmlRet += '<tr>';
			if (withParentesis) {
				htmlRet += '<td rowspan=3 class="parentesis"></td>'
			}
         htmlRet += '<td>';
         htmlRet += Xps.htmlfy(node.left, false, false);
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
         htmlRet += Xps.htmlfy(node.right, false, false);
         htmlRet += '</td>';
         htmlRet += '</tr>';
         htmlRet += '</table>';
      } else {
         //node.value will be an image
         htmlRet += '<table><tr>'+(withParentesis ? '<td class="parentesis"></td>' : '')
			+'<td>'+Xps.htmlfy(node.left, false, test)+'</td><td>'
			+'<div id = "xpsop'+node.ctxid+'" class="'
			+Xps.OPCLASSES[node.value]+'" onclick="Xps.opClick('+node.ctxid+')"/>'
			+'</td><td>'+Xps.htmlfy(node.right, false, false)+'</td>'
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
	toAppend += this.htmlfy(node, true, false);
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
	retTree += node.value + (node.isOperation()? '(id: '+node.ctxid+')' : '') + '\n';
	if (node.left != null) retTree += Xps.treefy(node.left,lvl+1);
	if (node.right != null) retTree += Xps.treefy(node.right,lvl+1);
	return retTree;
},

linefy: function(node) {
	var currNode = node;
	var rtn = '';
	while (currNode.next != null) {
		rtn += currNode.value;
		currNode = currNode.next;
	}
	return rtn;
},

askForSolution: function(opid, solutionKey) {
	var op = Xps.CONTEXT.opNodes[opid];
	var questionHtml = '';
	questionHtml += '<tr id="opLine'+solutionKey+'"><td class="'+this.getOpNsName(opid)+'Line"><table><tr><td>';
	questionHtml += Xps.htmlfy(op, true, true);
	questionHtml += '</td><td>';
	questionHtml += '<input id= "op'+solutionKey+'" type="number" '+'onblur="Xps.solSubmit(event,'+opid+')" '+'onkeypress="Xps.solEnter(event,'+opid+')"></input>';
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
	//console.log('OPERATION SELECTED: ', opid);
	var opEl = document.getElementById('xpsop'+opid);
	var opNodes = Xps.CONTEXT.opNodes;
   var opNode = Xps.CONTEXT.opNodes[opid];
   var solvable = false;
	var solutionTrees = Xps.CONTEXT.solutionTrees;
   var solutionTreesToPop = [];
	var notValid = [];
	var indice = {};
   for (var i = 0; i < solutionTrees.length; i++) {
		//console.log('   SOLUTION TREE: ', i);
		var solutionTree = solutionTrees[i];
		if (!solutionTree.valid) continue;
		//console.log('      VALID SOLUTION TREE! ');
		var distransformations = this.transform(solutionTree.transformations);
		if (!opNode.left.isOperation() && !opNode.right.isOperation()) {
			//console.log('      OPERATION VALID FOR TREE');
			solvable = true;
			var currIndx = opNode.left.value+'op'+opNode.right.value;
			//console.log('      SOLUTION KEY: ', currIndx);
			if (typeof indice[currIndx] == 'undefined')
				indice[currIndx] = [i];
			else {
				indice[currIndx].push(i);
			}
			//console.log('      SOLUTION KEYS: ', indice);
		} else notValid.push(i);
		this.transform(distransformations);
   }
   //console.log('   ANALISIS IS DONE FOR SOLUTION TREE: ', i);
   if (solvable) {
		Xps.CONTEXT.opSolutions = indice;
		for (var key in indice) {
			//console.log(   'SOLUTION KEY IS ', key);
			//console.log(   'SOLUTION INDEX IS ', indice[key][0]);
			var solutionTree = solutionTrees[indice[key][0]];
			var distransformations = this.transform(solutionTree.transformations);
			this.askForSolution(opid, key);
			this.transform(distransformations);
		}
		for (var i = 0; i < notValid.length; i++) {
			solutionTrees[notValid[i]].valid = false;
		}
	}
	//console.log('OPERATION SELECTION ENDED');
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
	//console.log('key is ', key);
	var opSolution = this.CONTEXT.opSolutions[key];
	//console.log('opSolutions is ', opSolution);
	var solutionTree = this.CONTEXT.solutionTrees[opSolution[0]];
	//console.log('solutionTree is ', solutionTree);
	var distransformations = this.transform(solutionTree.transformations);
	var isOpRoot = (op.parent == null);
	//console.log('op is root? ', isOpRoot)
	//console.log('key is ', key);
	//console.log('opSolution is ', opSolution);
	if (op.solve(parseInt(event.target.value))) {
		//console.log('solutionTree.tree is', solutionTree.tree);
		this.CONTEXT.tree = this.CONTEXT.opNodes[solutionTree.tree];
		//console.log('this.CONTEXT.tree is ',this.CONTEXT.tree);
		//console.log('event',event);
// 		if (isOpRoot) Xps.CONTEXT.tree = Xps.CONTEXT.opNodes[opid];
		//console.log('this.CONTEXT.tree is ', this.CONTEXT.tree);
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
		//Should not use this link method here
// 		this.CONTEXT.tree.link();
// 		//console.log('New ex linefied ', this.linefy((this.CONTEXT.tree.link())[0]));
		this.appendXp(this.CONTEXT.tree);
		var increase = this.score(true);
		this.spanWarn(true, increase);
		this.changeState('SELECTING');
		if (!this.CONTEXT.tree.isOperation()) {
			//console.log('!!!   !!!   !!!   FINISHED');
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
		//console.log('Transforming: ', transformation, ' opNodes ', opNodes);
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
			// This is for //console.log sake only
			var solutionTreeRoot = transNode;
			if (switchRoot && newRoot != null) {
				solutionTreeRoot = newRoot;
				//console.log('Switching root to ', newRoot.ctxid);
			}
			if (newRoot != null)
				distransformations.push({
					id: transNode.parent.ctxid,
					mirror: false,
					ccw: !transformation.ccw
				});
		}
		//console.log('Transformed: ', transformation);
// 		//console.log('Transformed tree', '\n'+Xps.treefy(solutionTreeRoot, 0));
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
//          //console.log('undefined');         
      } else if (value == null) {
//          //console.log('null');
      } else if (value.length == 1 && (Xps.OPERATION.SUM+Xps.OPERATION.SUB).indexOf(value) != -1) {
         //Sum and subtraction
//          //console.log('sum');
         this.value = value;
         this.operation = true;
         this.nature = Xps.NATURE.SUM;
         if (value == Xps.OPERATION.SUM) this.inverse = false;
         else this.inverse = true;
      } else if (value.length == 1 && (Xps.OPERATION.MULT+Xps.OPERATION.DIV).indexOf(value) != -1) {
         //Multiplication and division
//          //console.log('mul');
         this.value = value;
         this.operation = true;
         this.nature = Xps.NATURE.MULT;
         if (value == Xps.OPERATION.MULT) this.inverse = false;
         else this.inverse = true;
      } else if (Xps.RE.NUMBERS.test(value)) {
//          //console.log('integer');
         this.value = parseInt(value);
         this.operation = false;
      } else {
         //console.log('value must be +,-,*,/ or an integer');
         return null;
      }
      this.factors = [];
      this.parent = null;
      this.left = null;
      this.right = null;
		this.prev = null;
		this.next = null;
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
					this.isOperation() && 
					this.right != null && 
					this.right.isOperation() &&
					this.nature == this.right.nature
				) {
					//Rotate it
					var pivot = this.right;
					if (this.value == Xps.OPERATION.DIV && pivot.value == Xps.OPERATION.MULT) {
						//console.log('   ###   ###   ###   ###');
						pivot.invert();
					}
					this.setRight(pivot.left);
					pivot.parent = this.parent;
					if (this.parent != null) {
						if (this.parent.right.ctxid == this.ctxid) {
							this.parent.setRight(pivot);
							//console.log('this.parent',this.parent,'pivot right', pivot);
						} else {
							this.parent.setLeft(pivot);
							//console.log('this.parent',this.parent,'pivot left', pivot);
						}
					}
					pivot.setLeft(this);
					return pivot;
				} else {
// 					console.error('Can\'t rotate node ccw', this);
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
					if (this.value == Xps.OPERATION.DIV && pivot.value == Xps.OPERATION.DIV) {
						//console.log('   ###   ###   ###   ###');
						this.invert();
					}
					this.setLeft(pivot.right);
					pivot.parent = this.parent;
					if (this.parent != null) {
						if (this.parent.right.ctxid == this.ctxid) {
							this.parent.setRight(pivot);
							//console.log('this.parent',this.parent,'pivot right', pivot);
						} else {
							this.parent.setLeft(pivot);
							//console.log('this.parent',this.parent,'pivot left', pivot);
						}
					}
					pivot.setRight(this);
					return pivot;
				} else {
// 					console.error('Can\'t rotate node cw', this);
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
//             console.error('Can\'t set right child for an integer, operations only.');
         } else {
            if(node instanceof Node) {
               this.right = node;// 			var solutionTreeRoot = transNode;
// 			if (switchRoot) {
// 				solutionTreeRoot = newRoot;
// 				//console.log('Switching root to ', newRoot.ctxid);
// 			}
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
			var leftNegative = this.prev.prev != null 
									&& this.prev.prev.value == Xps.OPERATION.SUB
									&& this.prev.prev.ctxid != this.parent.ctxid
									&& !this.prev.prev.right.parenthesized()
									&& this.prev.prev.right.value != Xps.OPERATION.DIV;
// 			var divMultDem = this.value == Xps.OPERATION.DIV
// 									&& this.right != null
// 									&& this.right.isOperation()
// 									&& this.right.value == Xps.OPERATION.MULT;
// 			//console.log('divMultDem ', divMultDem);
// 			//console.log('this.value == Xps.OPERATION.DIV', this.value == Xps.OPERATION.DIV);
// 			//console.log('this.right != null', this.right != null);
// 			//console.log('this.right.isOperation()', this.right.isOperation());
// 			//console.log('this.right.value == Xps.OPEARTION.MULT', this.right.value == Xps.OPERATION.MULT);
			var solution = eval((leftNegative?'-':'')+'('+this.left.value+')'+this.value+'('+this.right.value+')');
			//console.log('solution, result', solution, result);
			if (result != solution) return false;
			var solutionNode = new Xps.Node(solution);
			solutionNode.ctxid = this.ctxid;
			if (leftNegative && solution < 0) {
				solutionNode.invert();
			} else if (leftNegative && solution >= 0) {
				this.prev.prev.invert();
			}
// 			if (divMultDem) this.right.invert();
			if (this.parent != null && this.ctxid == this.parent.left.ctxid) {
				this.parent.setLeft(solutionNode);
// 				this.parent.left = solutionNode;
			} else if (this.parent != null && this.ctxid == this.parent.right.ctxid) {
				this.parent.setRight(solutionNode);
// 				this.parent.right = solutionNode;
			}
			if (this.prev.prev != null) {
				solutionNode.prev = this.prev.prev;
				this.prev.prev.next = solutionNode;
			}
			if (this.next.next != null) {
				solutionNode.next = this.next.next;
				this.next.next.prev = solutionNode;
			}
			Xps.CONTEXT.opNodes[this.ctxid] = solutionNode;
			return true;
		},		
		
      this.isSum = function() {
         if (!this.operation) return null;
         return this.nature == 'SUM' ? true : false;
      };
		
		this.link = function() {
			if (!this.isOperation()) {
				this.prev = null;
				this.next = null;
				return [this];
			}
			var leftList = this.left.link();
			var rightList = this.right.link();
			leftList[leftList.length-1].next = this;
			this.prev = leftList[leftList.length-1];
			rightList[0].prev = this;
			this.next = rightList[0];
			return leftList.concat([this],rightList);
		};
		
		this.invert = function() {
			if (this.isOperation()) {
				if (this.nature == Xps.NATURE.SUM) {
					if (this.inverse) {
						this.inverse = false;
						this.value = Xps.OPERATION.SUM;
					} else {
						this.inverse = true;
						this.value = Xps.OPERATION.SUB;
					}
				} else {
					if (this.inverse) {
						this.inverse = false;
						this.value = Xps.OPERATION.MULT;
					} else {
						this.inverse = true;
						this.value = Xps.OPERATION.DIV;
					}
				}
			} else {
				this.value = -this.value;
			}
		};
		
		this.parenthesized = function() {
			var rtn = this.parent != null 
									&& this.parent instanceof Xps.Node 
									&& ((this.nature == Xps.NATURE.SUM 
									&& this.parent.value == Xps.OPERATION.MULT)
									|| (this.nature == Xps.NATURE.SUM
									&&	this.parent.value == Xps.OPERATION.SUB
									&& this.parent.right.ctxid == this.ctxid));
			return rtn;
		};
		
   } else return new Node(value);
}

};