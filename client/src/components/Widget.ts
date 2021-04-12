import { LitElement, html, css, property, customElement } from 'lit-element';
import '@polymer/iron-icon/iron-icon';

@customElement('widget-content')
export class Widget extends LitElement {
  @property({ type: String }) files: string = '';

  @property({ type: Boolean }) selected: boolean = false;
  static styles = css`
    :host {
      box-sizing: border-box;
      margin: 10px;
      border-radius: 5px;
      box-shadow: rgb(0 0 0 / 10%) 2px 3px 5px;
      width: 15em;
      heigth: 30em;
    }
    .active {
      border: 3px solid hsl(214, 90%, 52%);
    }
    iron-icon {
      width: 100px;
      height: 120px;
    }
    .widgets {
      display: flex;
      justify-content: center;
      flex-flow: column nowrap;
      align-items: center;
      padding: 10px;
    }
    .widget-name {
      font-size: 2rem;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class=${`widgets ${this.selected ? `active` : ''}`}>
        <iron-icon icon="icons:view-module" slot="prefix"></iron-icon>
        <div class="widget-name">${this.files}</div>
      </div>
    `;
  }
}
