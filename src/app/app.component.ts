import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  options2 = {
    allowDrag: node => {
      return node.data.isDraggable;
    },
    allowDrop: (element, { parent, index })=> {
    // return true / false based on element, to.parent, to.index. e.g.
    //console.log(parent.children?.includes(element));
    return parent.children?.includes(element);
  },
    getNodeClone: (node) => ({
    ...node.data,
    id: 1111,
    name: `copy of ${node.data.name}`
  })
  };
  nodes = [
    {
      id: 1,
      name: "root1",
      type : 'folder',
      children: [{ id: 2, name: "child1" }, { id: 3, name: "child2" }]
    },
    {
      id: 4,
      name: "root2",
      type : 'folder',
      children: [
        { id: 5, name: "child2.1", isDraggable: true },
        { id: 51, name: "child2.1.1", isDraggable: true },
        { id: 52, name: "child2.1.2", isDraggable: true },
        { id: 53, name: "child2.2.1", isDraggable: true },
        { id: 54, name: "child2.2.2", isDraggable: true },
        { id: 55, name: "child2.3.1", isDraggable: true },
        { id: 56, name: "child2.3.2", isDraggable: true },
        { id: 57, name: "child2.4.1", isDraggable: true },
        { id: 58, name: "child2.5.2", isDraggable: true },
        {
          id: 6,
          name: "child2.2",
          type : 'folder',
          isDraggable: true,
          children: [{ id: 7, name: "subsub" }]
        }
      ],
      isExpanded: true
    }
  ];
  options = {};

  scroll(tree){
    //console.log(tree);
    tree.treeModel.getNodeById(6).focus();
    tree.treeModel.getNodeById(6).scrollIntoView();
  }
}
