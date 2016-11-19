function graphDisplayService() {
  var context = {},
    nodes = [], // nodes data provided by API
    links = [], // links data provided by API
    tree = {},
    maxDepth = 0,
    nexts = [];

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

  context.layout = function (autoscale) {
    resetNodes();
    computeNodeLinks();
    var rootNode = nodes.find(d => d.style === 'root');
    tree = initTree(rootNode);
    tree = setup(tree);
    tree = addmods(tree);
    return context;
  };

  function resetNodes() {
    var nodeIndex = 0;
    nodes.forEach(function (node) {
      node.nodeIndex = nodeIndex;
      node.outgoingLinks = [];
      node.incomingLinks = [];
      node.y = null;
      node.value = 1;
      node.dx = config.nodeWidths[node.style];
      nodeIndex++;
      maxDepth = Math.max(maxDepth, node.depth);
    });
    for (var i = 0; i <= maxDepth; i++) {
      nexts.push(0);
    }
  }

  function initTree(node, depth) {
    var tree = {
      id: node.masterId.substr(0, 4),
      x: nexts[depth],
      y: depth,
      nodeIndex: node.nodeIndex,
      mod: 0,
      children: []
    };
    node.outgoingLinks.forEach(l => {
      tree.children.push(buildTree(l.target, depth + 1));
    });
    return tree;
  }

  function setup(tree, depth, nexts, offset) {
    var place = 0;
    if (typeof (depth) === 'undefined') depth = 0;
    if (typeof (nexts) === 'undefined') nexts = new defaultDict();
    if (typeof (offset) === 'undefined') offset = new defaultDict();
    for (var childIndex in tree.children) {
      setup(tree.children[childIndex], depth + 1, nexts, offset);
    }
    tree.y = depth;
    nodes[tree.nodeIndex].y = tree.y;
    if (!tree.children.length) {
      place = nexts.get(depth);
      tree.x = place;
    } else if (tree.children.length === 1) {
      place = tree.children[0].x - 1;
    } else {
      place = (tree.children[0].x + tree.children[1].x) / 2;
    }

    offset[depth] = Math.max(offset.get(depth), nexts.get(depth) - place);
    if (tree.children.length) {
      tree.x = place + offset.get(depth);
    }
    nexts[depth] = nexts.get(depth) + 2;
    tree.offset = offset.get(depth);

    return tree;
  }

  function addmods(tree, modsum) {
    if (typeof (modsum) === 'undefined') modsum = 0;
    tree.x = tree.x + modsum;
    nodes[tree.nodeIndex].x = tree.x;
    modsum += tree.offset;

    for (var childIndex in tree.children) {
      addmods(tree.children[childIndex], modsum);
    }
    return tree;
  }

  function buildTree(node, depth) {
    if (typeof (depth) === 'undefined') depth = 0;

    var tree = {
      id: node.masterId.substr(0, 4),
      x: nexts[depth],
      y: depth,
      nodeIndex: node.nodeIndex
    };
    tree.children = [];
    nodes[node.nodeIndex].x = tree.x;
    nodes[node.nodeIndex].y = tree.y;
    nexts[depth] += 1;
    node.outgoingLinks.forEach(l => {
      tree.children.push(buildTree(l.target, depth + 1));
    });
    return tree;
  }

  function computeNodeLinks() {
    links.forEach(function (link) {
      link.source = nodes.find(function (node) {
        return node.masterId === link.sourceId;
      });
      link.target = nodes.find(function (node) {
        return node.masterId === link.targetId;
      });

      link.source.outgoingLinks.push(link);
      link.target.incomingLinks.push(link);
    });
  }

  function defaultDict() {
    this.get = function (key) {
      if (this.hasOwnProperty(key)) {
        return this[key];
      } else {
        return 0;
      }
    }
  }
  return context;
}