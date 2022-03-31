function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if (!tree) {
    return new TreeInfo(0, 0);
  }

  let leftTreeInfo = getTreeInfo(tree.left);
  let rightTreeInfo = getTreeInfo(tree.right);

  let longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  let maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );
  let currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  let currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}
