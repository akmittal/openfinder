import {
  customElement,
  LitElement,
  html,
  query,
  property,
  css,
} from 'lit-element';

@customElement('file-directories')
export class Directories extends LitElement {
  context: string = '';
  @property() dirs: any;
  @property({ type: String }) serverURL: string = '';
  @property({ type: Number, attribute: true }) changed: number = 0;
  @query('vaadin-grid') grid: any;
  static styles = css`
    :host {
      height: 100vh;
    }

    ::part(cell) {
      background-color: transparent;
    }
  `;
  attributeChangedCallback(name: string, old: any, newVal: any) {
    super.attributeChangedCallback(name, old, newVal);

    if (this.grid) {
      this.grid.clearCache();
    }
  }
  async getDirs(context: string) {
    this.context = context;
    const res = await fetch(`${this.serverURL}/directory?context=${context}`);
    return await res.json();
  }
  dataProvider = async (item: any, callback: Function) => {
    let data = [];
    if (!item.parentItem) {
      data = await this.getDirs('/');
      // data = data.data.map((dir: any) => ({
      //   ...dir,
      //   children: dir.isLeafNode ? null : [],
      // }));
      data = [
        {
          name: '/',
          path: '/',
          isLeafNode: false,
          children: [],
        },
      ];
    } else {
      data = await this.getDirs(`/${item.parentItem.name}`);
      data = data.data.map((dir: any) => ({
        ...dir,
        children: dir.isLeafNode ? null : [],
      }));
    }
    callback(data, data.length);
  };
  async connectedCallback() {
    super.connectedCallback();

    // console.log(data)
  }
  handleClick = (e: any) => {
    const item: any = this.grid.getEventContext(e).item;
    const event = new CustomEvent('onselection', { detail: item });
    this.grid.selectedItems = this.grid.selectedItems[0] === item ? [] : [item];
    this.dispatchEvent(event);
  };
  render() {
    return html`<vaadin-grid
      header="Media"
      .onclick=${this.handleClick}
      .dataProvider=${this.dataProvider}
      aria-label="directories"
      style="background:transparent; border:0; min-height:calc(100vh - 50px)"
    >
      <vaadin-grid-tree-column
        header=""
        path="name"
        itemHasChildrenPath="children"
      >
      </vaadin-grid-tree-column>
    </vaadin-grid>`;
  }
}
