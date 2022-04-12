class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  let d1Path = nodePath(topAncestor, descendantOne);
  let d2Path = nodePath(topAncestor, descendantTwo);

  let lca = findLCA(topAncestor, d1Path, d2Path);
  return lca;
}

function nodePath(topA, descendant, path = []) {
  if (!descendant) return;
  path.push(descendant);
  if (topA.name === descendant.name) {
    return path;
  }
  nodePath(topA, descendant.ancestor, path);

  return path;
}

function findLCA(topA, d1Path, d2Path) {
  let prevPop = d1Path;
  let prevPopTrue = true;
  while (d1Path.length > 0 && d2Path.length > 0) {
    let d1Pop = d1Path.pop();
    let d2Pop = d2Path.pop();
    if (prevPopTrue && d1Pop.name !== d2Pop.name) return prevPop;
    else if (d1Pop.name === d2Pop.name) {
      prevPop = d1Pop;
      prevPopTrue = true;
    }
  }
  return prevPop;
}
