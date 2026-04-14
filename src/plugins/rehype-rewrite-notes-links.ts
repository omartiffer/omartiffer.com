import type { Root, Element, Node } from "hast";

function rewriteLinks(node: Node) {
  if (node.type !== "element") return;
  const el = node as Element;
  if (
    el.tagName === "a" &&
    el.properties?.href &&
    typeof el.properties.href === "string"
  ) {
    const href = el.properties.href;
    if (!href.startsWith("http") && !href.startsWith("#") && href.endsWith(".md")) {
      el.properties.href = "/notes/" + href.replace(/\.md$/, "").replace(/^\//, "");
    }
  }
  if (el.children) {
    el.children.forEach(rewriteLinks);
  }
}

export function rehypeRewriteNotesLinks() {
  return (tree: Root) => {
    tree.children.forEach(rewriteLinks);
  };
}
