function invertBinaryTree(tree) {
  if (!tree) return;
  [tree.right, tree.left] = [tree.left, tree.right];
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  return tree;
}
