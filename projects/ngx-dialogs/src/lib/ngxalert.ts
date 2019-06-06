export class Ngxalert {

    constructor() {
        // console.log('ngx-alert it is');
    }
    setStyle(styleText) {
        var css = styleText,
            head = document.head || document.getElementsByTagName('head')[0],
            style: any = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    removeAlert(id) {
        if (document.getElementById(id)) {
            document.body.removeChild(document.getElementById(id));
            // document.getElementById(id).classList.add('ngx-dialog-hidden');
        }
    }
    createButtonsList(buttons, dialogContentId) {
        var btnTemplate = '';
        if (buttons.length > 0) {
            let footerContent = document.createElement('div');
            footerContent.classList.add('ngx-dialog-footer');
            document.getElementById(dialogContentId).getElementsByClassName('ngx-dialog-content').item(0).appendChild(footerContent);
            buttons.forEach(element => {
                let btn = document.createElement('button');
                btn.classList.add('ngx-dialog-btn');
                if (element.class) {
                    btn.classList.add(element.class);
                }
                if (element.event) {
                    btn.onclick = element.event;
                }
                btn.innerText = element.title;
                footerContent.appendChild(btn);

                // btnTemplate += `<button class="ngx-dialog-btn ` + ((element.class) ? element.class : '') + `">` + element.title + `</button>`;
            });
            return btnTemplate;
        }
    }
    create(config) {

        var id = "ngxdialog-" + document.getElementsByClassName('ngx-dialog').length
        if (config.id) {
            id = config.id;
        }
        let dialogDiv = document.createElement('div');
        dialogDiv.classList.add('ngx-dialog');
        if (config.customCssClass) {
            dialogDiv.classList.add(config.customCssClass);
        }
        let dialogClass = 'd-s';
        if(config.type) {
            
            switch(config.type) {
                case "M":
                    dialogClass = 'd-m';
                    break;
                case "L":
                    dialogClass = 'd-l';
                    break;
                case "XL":
                    dialogClass = 'd-xl';
                    break;
                default :
                    dialogClass = 'd-s';
                    break;
            }
        }
        dialogDiv.classList.add(dialogClass);

        dialogDiv.setAttribute('id', id);

        let overlay = document.createElement('div');
        overlay.classList.add('ngx-dialog-overlay');
        dialogDiv.appendChild(overlay);

        let dialogContentDiv = document.createElement('div');
        dialogContentDiv.classList.add('ngx-dialog-content');
        dialogDiv.appendChild(dialogContentDiv);

        let headerDiv = document.createElement('div');
        headerDiv.classList.add('ngx-dialog-header');
        if (config.title) {
            let titleH4 = document.createElement('h4');
            titleH4.innerText = config.title;
            headerDiv.appendChild(titleH4);
        }
        if (config.static) {
            let crossBtn = document.createElement('span');
            crossBtn.classList.add('close-dialog')
            crossBtn.innerHTML = '&#10005;';
            let _this = this;
            crossBtn.addEventListener('click', function () {
                _this.removeAlert(id);
            })
            headerDiv.appendChild(crossBtn);
        }
        dialogContentDiv.appendChild(headerDiv);

        let messageBodyDiv = document.createElement('div');
        messageBodyDiv.classList.add('ngx-dialog-body');
        if (config.message) {
            messageBodyDiv.innerText = config.message;
        }
        dialogContentDiv.appendChild(messageBodyDiv);

        document.body.appendChild(dialogDiv);
        var buttons = [];
        if (config.confirm || config.buttons) {

            if (config.confirm) {
                buttons = [
                    {
                        title: 'Yes',
                        class: 'ngx-dialog-btn-true',
                        event: config.confirm
                    },
                    {
                        title: 'Cancel',
                        class: 'ngx-dialog-btn-cancel',
                        event: () => {
                            this.removeAlert(id);
                        }
                    }
                ]
            } else if (config.buttons) {
                buttons = config.buttons;
            }
            this.createButtonsList(buttons, id);
        }
        if (!config.static) {
            let _this = this;

            document.getElementById(id).getElementsByClassName('ngx-dialog-overlay').item(0).addEventListener('click', function (e) {
                _this.removeAlert(id);
            })
        }
        this.setStyle(`
        
        .ngx-dialog {position: absolute;width: 100%;height: 100%;top: 0;left: 0;z-index: 99;}
        .ngx-dialog-content {position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);background: #FFF;border-radius: 5px;min-height: 100px;z-index:99;padding:10px;}
        .ngx-dialog.d-s .ngx-dialog-content{width: 300px; }
        .ngx-dialog.d-m .ngx-dialog-content{width: 50%; }
        .ngx-dialog.d-l .ngx-dialog-content{width: 70%; }
        .ngx-dialog.d-xl .ngx-dialog-content{ width:90%;}
        .ngx-dialog-header {padding: 0px 10px;border-bottom: 1px solid #CCC;margin: 0 10px;}
        .ngx-dialog-header h4 {padding: 0;margin: 5px;line-height: 26px;color: #585858;}
        .ngx-dialog-header span.close-dialog {position: absolute;top: 10px;right: 10px;color: #CCC;cursor: pointer;}
        .ngx-dialog-body {padding: 20px 0 10px 0;text-align: center;}
        .ngx-dialog-overlay {background: rgba(0,0,0,0.5);position: absolute;top: 0;left: 0;width: 100%;height: 100%;}
        .ngx-dialog-footer {padding: 10px;margin: 0 10px;text-align: right;}
        button.ngx-dialog-btn {background: #d2d2d2;border: none;padding: 5px;margin: 0 2px;border-radius: 3px;min-width: 42px;display: inline-block;outline: none;}
        button.ngx-dialog-btn.ngx-dialog-btn-true {background: #4d84d0;color: #FFF;}
        `);
        return true;
    }
}
