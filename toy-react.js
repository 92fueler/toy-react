class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(component) {
    this.root.appendChild(component.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }
  
}
export function createElement(type, attributes, ...children) {
  let e;
  if (typeof type === "string") {
    e = document.createElement(type);
  } else {
    e = new type;
  }
  
  for (let p in attributes) {
    e.setAttribute(p, attributes[p])
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }
    e.appendChild(child);
  }
  return e;
}

export function render(component, parentElement) {

}