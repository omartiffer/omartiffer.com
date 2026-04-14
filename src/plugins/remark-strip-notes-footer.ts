import type { Root, Node } from "mdast";

function hasReadmeLink(node: Node): boolean {
  if (node.type === "link") {
    const link = node as { type: string; url: string };
    return link.url.includes("README.md");
  }
  const parent = node as { children?: Node[] };
  if (parent.children) {
    return parent.children.some(hasReadmeLink);
  }
  return false;
}

export function remarkStripNotesFooter() {
  return (tree: Root) => {
    let lastBreakIndex = -1;
    for (let i = tree.children.length - 1; i >= 0; i--) {
      if (tree.children[i].type === "thematicBreak") {
        lastBreakIndex = i;
        break;
      }
    }
    if (lastBreakIndex === -1) return;

    const nodesAfterBreak = tree.children.slice(lastBreakIndex + 1);
    const isNavFooter = nodesAfterBreak.some(hasReadmeLink);

    if (isNavFooter) {
      tree.children.splice(lastBreakIndex);
    }
  };
}
