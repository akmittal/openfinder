import {
  customElement,
  html,
  css,
  LitElement,
  property,
  query,
} from 'lit-element';
import '@material/mwc-dialog';
import '@material/mwc-button';

@customElement('queue-dialog')
export class QueueModal extends LitElement {
  @property({ type: Boolean }) opened = false;
  @property({ type: String }) message = '';
  static styles = css`
    :host {
      display: flex;
    }
  `;

  handleClick(e: any) {
    const event = new CustomEvent('onaction', {
      detail: {
        action: e.target.getAttribute('dialogAction'),
      },
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <mwc-dialog
        .open=${this.opened}
        heading="Warning"
        @click=${this.handleClick}
      >
        <p>${this.message}</p>
        <mwc-button slot="primaryAction" dialogAction="confirm"
          >Confirm</mwc-button
        >
        <mwc-button slot="secondaryAction" dialogAction="cancel"
          >Cancel</mwc-button
        >
      </mwc-dialog>
    `;
  }
}
