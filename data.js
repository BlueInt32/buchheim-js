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
  },
  set3: {
  "nodes":[
    {
      "masterId":"9bc892f9-4498-40ac-8958-58b369e92b6d",
      "style":"root",
      "type":"Internal",
      "title":"PV2",
      "subtitle":"T1_OC_Name - France",
      "depth":0,
      "familyIndex":0
    },
    {
      "masterId":"fbab3521-b2b4-4b52-97ab-f6c46e38242a",
      "style":"simple",
      "type":"Incomplete",
      "title":"C2",
      "depth":1,
      "familyIndex":0
    },
    {
      "masterId":"a6aabee4-8648-45d8-a011-540245595b15",
      "style":"simple",
      "type":"Internal",
      "title":"C3",
      "depth":1,
      "familyIndex":0
    },
    {
      "masterId":"88d5fa67-0703-4e30-94e8-dda348771ffa",
      "style":"simple",
      "type":"Internal",
      "title":"C4",
      "depth":1,
      "familyIndex":0
    },
    {
      "masterId":"d1eb73a2-28a3-45b0-b6c3-ea33312a31a1",
      "style":"rich",
      "type":"Internal",
      "title":"Pizza dough source",
      "subtitle":"T1_DC1_Name - France",
      "depth":2,
      "familyIndex":1,
      "values":{
        "supplierId":"23375",
        "sourceId":"a7e84151-2aa3-43fb-a449-1c5e31a3791d",
        "isProductVersion":"false"
      }
    },
    {
      "masterId":"91bba097-effe-446f-9458-3f7a1a229262",
      "style":"rich",
      "type":"Incomplete",
      "title":"lolqzefqzef",
      "subtitle":"hahaqezfqzef - Austria",
      "depth":2,
      "familyIndex":1,
      "values":{
        "supplierId":"23414"
      }
    },
    {
      "masterId":"b7c5beb6-c6c8-4a47-9aa3-227f0b1d1c6d",
      "style":"rich",
      "type":"Incomplete",
      "title":"Way too long component name for the node size !",
      "subtitle":"bla - Bahamas",
      "depth":2,
      "familyIndex":2,
      "values":{
        "supplierId":"23417"
      }
    },
    {
      "masterId":"6e678670-4ddf-4189-9c22-f6d7d7892a16",
      "style":"simple",
      "type":"Incomplete",
      "title":"Pizza !",
      "xPos":3,
      "familyIndex":0
    }
  ],
  "links":[
    {
      "sourceId":"9bc892f9-4498-40ac-8958-58b369e92b6d",
      "targetId":"fbab3521-b2b4-4b52-97ab-f6c46e38242a",
      "value":1
    },
    {
      "sourceId":"9bc892f9-4498-40ac-8958-58b369e92b6d",
      "targetId":"a6aabee4-8648-45d8-a011-540245595b15",
      "value":1
    },
    {
      "sourceId":"a6aabee4-8648-45d8-a011-540245595b15",
      "targetId":"d1eb73a2-28a3-45b0-b6c3-ea33312a31a1",
      "value":1
    },
    {
      "sourceId":"a6aabee4-8648-45d8-a011-540245595b15",
      "targetId":"91bba097-effe-446f-9458-3f7a1a229262",
      "value":1
    },
    {
      "sourceId":"9bc892f9-4498-40ac-8958-58b369e92b6d",
      "targetId":"88d5fa67-0703-4e30-94e8-dda348771ffa",
      "value":1
    },
    {
      "sourceId":"88d5fa67-0703-4e30-94e8-dda348771ffa",
      "targetId":"d1eb73a2-28a3-45b0-b6c3-ea33312a31a1",
      "value":1
    },
    {
      "sourceId":"88d5fa67-0703-4e30-94e8-dda348771ffa",
      "targetId":"b7c5beb6-c6c8-4a47-9aa3-227f0b1d1c6d",
      "value":1
    },
    {
      "sourceId":"d1eb73a2-28a3-45b0-b6c3-ea33312a31a1",
      "targetId":"6e678670-4ddf-4189-9c22-f6d7d7892a16",
      "value":1
    }
  ]
}
};