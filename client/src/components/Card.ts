import { LitElement, html, css, property, customElement } from 'lit-element';
import '@vaadin/vaadin-button';
import '@polymer/iron-icon/iron-icon';

@customElement('file-card')
export class Card extends LitElement {
  @property({ type: Object }) data: any = null;
  @property({ type: Boolean }) selected: boolean = false;
  @property({ type: String }) serverURL: string = '';

  static styles = css`
    :host {
      box-sizing: border-box;
      /* display: inline-block; */
      margin: 5px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);

      cursor: pointer;
    }
    .card {
      padding: 10px;
    }
    .active {
      padding: 7px;
      border: 3px solid hsl(214, 90%, 52%);
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

  handleClipUrl(e: Event) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        navigator.clipboard.writeText(
          `${this.serverURL}/static${this.data.path}`
        );
      }
    } catch (err) {
      console.error('Clipboard Unsucessfull');
    }
  }
  render() {
    if (!this.data) {
      return html`Loading...`;
    }
    return html`
      <div class=${`card ${this.selected ? 'active' : ''}`}>
        ${this.data.type === 'image'
          ? html`<img
              src=${`${this.serverURL}/static${this.data.path}`}
              width="100%"
              loading="lazy"
            />`
          : html`<video preload='metadata' controls width='100%' heigth='100%'>
              <source src=${`${this.serverURL}/static${this.data.path}`} />
            </video> `}
        <div class="meta">
          <div class="title">${this.data.name}</div>
          <div class="sub">${`${this.data.description}`}</div>
          <div class="sub">
            ${new Date(this.data.modified).toLocaleString()}
          </div>
          <div class="sub">${Math.floor(this.data.size / 1024)}KB</div>
          <div class="sub">${`${this.data.width} x ${this.data.height}`}</div>
        </div>
        <vaadin-button @click=${this.handleClipUrl}>
          <iron-icon icon='content-copy' slot='prefix'></iron-icon>
          Copy Link
        </vaadin-button>
      </div>
    `;
  }
}
