var sets = {
  set1: {
    nodes: [
      { masterId: "e6a4acbe", depth: 0, style: "root" },
      { masterId: "96305b68", depth: 1, style: "simple" },
      { masterId: "6feba21b", depth: 1, style: "simple" },
      { masterId: "1cb2983e", depth: 2, style: "rich" },
      { masterId: "36f2d1f3", depth: 2, style: "rich" }
    ],
      links : [
      { sourceId: "e6a4acbe", targetId: "96305b68" },
      { sourceId: "96305b68", targetId: "1cb2983e" },
      { sourceId: "e6a4acbe", targetId: "6feba21b" },
      { sourceId: "6feba21b", targetId: "36f2d1f3" }
    ]
  },
  set2: {
    nodes: [
      { masterId: "e6a4acbe", depth: 0, style: "root" },
      { masterId: "96305b68", depth: 1, style: "simple" },
      { masterId: "6feba21b", depth: 1, style: "simple" },
      { masterId: "36f2d1f3", depth: 2, style: "rich" },
      { masterId: "f3f721e8", depth: 3, style: "rich" },
      { masterId: "98d08bb7", depth: 3, style: "rich" },
    ],
      links : [
      { sourceId: "e6a4acbe", targetId: "96305b68" },
      { sourceId: "e6a4acbe", targetId: "6feba21b" },
      { sourceId: "6feba21b", targetId: "36f2d1f3" },
      { sourceId: "36f2d1f3", targetId: "f3f721e8" },
      { sourceId: "36f2d1f3", targetId: "98d08bb7" },
    ]
  }
};