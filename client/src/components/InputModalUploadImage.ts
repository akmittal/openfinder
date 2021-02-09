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

  onFileUpload = (evt: CustomEvent) => {
    const items = this.vaadinUpload.files.map((file: any) => !file.complete);
    if (items.length === this.vaadinUpload.files.length) {
      this.vaadinUpload.files = [];
    }
  };
  static styles = css`
    :host {
      display: flex;
    }
  `;

  handleClick(evt: any) {
    evt.preventDefault();
    const event = new CustomEvent('onsubmit', { detail: evt });
    this.dispatchEvent(event);
  }

  render() {
    console.log('>>>>> modal pop', this.opened);
    return html` <mwc-dialog .open=${this.opened}>
      <vaadin-upload
        style="overflow:visible"
        data-action="edit"
        type="file"
        accept="image/*"
        .headers=${{ path: this.context.path }}
        @upload-request=${this.handleClick}
        @upload-success=${this.onFileUpload}
      >
      </vaadin-upload>
    </mwc-dialog>`;
  }
}
