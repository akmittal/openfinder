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
  @property() dirs: any;  @property({type:String}) serverURL: string = "";
  @query('vaadin-grid') grid: any;
  static styles = css`
    :host {
      height: 100vh;
    }

    ::part(cell) {
      background-color: transparent;
    }
  `;
  async getDirs(context: string) {
    const res = await fetch(
      `${this.serverURL}/directory?context=${context}`
    );
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
      <vaadin-grid-tree-column path="name" itemHasChildrenPath="children">
      </vaadin-grid-tree-column>
    </vaadin-grid>`;
  }
}
