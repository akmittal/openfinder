import { customElement, html, css, LitElement, property } from 'lit-element';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

@customElement('of-settings')
export class OFSettings extends LitElement {
  @property({ type: Boolean }) show: boolean = false;

  @property({ type: String }) column: string = 'name';
  @property({ type: Boolean }) isAscending: boolean = false;

  static styles = css`
    :host {
      z-index: 99;
    }
    .center {
      padding: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .drawer {
      position: absolute;
      right: 0;
      border: 0;
      top: 0;
      min-width: 200px;
      width: 20%;
      height: 100%;
      z-index: 999;
      background: #fff;
      border-left: 1px solid #f1f1f1;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
      transform: translateX(100%);
      transition: transform 0.2s ease-out;
    }
    .drawer.visible {
      transform: translateX(0%);
    }
    .actions {
      padding: 10px;
      width: 100%;

      border-bottom: 1px solid #ddd;
    }
  `;
  handleClose = () => {
    const event = new CustomEvent('of:close-settings');
    this.dispatchEvent(event);
  };
  handleSortChange = (e: any) => {
    this.column = e.target.value;
    this.triggerSortChange();
  };
  handeOrderChange = (e: any) => {
    console.log(e.target.value);
    this.isAscending = e.target.value === 'asc';
    this.triggerSortChange();
  };
  triggerSortChange() {
    const event = new CustomEvent('op:sortfield', {
      detail: { column: this.column, isAscending: this.isAscending },
    });
    this.dispatchEvent(event);
  }
  connectedCallback() {
    super.connectedCallback();

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && this.show) {
        this.handleClose();
      }
    });
  }
  handleThumbSize = (e: any) => {
    const event = new CustomEvent('op:thumbchange', { detail: e.target.value });
    this.dispatchEvent(event);
  };
  render() {
    return html` <div class=${`drawer ${this.show && 'visible'}`}>
      <div class="actions">
        <iron-icon icon="close" @click=${this.handleClose}></iron-icon>
      </div>
      <div class="center">
        <vaadin-select
          label="Sort By"
          @change=${this.handleSortChange}
          value="name"
        >
          <template>
            <vaadin-list-box>
              <vaadin-item value="name">File Name</vaadin-item>
              <vaadin-item value="size">File Size</vaadin-item>
              <vaadin-item value="modified">Date</vaadin-item>
            </vaadin-list-box>
          </template>
        </vaadin-select>
        <div>
          <vaadin-radio-group
            label="Sort order"
            @change=${this.handeOrderChange}
          >
            <vaadin-radio-button value="asc" checked
              >Ascending</vaadin-radio-button
            >
            <vaadin-radio-button value="desc">Descending</vaadin-radio-button>
          </vaadin-radio-group>
        </div>
        <label>Thumbnail Size</label>
        <input
          type="range"
          @change=${this.handleThumbSize}
          min="8"
          max="24"
          step="2"
          value="15"
        />
      </div>
    </div>`;
  }
}
