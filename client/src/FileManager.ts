import { LitElement, html, css, property, query } from 'lit-element';
import './components/Card';
import './components/Actions';
import './components/Directories';
import './components/InputModal';
import './components/LoadingSpinner';
import './components/Settings';
import './components/InputModalUploadImage';
import './components/alertDialog';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';

import '@vaadin/vaadin-upload';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-tree-column';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';

export class FileManager extends LitElement {
  @query('input-modal') inputModal: any;
  @query('input-modal-upload') uploadImageModal: any;
  @query('vaadin-upload') vaadinUpload: any;
  @query('queue-dialog') queueDialog: any;
  @property({ type: String }) serverURL: string = '';

  @property({ type: String }) sortColumn: string = 'name';
  @property({ type: Boolean }) isAscending: boolean = true;
  @property({ type: String }) inputModalType: string = '';
  @property({ type: Boolean }) inputModalState: boolean = false;
  @property({ type: Boolean }) uploadModalState: boolean = false;
  @property({ type: Boolean }) alertDialogState: boolean = false;
  @property({ type: Boolean }) appShown: boolean = true;
  @property({ type: Boolean }) showsubmit: boolean = true;
  @property({ type: Array }) files: Array<any> = [];
  @property({ type: Number }) directryKey: number = 0;
  @property({ type: Number }) thumbsize: number = 15;
  @property({ type: Boolean }) showSettings: boolean = false;
  @property({ type: Object }) context: any = { path: '/' };
  @property({ type: Object }) activeItem: any = null;
  @property({ type: String }) currentContext = 'dir';
  @property({ type: String }) searchTerm = '';
  @property({ type: Boolean }) isLoading: boolean = false;
  toggleInputModal() {
    this.inputModalState = !this.inputModalState;
  }
  toggleUploadModal() {
    this.uploadModalState = !this.uploadModalState;
  }
  toggleQueueDialog() {
    this.alertDialogState = !this.alertDialogState;
  }
  onFileUpload = (evt: CustomEvent) => {
    const items = this.vaadinUpload.files.map((file: any) => !file.complete);
    if (items.length === this.vaadinUpload.files.length) {
      this.vaadinUpload.files = [];
      this.reloadFiles();
    }
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
    this.isLoading = true;
    this.files = [];
    this.files = (
      await (await fetch(`${this.serverURL}/file?context=${context}`)).json()
    ).data;
    if (this.showsubmit) {
      this.files = this.files.filter((file: any) => file.type !== 'video');
    }
    this.isLoading = false;
  }

  static styles = css`
    :host {
      overflow: hidden;
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
      justify-content: center;

      flex-direction: row;
      flex-wrap: wrap;
      overflow-y: scroll;
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
      z-index: 9999;
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

    .setting-container {
      display: flex;
      padding: 10px 10px;
    }
  `;
  handleSubmit = (e: any) => {
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
  triggerDownload() {
    const link = document.createElement('a');
    link.href = `${this.serverURL}/static${this.activeItem.path}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
  toggleSettings = () => {
    this.showSettings = !this.showSettings;
  };
  rename = async (data: any) => {
    let url = `${this.serverURL}/rename`;
    let body = {
      context: this.context.path,
      filename: this.activeItem.name,
      newFilename: data,
      filePath: this.activeItem.path,
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

  delete = async (e: any) => {
    const url = `${this.serverURL}/delete`;
    let body = {
      filename: this.activeItem.name,
      context: this.context.path,
      filePath: this.activeItem.path,
    };
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
      case 'replace':
        this.inputModalType = e.detail;
        this.toggleUploadModal();
        break;
      case 'change-alt':
        this.inputModalType = e.detail;
        this.toggleInputModal();
        break;
      case 'download':
        this.triggerDownload();
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
        this.toggleInputModal();
        break;
      case 'rename':
        await this.rename(evt.detail);
        this.toggleInputModal();
        this.reloadFiles();
        break;
      case 'replace':
        this.toggleUploadModal();
        this.reloadFiles();
        break;
      case 'change-alt':
        await this.changeAlt(evt.detail);
        this.toggleInputModal();
        this.reloadFiles();
        break;
    }
  };
  handleSortChange(e: CustomEvent) {
    console.log(e.detail, this.files);
    this.sortColumn = e.detail.column;
    this.isAscending = e.detail.isAscending;
  }
  getSortedFiles() {
    return this.files.sort((prev, curr) => {
      const prevData =
        typeof prev[this.sortColumn] === 'string'
          ? prev[this.sortColumn].toLowerCase()
          : prev[this.sortColumn];
      const currData =
        typeof curr[this.sortColumn] === 'string'
          ? curr[this.sortColumn].toLowerCase()
          : curr[this.sortColumn];

      if (this.isAscending) {
        return prevData > currData ? 1 : -1;
      } else {
        return prevData > currData ? -1 : 1;
      }
    });
  }
  handleThumbChange = (e: CustomEvent) => {
    this.thumbsize = e.detail;
  };

  async handleDialogAction(e: any) {
    if (e.detail.action === 'confirm') {
      await this.delete(e);
      this.reloadFiles();
    }
  }
  render() {
    return html`<input-modal
        .opened=${this.inputModalState}
        @onsubmit=${this.handleInoutSelect}
      ></input-modal>
      <input-modal-upload
        .opened=${this.uploadModalState}
        serverURL=${this.serverURL}
        imagePath=${this.activeItem ? this.activeItem.path : ''}
        @onsubmit=${this.handleInoutSelect}
      ></input-modal-upload>
      <queue-dialog
        itemName=${this.activeItem ? this.activeItem.name : ''}
        .opened=${this.alertDialogState}
        @onaction=${this.handleDialogAction}
      ></queue-dialog>
      <div class=${!this.appShown ? 'hidden app-layout' : 'app-layout'}>
        <of-settings
          .show=${this.showSettings}
          @op:sortfield=${this.handleSortChange}
          @of:close-settings=${(e: CustomEvent) => this.toggleSettings()}
          @op:thumbchange=${this.handleThumbChange}
        ></of-settings>
        <div class="wrapper">
          <loading-spinner .show=${this.isLoading}></loading-spinner>
          <file-actions
            selectedItemType=${this.activeItem ? this.activeItem.type : ''}
            context=${this.currentContext}
            @onaction=${this.handleFileAction}
          ></file-actions>
          <div class="padding-x">
            <vaadin-text-field
              placeholder="Search..."
              @input=${this.handleSearch}
            ></vaadin-text-field>
          </div>
          <div class="setting-container">
            <iron-icon
              icon="settings"
              role="button"
              @click=${this.toggleSettings}
            ></iron-icon>
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
            accept="video/*,image/*"
            .target=${`${this.serverURL}/file`}
            .headers=${{ path: this.context.path }}
            @upload-success=${this.onFileUpload}
          >
          </vaadin-upload>

          <div class="image-wrapper">
            ${this.getSortedFiles().length === 0
              ? html`<h4>No files Found</h4>`
              : html``}
            ${this.getSortedFiles()
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
                    style=${`width:${this.thumbsize}em`}
                    .serverURL=${this.serverURL}
                    .data=${file}
                    @dblclick=${(e: Event) => {
                      this.handleSubmit(e);
                    }}
                    @click=${(e: Event) => {
                      this.activeItem = file;
                      this.currentContext = 'file';
                    }}
                    @ondelete=${(e: Event) => {
                      this.toggleQueueDialog();
                    }}
                    .selected=${this.activeItem === file}
                  ></file-card>`
              )}
          </div>
        </div>

        <section class=${`selection ${!this.showsubmit ? 'hidden' : ''}`}>
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
