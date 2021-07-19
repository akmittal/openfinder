import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('file-actions')
export class Actions extends LitElement {
  @property({ type: String }) context = 'dir';
  @property({ type: String }) selectedItemType = '';
  @property({ type: String }) currentpath:string = '/';

  static styles = css`
    :host {
      width: 100%;
      display: inline-block;
    }
    vaadin-button {
      border: 1px solid #ccc;
      background-color: #fff;
    }
  `;

  checkDirectory() {
    if (this.context !== 'file' && this.currentpath !== '/') {
      return true;
    }
    return false;
  }
  render() {
    return html`
      <div
        class="actions"
        @click=${(e: any) => {
          if (e.target.tagName != 'VAADIN-BUTTON') {
            return;
          }
          const event = new CustomEvent('onaction', {
            detail: e.target.getAttribute('data-action'),
          });
          this.dispatchEvent(event);

        }}
      >
        <vaadin-button data-action="New Subfolder" class="border">
          <iron-icon icon="add" slot="prefix"></iron-icon>
          New Subfolder
        </vaadin-button>
        ${this.checkDirectory()
          ? html`<vaadin-button data-action="Rename Directory">
                <iron-icon icon="find-replace" slot="prefix"></iron-icon>
                Rename Directory
              </vaadin-button>
              <vaadin-button data-action="Delete Directory">
                <iron-icon
                  icon="icons:delete-forever"
                  slot="prefix"
                ></iron-icon>
                Delete Directory
              </vaadin-button>`
          : ''}
        <!-- <vaadin-button data-action="fullscreen">
          <iron-icon icon="fullscreen" slot="prefix"></iron-icon>
          Maximize
        </vaadin-button> -->

        ${this.context === 'file'
          ? this.selectedItemType !== 'video'
            ? html`
                <vaadin-button data-action="Rename">
                  <iron-icon icon="find-replace" slot="prefix"></iron-icon>
                  Rename
                </vaadin-button>
                <vaadin-button data-action="Change Alt">
                  <iron-icon icon="create" slot="prefix"></iron-icon>
                  Change Alt
                </vaadin-button>
                <vaadin-button data-action="Replace">
                  <iron-icon icon="find-replace" slot="prefix"></iron-icon>
                  Replace
                </vaadin-button>
                <vaadin-button data-action="Download">
                  <iron-icon icon="visibility" slot="prefix"></iron-icon>
                  Download
                </vaadin-button>
              `
            : html` <vaadin-button data-action="Rename">
                  <iron-icon icon="find-replace" slot="prefix"></iron-icon>
                  Rename
                </vaadin-button>
                <vaadin-button data-action="Download">
                  <iron-icon icon="visibility" slot="prefix"></iron-icon>
                  Download
                </vaadin-button>`
          : ''}
      </div>
    `;
  }
}
