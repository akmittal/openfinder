import { LitElement, html, css, property, query } from 'lit-element';
import './components/Card';
import './components/Actions';
import './components/Directories';
import './components/InputModal';


import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';

import '@vaadin/vaadin-upload';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-tree-column';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';


export class FileManager extends LitElement {
  @query('input-modal') inputModal: any;
  @property({ type: String }) serverURL: string = '';
  @property({ type: String }) inputModalType: string = '';
  @property({ type: Boolean }) inputModalState: boolean = false;
  @property({ type: Boolean }) appShown: boolean = true;
  @property({ type: Array }) files: Array<any> = [];
  @property({ type: Object }) context: any = { path: '/' };
  @property({ type: Object }) activeItem: any = null;
  @property({ type: String }) currentContext = 'dir';
  @property({ type: String }) searchTerm = '';
  toggleInputModal() {
    this.inputModalState = !this.inputModalState;
  }
  onFileUpload = async (evt: CustomEvent) => {
    this.getFiles(this.context.path);
  };
  connectedCallback() {
    super.connectedCallback();
    this.getFiles(this.context.path);
  }

  async getFiles(context: string) {
    this.files = (
      await (await fetch(`${this.serverURL}/file?context=${context}`)).json()
    ).data;
  }

  static styles = css`
    :host {
      position: relative;
      background:#f1f1f1;
      max-height: 100vh;
      overflow: scroll;
      display: block;
      position: relative;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;

      margin: 0 auto;
      /* text-align: center; */
    }
    .main {
      
      display: flex;
      position:relative;
      
    }
    .drawer {
      flex: 0 0 25%;
      min-width: 200px;
    }
    .padding-x {
      padding: 0px 10px;
    }
   

    .flex {
      display: flex;
    }
    .flex-col {
      flex-direction: column;
    }
    [part='row']:selected {
      box-shadow: inset 0 0 0 1px var(--lumo-contrast-30pct);
      border: 5px solid red;
      background-color: var(--lumo-base-color);
    }
    .image-wrapper {
      
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .image-wrapper > * {
      flex: 0 0 calc(50% - 10px);
    }
    .selection {
      width: 100%;
      height: 50px;
      background: rgb(255, 255, 255);
      border-top: 1px;
      border-style: solid;
      border-color: #ccc;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: flex-end;
      padding: 0px 15px;
      box-sizing: border-box;
    }
    .app-layout {
      display: flex;
      flex-direction: column;
    }
    .hidden {
      display: none;
    }
    .content {
      padding:10px;
      background-color:#fff;
      padding-bottom: 80px;
      display: flex;
      align-items: center;
      width: 100%;
    }
  `;
  handleSubmit = () => {
    console.log({ a: this.activeItem });
    const event = new CustomEvent('mediaselected', {
      detail: this.activeItem,
    });
    this.dispatchEvent(event);
  };
  handleCancel = () => {
    const event = new CustomEvent('fm:cancelled');
    this.dispatchEvent(event);
    this.appShown = false;
  };
  handleSelection = async (e: CustomEvent) => {
    this.context = e.detail;
    this.currentContext = 'dir';
    console.log(e);
    await this.getFiles(e.detail.path);
  };
  createNewSubFolder(folderName: string) {
    // console.log('a', this.context);
    fetch(`${this.serverURL}/directory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        context: this.context.path,
        dir: folderName,
      }),
    });
  }
  rename = (data: any) => {
    let url = `${this.serverURL}/rename`;
    let body = {
      context: this.context.path,
      filename: this.activeItem.name,
      newFilename: data,
    };
    console.log({ data, curr: this.currentContext });
    if (this.currentContext === 'dir') {
      body.context = body.context.split('/');
    } else {
      url = `${this.serverURL}/rename`;
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'content-type': 'application/json' },
    });
  };

  handleSearch = (e: any) => {
    console.log(this.searchTerm);
    this.searchTerm = e.target.value;
  };
  changeAlt = (description: string) => {
    let url = `${this.serverURL}/meta`;
    let body = {
      context: this.context.path,
      filename: this.activeItem.name,
      description,
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  render() {
    return html`
      <div class=${!this.appShown ? 'hidden' : ''}>
        <div class="app-layout">
          <input-modal
            .opened=${this.inputModalState}
            @onsubmit=${(evt: CustomEvent) => {
              switch (this.inputModalType) {
                case 'new-subfolder':
                  this.createNewSubFolder(evt.detail);
                  break;
                case 'rename':
                  this.rename(evt.detail);
                  break;
                case 'change-alt':
                  this.changeAlt(evt.detail);
                  break;
              }
              this.toggleInputModal();
            }}
          ></input-modal>

          <div
            style="display:flex; justify-content:space-between; width:100%; border-bottom:1px; border-style:solid; border-color:#d1d1d1;"
          >
            <file-actions
              context=${this.currentContext}
              @onaction=${(e: CustomEvent) => {
                switch (e.detail) {
                  case 'new-subfolder':
                    this.inputModalType = e.detail;
                    this.toggleInputModal();
                    break;
                  case 'rename':
                    this.inputModalType = e.detail;
                    this.toggleInputModal();
                    break;
                  case 'change-alt':
                    this.inputModalType = e.detail;
                    this.toggleInputModal();
                    break;
                }
              }}
            ></file-actions>
            <div class="padding-x">
              <vaadin-text-field
                placeholder="Search..."
                @input=${this.handleSearch}
              ></vaadin-text-field>
              <!-- <iron-icon icon="settings"></iron-icon> -->
            </div>
          </div>
          <div class="main">
            <file-directories
              .serverURL=${this.serverURL}
              class="drawer"
              @onselection=${this.handleSelection}
            ></file-directories>

            <div class="content flex flex-col">
              <vaadin-upload
                data-action="edit"
                type="file"
                accept="image/*"
                .target=${`${this.serverURL}/file`}
                .headers=${{ path: this.context.path }}
                @upload-success=${this.onFileUpload}
              >
              </vaadin-upload>
              <div class="image-wrapper">
                ${this.files
                  .filter(file => {
                    if (!this.searchTerm) {
                      return true;
                    } else {
                      return file.name
                        .toLowerCase()
                        .includes(this.searchTerm.toLowerCase());
                    }
                  })
                  .map(
                    file =>
                      html`<file-card
                        .serverURL=${this.serverURL}
                        .data=${file}
                        @dblclick=${this.handleSubmit}
                        @click=${(e: Event) => {
                          this.activeItem = file;
                          this.currentContext = 'file';
                        }}
                        .selected=${this.activeItem === file}
                      ></file-card>`
                  )}
              </div>
            </div>
            <div class="selection">
              <div>
                <vaadin-button @click=${this.handleCancel}
                  >Cancel</vaadin-button
                >
                <vaadin-button
                  theme="primary"
                  @click=${this.handleSubmit}
                  .disabled=${!this.activeItem}
                  >Submit</vaadin-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
