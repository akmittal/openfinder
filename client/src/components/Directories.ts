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
  __draggingElement: any;

  static styles = css`
    :host {
      height: 100vh;
      max-height:100%;
      overflow:scroll;
    }

    ::part(cell) {
      background-color: transparent;
    }
    vaadin-grid-cell-content[active] {
      border: 2px solid red;
      -webkit-user-drag: element;
    }
    vaadin-grid-cell-content{
      -webkit-user-drag: element;
    }
  `;

  handleDrop = async (e: any) => {
    e.preventDefault();
    const dropTarget = e.detail.dragData ? e.detail.dragData[0] : [];
    let droptAction;
    if (dropTarget.type === 'text/uri-list') {
      droptAction = 'image:Drag';
    } else {
      droptAction = 'DragDir';
    }
    const ev = new CustomEvent('onqueueaction', {
      detail: {
        data: e.detail,
        action: droptAction,
        draggedEl: this.__draggingElement,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(ev);
    this.__draggingElement ='';
  };
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
      data = await this.getDirs(`/${item.parentItem.path}`);
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
  handledrag = (e: any) => {
    this.__draggingElement = e.detail.draggedItems[0];
  };
  render() {
    return html`<vaadin-grid
      header="Media"
      .onclick=${this.handleClick}
      .dataProvider=${this.dataProvider}
      aria-label="directories"
      style="background:transparent; border:0; min-height:calc(100vh - 50px)"
      drop-mode="between"
      rows-draggable
      @grid-drop=${this.handleDrop}
      @grid-dragstart=${this.handledrag}
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
