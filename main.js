import { createElement,Component } from './toy-react';

class MyComponent extends Component {
  render() {
    return <div></div>
  }
}

document.body.appendChild(<MyComponent id="a" class="c">
<div>hello 1</div>
<div>hello 2</div>
<div>hello 3</div>
</MyComponent>);