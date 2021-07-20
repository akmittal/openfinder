import {
  customElement,
  html,
  css,
  LitElement,
  property,
  query,
} from 'lit-element';
import '@vaadin/vaadin-button';
import '@material/mwc-dialog';

@customElement('input-modal')
export class InputModal extends LitElement {
  @query('vaadin-dialog') dialog: any;
  @query('vaadin-text-field') input: any;
  @property({ type: Boolean }) opened: boolean = false;
  @property({ type: String }) header: string = '';

  static styles = css`
    :host {
      display: flex;
    }
    .mdc-dialog .mdc-dialog__container .mdc-dialog__surface .mdc-dialog__title {
      font-size: 1.5rem;
      font-weight: 500;
    }
  `;
  checkInput() {
    // should contain any html tags and special chars *^()%=#!
    const regx = new RegExp('.*?(<(.*)>.*?|<(.*)/>)|(.*?[*^()%=#!])');
    const status = regx.test(this.input.value);
    if (status) {
      this.input.invalid = true;
      return false;
    }
    return true;
  }
  handleClick(e: any) {
    if (this.checkInput() && this.input.value.length > 0) {
      const event = new CustomEvent('onsubmit', { detail: this.input.value.trim() });
      this.dispatchEvent(event);
      this.input.invalid = false;
    } else {
      this.input.invalid = true;
    }
  }
  handleCloseDialog() {
    this.input.value = '';
    this.input.invalid = false;
    const event = new CustomEvent('onclose', { detail: true });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <mwc-dialog .open=${this.opened} @closed=${this.handleCloseDialog} .heading=${this.header}>
      <hr></hr>
        <vaadin-text-field
          error-message="Invalid Input"
          @keypress=${(e: KeyboardEvent) => {
            if (this.input.value.length > 0) {
              this.input.invalid = false;
            }
            if (e.key === 'Enter') {
              this.handleClick(e);
            }
          }}
        ></vaadin-text-field>
        <vaadin-button @click=${this.handleClick}>Submit</vaadin-button>
      </mwc-dialog>
    `;
  }
}
