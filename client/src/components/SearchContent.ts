import { LitElement, html, css, property, customElement } from 'lit-element';
import '../components/Card';

@customElement('search-content')
export class Search extends LitElement {
  @property({ type: Array }) files: any = [];
  @property({ type: Boolean }) selected: boolean = false;
  @property({ type: Boolean }) isAscending: boolean = false;
  @property({ type: String }) serverURL: string = '';
  @property({ type: Number }) thumbsize: number = 15;
  @property({ type: Object }) activeItem: any = {};
  @property({ type: String }) sortColumn: string = '';
  @property({ type: Function }) sortFile: any;

  static styles = css`
    .search-list-item {
      display: flex;
      justify-content: center;

      flex-direction: row;
      flex-wrap: wrap;
      overflow-y: scroll;
    }
  `;

  attributeChangedCallback(name: string, oldval: any, newval: any) {
    super.attributeChangedCallback(name, oldval, newval);
  }
  getSortedFiles() {
    if (this.files) {
      return this.files.sort((prev: any, curr: any) => {
        const prevData =
          typeof prev[this.sortColumn] === 'string'
            ? prev[this.sortColumn].toLowerCase()
            : prev[this.sortColumn];
        const currData =
          typeof curr[this.sortColumn] === 'string'
            ? curr[this.sortColumn].toLowerCase()
            : curr[this.sortColumn];

        if (this.isAscending) {
          return prevData > currData ? 1 : -1;
        } else {
          return prevData > currData ? -1 : 1;
        }
      });
    }
  }
  connectedCallback() {
    super.connectedCallback();
  }

  handleSubmit = (e: any) => {
    const event = new CustomEvent('mediaselected', {
      detail: this.activeItem,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  };

  handleClipUrl(e: Event) {
    const event = new CustomEvent('clipboard:img:url', {
      detail: {
        path: this.activeItem.path,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
  render() {
    return html`
      <div class="search-list-item" } @click=${this.handleClipUrl}>
        ${this.getSortedFiles().map(
          (file: any) =>
            html`<file-card
              style=${`width:${this.thumbsize}em`}
              .serverURL=${this.serverURL}
              .data=${file}
              @dblclick=${(e: Event) => {
                this.activeItem = file;
                this.handleSubmit(e);
              }}
              @click=${(e: Event) => {
                this.activeItem = file;
              }}
              .selected=${this.activeItem === file}
            ></file-card>`
        )}
      </div>
    `;
  }
}
