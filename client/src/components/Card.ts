import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('file-card')
export class Card extends LitElement {
  @property({ type: Object }) data: any = null;
  @property({ type: Boolean }) selected: boolean = false;

  static styles = css`
    :host {
      box-sizing: border-box;
      display: inline-block;
      margin: 5px;
      background-color: #f1f1f1;
      border-radius: 5px;
      box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);

      cursor: pointer;
    }
    .card {
      padding: 10px;
    }
    .active {
      padding: 7px;
      border: 3px solid #0f0fca;
    }
    .meta {
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    .title {
      font-size: 1rem;
    }
    .sub {
      font-size: 0.8rem;
      color: #999;
    }
  `;

  render() {
    if (!this.data) {
      return html`Loading...`;
    }
    return html`
      <div class=${`card ${this.selected ? 'active' : ''}`}>
        <img
          src=${`http://localhost:3000/static${this.data.path}`}
          width="400"
        />
        <div class="meta">
          <div class="title">${this.data.name}</div>
          <div class="sub">${`${this.data.description}`}</div>
          <div class="sub">
            ${new Date(this.data.modified).toLocaleString()}
          </div>
          <div class="sub">${Math.floor(this.data.size / 1024)}KB</div>
          <div class="sub">${`${this.data.width} x ${this.data.height}`}</div>
         
        </div>
      </div>
    `;
  }
}
