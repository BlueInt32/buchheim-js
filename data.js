var sets = {
  sbu1: {
    nodes: [
      { masterId: "r", style: 'root' },
      { masterId: "a", style: 'root' },
      { masterId: "b", style: 'root' }
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
        "targetId":"c"
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
  },
  set5: {
    nodes: [
      { masterId: "r", style: "root" },
      { masterId: "a", style: "simple" },
      { masterId: "b", style: "simple" },
      { masterId: "c", style: "rich" },
      { masterId: "d", style: "rich" },
      { masterId: "e", style: "rich" },
      { masterId: "f", style: "rich" },
      { masterId: "g", style: "rich" },
      { masterId: "h", style: "rich" },
      { masterId: "i", style: "rich" },
      { masterId: "j", style: "rich" },
      { masterId: "k", style: "rich" },
      { masterId: "l", style: "rich" },
      { masterId: "m", style: "rich" },
      { masterId: "n", style: "rich" },
      { masterId: "o", style: "rich" },
      { masterId: "p", style: "rich" },
      { masterId: "q", style: "rich" },
      { masterId: "s", style: "rich" },
      { masterId: "t", style: "rich" }
    ],
      links : [
      { sourceId: "r", targetId: "a" },
      { sourceId: "r", targetId: "d" },
      { sourceId: "r", targetId: "n" },
      { sourceId: "r", targetId: "p" },
      { sourceId: "a", targetId: "b" },
      { sourceId: "a", targetId: "c" },
      { sourceId: "d", targetId: "e" },
      { sourceId: "d", targetId: "k" },
      { sourceId: "e", targetId: "f" },
      { sourceId: "e", targetId: "i" },
      { sourceId: "f", targetId: "g" },
      { sourceId: "f", targetId: "h" },
      { sourceId: "i", targetId: "j" },
      { sourceId: "k", targetId: "l" },
      { sourceId: "l", targetId: "m" },
      { sourceId: "n", targetId: "o" },
      { sourceId: "p", targetId: "q" },
      { sourceId: "q", targetId: "s" },
      { sourceId: "q", targetId: "t" }
    ]
  }
};