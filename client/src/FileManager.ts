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
  @query('vaadin-upload') vaadinUpload: any;
  @property({ type: String }) serverURL: string = '';
  @property({ type: String }) inputModalType: string = '';
  @property({ type: Boolean }) inputModalState: boolean = false;
  @property({ type: Boolean }) appShown: boolean = true;
  @property({ type: Array }) files: Array<any> = [];
  @property({ type: Number }) directryKey: number = 0;

  @property({ type: Object }) context: any = { path: '/' };
  @property({ type: Object }) activeItem: any = null;
  @property({ type: String }) currentContext = 'dir';
  @property({ type: String }) searchTerm = '';
  toggleInputModal() {
    this.inputModalState = !this.inputModalState;
  }
  onFileUpload = (evt: CustomEvent) => {
    const items = this.vaadinUpload.files.map((file: any) => !file.complete);
    if (items.length === this.vaadinUpload.files.length) {
      this.vaadinUpload.files = [];
    }
    this.reloadFiles();
  };
  connectedCallback() {
    super.connectedCallback();
  }

  attributeChangedCallback(name: string, oldval: any, newval: any) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
    if (name === 'appshown' && newval === 'true') {
      this.getFiles(this.context.path);
    }
  }
  async reloadFiles() {
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
      background: #f1f1f1;
      flex: 1 1 100%;

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

    .wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px;
      border-style: solid;
      border-color: #d1d1d1;
    }
    .main {
      display: flex;
      position: relative;
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
      overflow-y: scroll;
    }
    .image-wrapper > * {
      flex: 0 0 calc(25% - 15px);
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
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-areas:
        'head head head'
        'drawer main main'
        'drawer footer footer';
      grid-gap: 10px;
      grid-template-rows: 50px 1fr 50px;
      grid-template-columns: 250px 1fr;
    }
    .app-layout > .wrapper {
      grid-area: head;
    }
    .app-layout > file-directories {
      grid-area: drawer;
    }
    .app-layout > .selection {
      grid-area: footer;
    }
    .hidden {
      display: none;
    }
    .content {
      grid-area: main;

      overflow: hidden;
      padding: 10px;
      background-color: #fff;

      display: flex;
      align-items: center;
      width: 100%;
    }
  `;
  handleSubmit = () => {
    const event = new CustomEvent('mediaselected', {
      detail: this.activeItem,
    });
    this.dispatchEvent(event);
  };
  handleCancel = () => {
    const event = new CustomEvent('fm:cancelled');
    this.dispatchEvent(event);
  };
  handleSelection = async (e: CustomEvent) => {
    this.context = e.detail;
    this.currentContext = 'dir';

    await this.getFiles(e.detail.path);
  };

  async createNewSubFolder(folderName: string) {
    // console.log('a', this.context);
    return fetch(`${this.serverURL}/directory`, {
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
  rename = async (data: any) => {
    let url = `${this.serverURL}/rename`;
    let body = {
      context: this.context.path,
      filename: this.activeItem.name,
      newFilename: data,
    };

    if (this.currentContext === 'dir') {
      body.context = body.context.split('/');
    } else {
      url = `${this.serverURL}/rename`;
    }

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'content-type': 'application/json' },
    });
  };

  handleSearch = (e: any) => {
    this.searchTerm = e.target.value;
  };
  handleFileAction = (e: CustomEvent) => {
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
  };
  changeAlt = async (description: string) => {
    let url = `${this.serverURL}/meta`;
    let body = {
      context: this.context.path,
      filename: this.activeItem.name,
      description,
    };
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };
  handleInoutSelect = async (evt: CustomEvent) => {
    switch (this.inputModalType) {
      case 'new-subfolder':
        await this.createNewSubFolder(evt.detail);
        this.directryKey = Math.random();

        break;
      case 'rename':
        await this.rename(evt.detail);
        this.reloadFiles();
        break;
      case 'change-alt':
        await this.changeAlt(evt.detail);
        this.reloadFiles();
        break;
    }
    this.toggleInputModal();
  };

  render() {
    return html`<input-modal
        .opened=${this.inputModalState}
        @onsubmit=${this.handleInoutSelect}
      ></input-modal>
      <div class=${!this.appShown ? 'hidden app-layout' : 'app-layout'}>
        <div class="wrapper">
          <file-actions
            context=${this.currentContext}
            @onaction=${this.handleFileAction}
          ></file-actions>
          <div class="padding-x">
            <vaadin-text-field
              placeholder="Search..."
              @input=${this.handleSearch}
            ></vaadin-text-field>
          </div>
        </div>

        <file-directories
          changed=${this.directryKey}
          .serverURL=${this.serverURL}
          class="drawer"
          @onselection=${this.handleSelection}
        ></file-directories>

        <div class="content flex flex-col">
          <vaadin-upload
            style="overflow:visible"
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
        <section class="selection">
          <section>
            <vaadin-button @click=${this.handleCancel}>Cancel</vaadin-button>
            <vaadin-button
              theme="primary"
              @click=${this.handleSubmit}
              .disabled=${!this.activeItem}
              >Submit</vaadin-button
            >
          </section>
        </section>
      </div> `;
  }
}
