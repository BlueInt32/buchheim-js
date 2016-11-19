'use strict';

var config = {};

config.margins = {
  top: 0,
  right: 15,
  bottom: 0,
  left: 15
};

config.bubbleWidth = 16;
config.bubblePadding = 4;
config.bubbleHoverScale = 1.2;

config.nodeTypes = {
  root: 'root',
  rich: 'rich',
  simple: 'simple'
};

config.boxHeight = 40;
config.boxBorderRadius = config.boxHeight / 2;
config.nodePositionX = 0;

config.titlePositionX = 15;
config.subtitlePositionX = 15;
config.subtitlePositionYOffset = 12;

config.toolTipTextFunc = d => d.title + '\n' + d.subtitle || "";

config.boxTextMarginLeft = 15;
config.boxSubtextMarginLeft = 20;
config.nodeWidths = {
  root: 165,
  rich: 165,
  simple: 140
};
config.linkCurvature = 0.5;
config.showDebugBox = false;
config.linkWidth = 5;
config.unknownLinkLength = 60;

config.drag = {
  enabled: true,
};
config.zoom = {
  outMaxRatio: 0.3,
  inMaxRatio: 1,
  hiddenTextRatio: 0.5,
  step: 0.1
};
config.verticalAlignGraph = true;
config.familyGroupMargin = {
  "x": 0,
  "y": 10
};
