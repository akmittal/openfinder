import {
  customElement,
  html,
  css,
  LitElement,
  property,
  query,
} from 'lit-element';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-upload';
import '@material/mwc-dialog';

@customElement('input-modal-upload')
export class InputModal extends LitElement {
  @query('vaadin-upload') vaadinUpload: any;
  @property({ type: Boolean }) opened: boolean = false;
  @property({ type: Object }) context = { path: '/' };
  @property({ type: String }) imagePath = '';
  @property({ type: String }) serverURL = '';


  onFileUpload = (evt: CustomEvent) => {
    const items = this.vaadinUpload.files.map((file: any) => !file.complete);
    if (items.length === this.vaadinUpload.files.length) {
      this.vaadinUpload.files = [];
      const event = new CustomEvent('onsubmit', { detail: evt });
      this.dispatchEvent(event);
    }
  };
  static styles = css`
    :host {
      display: flex;
    }
  `;

  render() {
    const url = `${this.serverURL}/replace?path=${this.imagePath}`;
    return html` <mwc-dialog .open=${this.opened}>
      <vaadin-upload
        style="overflow:visible"
        data-action="edit"
        type="file"
        accept="image/*"
        .target=${url}
        .headers=${{ path: this.context.path }}
        @upload-success=${this.onFileUpload}
      >
      </vaadin-upload>
    </mwc-dialog>`;
  }
}
