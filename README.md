# defmenu

	   var myDefMenu = new DefMenu({
		menu : ".mydefmenu", // class\id menu
		build : true, // build menu, links must be "auto"
		btn : ".defmenu-btn", // class\id menu button
		links: "auto" // blocks with attribute "data-defanchor='LINK TEXT'"
	    });


### menu html
	<aside class="defmenu">
		<div class="defmenu-content">
			<ul class="defmenu-nav">
				<li><a class="defmenu-nav__link" href="#"></a></li>
			</ul>
		</div>
	</aside>

### menu btn
	<div class="defmenu-btn defmenu-btn-closed">
	  <span class=""></span>
	  <span class=""></span>
	  <span class=""></span>
	</div>

