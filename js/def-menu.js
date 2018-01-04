
    function DefMenu(options) {
        if (!options) return;

        this._state = 0;
        var self = this;

        this._menuClass = options.menu || ".defmenu";
        this._btnName = options.btn || false;

        this._links = options.links || false;
        this._build = options.build || false;

        this._btn = document.querySelector(this._btnName);
        this._menuContainer = document.querySelector(this.MENUCONTAINERNAME);

        if(this._build) this._createNav(this._menuClass);
        if(this._links) this._createLinks(this._links);

        $(this._btn).click(function () {
            self.run();
        });

        $(document).on('click touchstart', function (evt) {
            var target = evt.target;

            while(target != this){
                if (target == self._menuContainer){
                    self.close();
                    return;
                }
                if (target == self._btn){
                    return;
                }
                target = target.parentNode;
            }
        });
    }

    DefMenu.prototype.MENUCONTAINERNAME = "#defmenu-container";
    DefMenu.prototype._createNav = function (menuName) {
        var menu, div, ul;

        menu = document.querySelector(menuName);

        if (!menu) {
            menu = document.createElement("div");
            menu.className = "defmenu";
            document.body.appendChild(menu);
        }

        menu.classList.add("defmenu");

        div = document.createElement("div");
        div.className = "defmenu-content";

        ul = document.createElement("ul");
        ul.className = "defmenu-nav";

        div.appendChild(ul);

        menu.appendChild(div);
    };
    DefMenu.prototype._createLinks =  function (createState) {
        var parent = document.querySelector(".defmenu-nav");
        var anchorBlocks = document.querySelectorAll("*[data-defanchor]");

        switch (createState){
            case "auto":
                var anchor, text, li, a, navElems;
                for (var i = 0; i < anchorBlocks.length; i++){
                    anchor = anchorBlocks[i].getAttribute("id");
                    text = anchorBlocks[i].getAttribute("data-defanchor");
                    li = document.createElement("li");
                    a = document.createElement("a");
                    a.className = "defmenu-nav__link";
                    a.href = "#" + anchor;
                    a.innerHTML = text;
                    li.appendChild(a);
                    parent.appendChild(li);
                }
                break;
        }
    };
    DefMenu.prototype.open = function () {
        $(this._btnName).removeClass("defmenu-btn-closed");
        $(this._btnName).addClass("defmenu-btn-open");
        $("body").addClass("defmenu-open");
        this._state = 1;
    };
    DefMenu.prototype.close =  function () {
         $(this._btnName).removeClass("defmenu-btn-open");
         $(this._btnName).addClass("defmenu-btn-closed");
         $("body").removeClass("defmenu-open");
        this._state = 0;
    }
    DefMenu.prototype.run =  function () {
        if(this._state == 0){
            this.open();
        }else{
            this.close();
        }
    };