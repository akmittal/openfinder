import { LitElement, html, css, property, query } from 'lit-element';
import './components/Card';
import './components/Actions';
import './components/Directories';
import './components/InputModal';
import './components/LoadingSpinner';
import './components/Settings';
import './components/InputModalUploadImage';
import './components/SearchContent';
import './components/alertDialog';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-notification';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import '@vaadin/vaadin-upload';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-tree-column';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';

export class FileManager extends LitElement {
  @query('input-modal') inputModal: any;
  @query('vaadin-notification') notification: any;
  @query('input-modal-upload') uploadImageModal: any;
  @query('vaadin-upload') vaadinUpload: any;
  @query('queue-dialog') queueDialog: any;
  @query('vaadin-text-field') searchTextField: any;
  @property({ type: String }) serverURL: string = '';

  @property({ type: String }) sortColumn: string = 'name';
  @property({ type: Boolean }) isAscending: boolean = true;
  @property({ type: String }) inputModalType: string = '';
  @property({ type: Boolean }) inputModalState: boolean = false;
  @property({ type: Boolean }) uploadModalState: boolean = false;
  @property({ type: Boolean }) alertDialogState: boolean = false;
  @property({ type: String }) alertmessage = '';
  @property({ type: String }) OprType = '';
  @property({ type: String }) renameDirKey = '';
  @property({ type: Boolean }) appShown: boolean = true;
  @property({ type: Boolean }) showsubmit: boolean = true;
  @property({ type: Array }) files: Array<any> = [];
  @property({ type: Number }) directryKey: number = 0;
  @property({ type: Number }) thumbsize: number = 15;
  @property({ type: Boolean }) showSettings: boolean = false;
  @property({ type: Object }) context: any = { path: '/' };
  @property({ type: Object }) activeItem: any = null;
  @property({ type: Object }) searchActiveItem: any = null;
  @property({ type: String }) currentContext = 'dir';
  @property({ type: String }) searchTerm = '';
  @property({ type: Boolean }) isLoading: boolean = false;
  @property({ type: Object }) observerable: any = {};
  __draggingElement: any;
  __movedlocation: any = {};

  toggleInputModal() {
    this.inputModalState = !this.inputModalState;
  }
  toggleUploadModal() {
    this.uploadModalState = !this.uploadModalState;
  }
  toggleQueueDialog() {
    this.alertDialogState = !this.alertDialogState;
  }

  handleCloseModalState() {
    this.inputModalState = false;
    this.uploadModalState = false;
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
    this.shadowRoot?.addEventListener('onqueueaction', (e: any) => {
      this.handlequeue(e);
    });
  }

  firstUpdated() {
    if (this.searchTextField) {
      this.handleSearchAddEvent();
    }
  }

  handleSearchAddEvent() {
    this.observerable = fromEvent(this.searchTextField, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(this.handleSearch);
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
    let opts = {
      context: context,
    };

    this.files = (
      await this.fetchContent(`${this.serverURL}/get/file`, opts)
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
      flex: 1 1 auto;
      display: block;
      position: relative;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      margin: 0 auto;
      width: 100%;
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
    .search-wrapper {
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
    .app-layout.gallery {
      grid-template-rows: 50px 1fr 5px;
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
    if (e.detail) {
      this.context = e.detail;
      this.currentContext = 'dir';
      await this.getFiles(e.detail.path);
    }
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
    const url = `${this.serverURL}/add/directory`;
    const body = {
      context: this.context.path,
      dir: folderName,
    };
    return this.fetchContent(url, body);
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

    return this.fetchContent(url, body);
  };

  renameDirectory = (data: any) => {
    let url = `${this.serverURL}/rename/directory`;
    let body = {
      context: this.context.path,
      leafNode: this.context.name,
      newDirname: data,
    };
    return this.fetchContent(url, body);
  };

  fetchContent = (url: any, opts: any) => {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(opts),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .catch((err: any) => {
        this.handleNotificationPopup(err.statusText);
      });
  };

  handleNotificationPopup = (err: any) => {
    this.notification.renderer = function (root: any) {
      const container = window.document.createElement('div');
      const boldText = window.document.createElement('b');
      boldText.textContent = 'Error';

      const br = window.document.createElement('br');
      const plainText = window.document.createTextNode(err);

      container.appendChild(boldText);
      container.appendChild(br);
      container.appendChild(plainText);

      root.appendChild(container);
    };
    this.notification.open();
  };

  delete = async (e: any) => {
    const url = `${this.serverURL}/delete`;
    let body = {
      context: this.context.path,
      filePath: this.activeItem.path,
    };
    return this.fetchContent(url, body);
  };

  deleteDirectory = async () => {
    const url = `${this.serverURL}/delete/directory`;
    let body = {
      context: this.context.path,
    };
    return this.fetchContent(url, body);
  };

  moveImage() {
    const url = `${this.serverURL}/move/image`;
    let body = {
      filename: this.activeItem.name,
      context: this.context.path,
      newPath: this.__movedlocation.dropTargetItem.path,
    };
    return this.fetchContent(url, body);
  }

  moveDirectory() {
    const url = `${this.serverURL}/move/directory`;
    let body = {
      context: this.context.path,
      currentDir: this.__draggingElement.path,
      leafNode: this.__draggingElement.name,
      newPath: this.__movedlocation.dropTargetItem.path,
    };
    return this.fetchContent(url, body);
  }
  handleSearch = async (e: any) => {
    this.searchTerm = e.target ? e.target.value : e;
    this.files = [];
    if (this.searchTerm.length > 0) {
      this.currentContext = 'search';
      this.files = (
        await this.fetchContent(`${this.serverURL}/search`, {
          searchKey: this.searchTerm,
        })
      ).data;
    } else {
      this.reloadFiles();
      this.currentContext = 'dir';
    }
  };
  handleFileAction = (e: CustomEvent) => {
    switch (e.detail) {
      case 'New Subfolder':
        this.inputModalType = e.detail;
        this.toggleInputModal();
        break;
      case 'Rename':
        this.inputModalType = e.detail;
        this.toggleInputModal();
        break;
      case 'Rename Directory':
        this.inputModalType = e.detail;
        this.OprType = e.detail;
        this.toggleInputModal();
        break;
      case 'Delete Directory':
        this.OprType = e.detail;
        this.alertmessage = `Are you sure want to delete this directory ${this.context.path}`;
        this.toggleQueueDialog();
        break;
      case 'Replace':
        this.inputModalType = e.detail;
        this.toggleUploadModal();
        break;
      case 'Change Alt':
        this.inputModalType = e.detail;
        this.toggleInputModal();
        break;
      case 'Download':
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
      case 'New Subfolder':
        await this.createNewSubFolder(evt.detail);
        this.directryKey = Math.random();
        break;
      case 'Rename':
        await this.rename(evt.detail);
        this.resetSelection();
        this.reloadFiles();
        break;
      case 'Rename Directory':
        this.renameDirKey = evt.detail;
        this.alertmessage = `Are you sure want to rename this directory ${this.context.path}`;
        this.toggleQueueDialog();
        break;
      case 'Replace':
        this.toggleUploadModal();
        this.reloadFiles();
        this.resetSelection();
        break;
      case 'Change Alt':
        await this.changeAlt(evt.detail);
        this.reloadFiles();
        this.resetSelection();
        break;
    }
    if(this.inputModalState) {
      this.toggleInputModal();
    }
  };

  resetSelection() {
    this.activeItem = null;
    this.currentContext = 'dir';
  }
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
  changeFileContext = (file: any) => {
    this.activeItem = file;
    this.currentContext = 'file';
  };

  async handleDialogAction(e: any) {
    if (e.detail.action === 'confirm') {
      switch (this.OprType) {
        case 'Delete':
          await this.delete(e);
          if (this.currentContext === 'search' && this.searchTerm.length > 0) {
            this.handleSearch(this.searchTerm);
          } else {
            this.reloadFiles();
          }
          break;
        case 'image:Drag':
          await this.moveImage();
          this.context = { path: this.context.path };
          this.reloadFiles();
          break;
        case 'DragDir':
          await this.moveDirectory();
          this.directryKey = Math.random();
          this.context = { path: '/' };
          this.reloadFiles();
          break;
        case 'Rename Directory':
          await this.renameDirectory(this.renameDirKey);
          this.context = { path: '/' };
          this.directryKey = Math.random();
          this.renameDirKey = '';
          this.reloadFiles();
          break;
        case 'Delete Directory':
          await this.deleteDirectory();
          this.context = { path: '/' };
          this.directryKey = Math.random();
          this.reloadFiles();
          break;
      }
    }
    this.OprType = '';
    this.toggleQueueDialog();
  }
  handleDialogMessage(e: any) {
    switch (e.detail.action) {
      case 'image:Drag':
        this.alertmessage = `Are you sure want to move this Image ${this.activeItem.name}, 
        To new location.. ${this.__movedlocation.dropTargetItem.path}`;
        break;
      case 'Delete':
        this.alertmessage = `Are you sure want to delete this Image... ${this.activeItem.name}`;
        break;
      case 'DragDir':
        this.alertmessage = `Are you sure want to move this Directory... ${this.__movedlocation.dragData[0].data} to  ${this.__movedlocation.dropTargetItem.path}`;
    }
  }
  handlequeue(e: any) {
    const { draggedEl, data, action } = e.detail;
    let draggedElPathLength;
    let dropElPathLength = data.dropTargetItem.path.length;
    let sub;
    if (draggedEl) {
      draggedElPathLength = draggedEl.path.length;
      sub = data.dropTargetItem.path.substring(0, draggedElPathLength);
    }
    if (
      draggedEl &&
      draggedEl.path !== data.dropTargetItem.path &&
      draggedEl.path !== sub &&
      draggedEl.name !==
        draggedEl.path.substring(dropElPathLength + 1, draggedElPathLength)
    ) {
      this.OprType = e.detail.action;
      this.__movedlocation = e.detail.data;
      this.__draggingElement = draggedEl;
      this.handleDialogMessage(e);
      this.toggleQueueDialog();
      return;
    }
    if (
      action === 'image:Drag' &&
      data.dropTargetItem.path !== this.context.path
    ) {
      this.OprType = e.detail.action;
      this.__movedlocation = data;
      this.__draggingElement = this.activeItem;
      this.handleDialogMessage(e);
      this.toggleQueueDialog();
      return;
    } else {
      this.alertmessage = `Something went wrong.... Please select different location`;
      this.toggleQueueDialog();
      this.__draggingElement = null;
      this.__movedlocation = null;
      this.OprType = '';
    }
  }

  handleDeleteAction(e: any) {
    this.OprType = e.detail.action;
    this.handleDialogMessage(e);
    this.toggleQueueDialog();
  }

  handleGalleryDisplay() {
    const searchLen = this.searchTerm.length;
    const fileLen = this.files.length;
    if (searchLen === 0 && fileLen > 0) {
      return true;
    }
    return false;
  }
  getAppLayoutClass() {
    if (!this.appShown) {
      return 'hidden app-layout';
    } else {
      if (!this.showsubmit) {
        return `app-layout gallery`;
      }
      return `app-layout`;
    }
  }

  render() {
    return html`
      <input-modal
        .header=${this.inputModalType}
        .opened=${this.inputModalState}
        @onsubmit=${this.handleInoutSelect}
        @onclose=${this.handleCloseModalState}
      ></input-modal>
      <input-modal-upload
        .opened=${this.uploadModalState}
        .header=${this.inputModalType}
        serverURL=${this.serverURL}
        imagePath=${this.activeItem ? this.activeItem.path : ''}
        @onsubmit=${this.handleInoutSelect}
        @onclose=${this.handleCloseModalState}
      ></input-modal-upload>
      <queue-dialog
        .message=${this.alertmessage ? this.alertmessage : ''}
        .opened=${this.alertDialogState}
        oprType=${this.OprType}
        @onaction=${this.handleDialogAction}
      ></queue-dialog>
      <vaadin-notification .duration="4000" position="bottom-center">
      </vaadin-notification>
      <div class=${this.getAppLayoutClass()}>
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
            currentPath=${this.context.path}
            @onaction=${this.handleFileAction}
          ></file-actions>
          <div class="padding-x">
            <vaadin-text-field placeholder="Search..."></vaadin-text-field>
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
          @click=${(e: any) => {
            if (this.searchTerm.length > 0) {
              this.searchTextField.value = '';
              this.searchTerm = '';
              this.observerable.unsubscribe();
              this.handleSearchAddEvent();
              this.currentContext = 'dir';
            }
          }}
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
            .target=${`${this.serverURL}/add/file`}
            .headers=${{ path: this.context.path }}
            @upload-success=${this.onFileUpload}
            @upload-error=${(e: any) => {
              this.handleNotificationPopup(e.detail.xhr.response);
            }}
          >
          </vaadin-upload>

          ${this.handleGalleryDisplay()
            ? html` <div class="image-wrapper">
                ${this.getSortedFiles().length === 0
                  ? html`<h4>No files Found</h4>`
                  : html``}
                ${this.getSortedFiles().map(
                  file =>
                    html`<file-card
                      style=${`width:${this.thumbsize}em`}
                      .serverURL=${this.serverURL}
                      .data=${file}
                      @dblclick=${(e: Event) => {
                        this.handleSubmit(e);
                      }}
                      @click=${(e: any) => {
                        this.activeItem = file;
                        this.currentContext = 'file';
                      }}
                      @drag=${(e: any) => {
                        e.preventDefault();
                        this.activeItem = file;
                      }}
                      @ondelete=${(e: any) => {
                        this.activeItem = file;
                        this.handleDeleteAction(e);
                      }}
                      .selected=${this.activeItem === file}
                    ></file-card>`
                )}
              </div>`
            : html`
          <div class="search-wrapper">
            ${
              this.files.length === 0
                ? html`<h4>No files Found</h4>`
                : html`
                    <search-content
                      .serverURL=${this.serverURL}
                      .files=${this.files}
                      .sortColumn=${this.sortColumn}
                      .sortFile=${this.getSortedFiles}
                      .isAscending=${this.isAscending}
                      .thumbsize=${this.thumbsize}
                      @ondelete=${(e: any) => {
                        this.activeItem = e.detail.file;
                        this.handleDeleteAction(e);
                      }}
                    ></search-content>
                  `
            }
          </div>
        </div>
        `}

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
        </div>
      </div>
    `;
  }
}
