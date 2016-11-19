function graphDisplayService() {

  /// The algorithm implemented here was converted to ES6 from the following article
  /// "Improving Walker's algorithm to run in linear time"
  /// http://dirk.jivas.de/papers/buchheim02improving.pdf
  /// (pseudo code at the end)
  /// This algorithm is O(n) with 2 passes (bottom up recursive then modifiers applications)
  /// <!> Don't forget your Doliprane <!>

  var context = {},
    nodes = [], // nodes data provided from outside. You must provide a way to get the root node and an unique Id getter.
    rootNodeSelector = d => d.style === 'root',
    nodeUniqueIdentifierSelector = d => d.masterId,

    links = [], // links data provided by API
    nexts = [],
    distance = 1,
    layout = "horizontal"; // set to "horizontal" if needed

  context.nodes = function (_) {
    if (!arguments.length) return nodes;
    nodes = _;
    return context;
  };

  context.links = function (_) {
    if (!arguments.length) return links;
    links = _;
    return context;
  };

  context.layout = function () {
    prepareNodes();
    prepareLinks();
    var rootNode = nodes.find(rootNodeSelector);
    var r = convertToTree(rootNode);
    firstWalk(r);
    secondWalk(r, r.prelimX);
    return context;
  };

  function prepareNodes() {
    var nodeIndex = 0;
    nodes.forEach(function (node) {
      node.nodeIndex = nodeIndex;
      node.outgoingLinks = [];
      node.incomingLinks = [];
      nodeIndex++;
    });
  }

  function prepareLinks() {
    links.forEach(function (link) {
      link.source = nodes.find(function (node) {
        return nodeUniqueIdentifierSelector(node) === link.sourceId;
      });
      link.target = nodes.find(function (node) {
        return nodeUniqueIdentifierSelector(node) === link.targetId;
      });

      link.source.outgoingLinks.push(link);
    });
  }

  function convertToTree(node, depth, parent, familyNumber) {
    if (typeof depth === 'undefined') depth = 0;
    if (typeof familyNumber === 'undefined') familyNumber = 1;
    var i = 1;
    var tree = {
      id: nodeUniqueIdentifierSelector(node),
      mod: 0,
      shift: 0,
      change: 0,
      thread: null,
      y: depth,
      children: [],
      parent: parent,
      leftMostSibling: null,
      number: familyNumber,
      data: {
        id: nodeUniqueIdentifierSelector(node),
        nodeIndex: node.nodeIndex
      }
    };

    setNodeY(tree, depth);
    tree.ancestor = tree;
    node.outgoingLinks.forEach(l => {
      tree.children.push(convertToTree(l.target, depth + 1, tree, i));
      i++;
    });
    return tree;
  }

  function firstWalk(v) {
    // a bottom up pass to compute a preliminary x (prelimX) value for all the nodes
    if (v.children.length === 0) { // if v is a leaf
      if (getLeftMostSibling(v)) {
        v.prelimX = getLeftSibling(v).prelimX + distance;
      } else {
        v.prelimX = 0;
      }
    } else {
      var defaultAncestor = v.children[0]; // defaultAncestor is the leftmost child of v
      var w = null;
      for (var i = 0; i < v.children.length; i++) {
        w = v.children[i];
        firstWalk(w);
        defaultAncestor = apportion(w, defaultAncestor);
      }
      executeShifts(v);
      // midpoint is at the middle of leftmost and rightmost children of v
      var midpoint = (1 / 2) * (v.children[0].prelimX + v.children[v.children.length - 1].prelimX);
      w = getLeftSibling(v);
      if (w) {
        v.prelimX = w.prelimX + distance;
        v.mod = v.prelimX - midpoint;
      } else {
        v.prelimX = midpoint;
      }
    }
  }

  function apportion(v, defaultAncestor) {
    /// This step compares two subtrees v and its left sibling w, using their contour and sets some offsets to be sumed up in the secondWalk
    /// The complexity comes essentially from
    var w = getLeftSibling(v);
    if (w) {
      var vri = v; // right inner : represents the inner contour of the right subtree
      var vro = v; // right outer : represents the outer contour of the right subtree
      var vli = w; // left inner : represents the inner contour of the left subtree
      var vlo = getLeftMostSibling(v); // left outer : represents the outer contour of the left subtree
      sri = vri.mod;
      sro = vro.mod;
      sli = vli.mod;
      slo = vlo.mod;
      while (nextRight(vli) && nextLeft(vri)) {
        vli = nextRight(vli);
        vri = nextLeft(vri);
        vlo = nextLeft(vlo);
        vro = nextRight(vro);
        vro.ancestor = v;
        var shift = vli.prelimX + sli - (vri.prelimX + sri) + distance;
        if (shift > 0) {
          moveSubtree(ancestor(vli, v, defaultAncestor), v, shift);
          sri = sri + shift;
          sro = sro + shift;
        }
        sli = sli + vli.mod;
        sri = sri + vri.mod;
        slo = slo + vlo.mod;
        sro = sro + vro.mod;
      }
      if (nextRight(vli) && !nextRight(vro)) {
        vro.thread = nextRight(vli);
        vro.mod = vro.mod + sli - sro;
      }
      if (nextLeft(vri) && !nextLeft(vlo)) {
        vlo.thread = nextLeft(vri);
        vlo.mod = vlo.mod + sri - slo;
        defaultAncestor = v;
      }
    }
    return defaultAncestor;
  }

  function moveSubtree(wl, wr, shift) {
    var substrees = wr.number - wl.number;
    wr.change = wr.change - shift / substrees;
    wr.shift = wr.shift + shift;
    wl.change = wl.change + shift / substrees;
    wr.prelimX = wr.prelimX + shift;
    wr.mod = wr.mod + shift;
  }

  function executeShifts(v) {
    var shift = 0;
    var change = 0;
    var w = null;
    for (var i = v.children.length - 1; i >= 0; i--) {
      w = v.children[i];
      w.prelimX = w.prelimX + shift;
      w.mod = w.mod + shift;
      change = change + w.change;
      shift = shift + w.shift + change;
    }
  }

  function ancestor(vli, v, defaultAncestor) {
    if (areSiblings(vli.ancestor, v)) {
      return vli.ancestor;
    } else {
      return defaultAncestor;
    }
  }

  function secondWalk(v, m) {
    v.x = v.prelimX + m;
    setNodeX(v, v.x);
    for (var i = 0; i < v.children.length; i++) {
      secondWalk(v.children[i], m + v.mod);
    }
  }

  function areSiblings(v, w) {
    for (var i = 0; i < v.parent.children.length; i++) {
      if (areEqualNodes(w, v.parent.children[i])) {
        return true;
      }
    }
    return false;
  }

  function setNodeX(v, x) {
    if (layout === "vertical") {
      nodes[v.data.nodeIndex].x = x;
    } else {
      nodes[v.data.nodeIndex].y = x;

    }
  }

  function setNodeY(v, y) {
    if (layout === "vertical") {
      nodes[v.data.nodeIndex].y = y;
    } else {
      nodes[v.data.nodeIndex].x = y;
    }
  }

  function nextLeft(v) {
    if (v.children.length !== 0) {
      return v.children[0];
    } else {
      return v.thread;
    }
  }

  function nextRight(v) {
    if (v.children.length !== 0) {
      return v.children[v.children.length - 1];
    } else {
      return v.thread;
    }
  }

  function getLeftSibling(v) {
    var w = null;
    var c = null;
    if (v.parent) {
      for (var i = 0; i < v.parent.children.length; i++) {
        c = v.parent.children[i];
        if (areEqualNodes(c, v)) {
          return w;
        } else {
          w = c;
        }
      }
    }
    return w;
  }

  function getLeftMostSibling(v) {
    if (!v.leftMostSibling && v.parent && !areEqualNodes(v, v.parent.children[0])) {
      v.leftMostSibling = v.parent.children[0];
    }
    return v.leftMostSibling;
  }

  function areEqualNodes(v, w) {
    return v.data.id === w.data.id;
  }

  return context;
}