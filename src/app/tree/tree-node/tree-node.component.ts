import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { TreeNode } from './tree-node';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {
  @Input() node: TreeNode;
  @Input() template: TemplateRef<any>;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  onCollapseExpand = () => {
    this.node.collapsed = !this.node.collapsed;
  }

  onCheckedChange = (node, event) => {
    const checked = this.node.checked;
    if (this.node.hasChildren()) {
      this.node.children.forEach(child => child.setCheckedRecursive(checked));
    }
    this.checkedChange.emit(checked);
  }
}

