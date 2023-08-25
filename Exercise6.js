
let tree = {
    name: 'Root',
    children: [
      {
        name: 'First level child',
        children: [
          {
            name: 'Second level child',
          },
          {
            name: 'Second level child',
          },
        ],
      },
      {
        name: 'First level child',
        children: [
          {
            name: 'Second level child',
            children: [
              {
                name: 'Third level child',
              },
            ],
          },
        ],
      },
    ],
  };
  
  
  function displayTree(node, prefix = '', isLast = true) {
    let nodePrefix = prefix + (isLast ? '└─ ' : '├─ ');
    console.log(nodePrefix + node.name);
  
    if (node.children) {
      node.children.forEach((child, index) => {
        let childPrefix = prefix + (isLast ? '   ' : '│  ');
        let childIsLast = index === node.children.length - 1;
        displayTree(child, childPrefix, childIsLast);
      });
    }
  }
  
  displayTree(tree);
  