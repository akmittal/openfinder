import { LitElement, html, css, property, customElement } from 'lit-element';

@customElement('file-actions')
export class Actions extends LitElement {
  @property({ type: String }) context = 'dir';

  static styles = css`
    :host {
      display: inline-block;
    }
    vaadin-button{
      border:1px solid #ccc;
    }
  `;

  render() {
    return html`
      <div
        class="actions"
        @click=${(e: any) => {
          console.log(e.target.tagName);
          if (e.target.tagName != 'VAADIN-BUTTON') {
            return;
          }
          const event = new CustomEvent('onaction', {
            detail: e.target.getAttribute('data-action'),
          });
          this.dispatchEvent(event);
          console.log(e.target.getAttribute('data-action'));
        }}
      >
        <vaadin-button data-action="new-subfolder" class="border">
          <iron-icon icon="lumo:edit" slot="prefix"></iron-icon>
          New Subfolder
        </vaadin-button>
        <vaadin-button data-action="fullscreen">
          <iron-icon icon="fullscreen" slot="prefix"></iron-icon>
          Maximize
        </vaadin-button>
       

        ${this.context === 'file'
          ? html`
           <vaadin-button data-action="rename">
          <iron-icon icon="fullscreen" slot="prefix"></iron-icon>
          Rename
        </vaadin-button>
        <vaadin-button data-action="change-alt">
          <iron-icon icon="edit" slot="prefix"></iron-icon>
          Change Description
        </vaadin-button>
              <vaadin-button data-action="view">
                <iron-icon icon="lumo:edit" slot="prefix"></iron-icon>
                View
              </vaadin-button>
              <vaadin-button  data-action="download">
                <iron-icon icon="lumo:edit" slot="prefix"></iron-icon>
                Download
              </vaadin-button>
            `
          : ''}
      </div>
    `;
  }
}
