import {
    customElement,
    html,
    css,
    LitElement,
    property,
    query,
  } from 'lit-element';

  
  @customElement('loading-spinner')
  export class LoadingSpinner extends LitElement {
    
    @property({ type: Boolean }) show: boolean = false;
   
    static styles = css`
      :host {
        display: flex;

      }
      .loading{
          display:flex;
          align-items:center;
          justify-content:center;
          position:fixed;
          left:0;
          right:0;
          bottom:0;
          top:0;
          background:rgba(0,0,0,0.5);
          z-index:999;
      }
      .loading > *{
        width: 50%;
      }
    `;
 
  
    render() {
      return html`
        ${this.show? html`<div class="loading"><vaadin-progress-bar indeterminate value="0"></vaadin-progress-bar></div>`:html``}
      `;
    }
  }
  