var sets = {
  sbu1: {
    nodes: [
      { masterId: "r", depth: 0, style: 'root' },
      { masterId: "a", depth: 1, style: 'root' },
      { masterId: "b", depth: 1, style: 'root' }
    ],
    links: [
      { sourceId: "r", targetId: "a" },
      { sourceId: "r", targetId: "b" }
    ]
  },
  set1: {
    nodes: [
      { masterId: "r", style: "root" },
      { masterId: "a", style: "simple" },
      { masterId: "b", style: "simple" },
      { masterId: "c", style: "rich" },
      { masterId: "d", style: "rich" }
    ],
      links : [
      { sourceId: "r", targetId: "a" },
      { sourceId: "r", targetId: "b" },
      { sourceId: "a", targetId: "c" },
      { sourceId: "b", targetId: "d" }
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
  },
  set3: {
    "nodes":[
      {
        "masterId":"r",
        "style":"root"
      },
      {
        "masterId":"a",
        "style":"simple"
      },
      {
        "masterId":"b",
        "style":"simple"
      },
      {
        "masterId":"c",
        "style":"simple"
      },
      {
        "masterId":"d",
        "style":"rich"
      },
      {
        "masterId":"e",
        "style":"rich"
      },
      {
        "masterId":"f",
        "style":"rich"
      },
      {
        "masterId":"g",
        "style":"simple"
      }
    ],
    "links":[
      {
        "sourceId":"r",
        "targetId":"a"
      },
      {
        "sourceId":"r",
        "targetId":"b"
      },
      {
        "sourceId":"b",
        "targetId":"d"
      },
      {
        "sourceId":"b",
        "targetId":"e"
      },
      {
        "sourceId":"r",
        "targetId":"c",
        "value":1
      },
      {
        "sourceId":"c",
        "targetId":"d"
      },
      {
        "sourceId":"c",
        "targetId":"f"
      },
      {
        "sourceId":"d",
        "targetId":"g"
      }
    ]
  },
  set4: {
    nodes: [
      { masterId: "r", style: "root" },
      { masterId: "a", style: "simple" },
      { masterId: "b", style: "simple" },
      { masterId: "c", style: "rich" },
      { masterId: "d", style: "rich" },
      { masterId: "e", style: "rich" }
    ],
      links : [
      { sourceId: "r", targetId: "a" },
      { sourceId: "r", targetId: "b" },
      { sourceId: "b", targetId: "c" },
      { sourceId: "b", targetId: "d" },
      { sourceId: "c", targetId: "e" }
    ]
  }
};