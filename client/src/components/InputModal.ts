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
  @property({ type: String }) label: string = '';
  static styles = css`
    :host {
      display: flex;
    }
  `;
  handleClick() {
    const event = new CustomEvent('onsubmit', { detail: this.input.value });
    this.dispatchEvent(event);
    this.input.value = "";
  }
  // constructor(){
  //   super();
  //   this.updateComplete.then(() => {
  //     this.dialog.renderer =(root:any) => {
  //       render(html`
  //       <vaadin-text-field></vaadin-text-field>
  //       <vaadin-button @click=${this.handleClick}>Submit</vaadin-button>
  //       `, root)
  //      }
  //   })
  // }

  render() {
    return html`
      <mwc-dialog .open=${this.opened}>
        <vaadin-text-field></vaadin-text-field>
        <vaadin-button @click=${this.handleClick}>Submit</vaadin-button>
      </mwc-dialog>
    `;
  }
}
