# defmenu

	   var myDefMenu = new DefMenu({
		menu : ".mydefmenu", // class\id menu
		build : true, // build menu
		btn : ".DefmenuBtn", // class\id menu button
		links: "auto" // blocks with attribute "data-defanchor='LINK TEXT'"
	    });


### menu html
	<aside class="Defmenu">
		<div class="DefmenuContent">
			<ul class="DefmenuNav">
				<li><a class="DefmenuNav-Link" href="#"></a></li>
			</ul>
		</div>
	</aside>

### menu btn
	<div class="DefmenuBtn DefmenuBtn_closed">
                <span class="DefmenuBtn-Line"></span>
                <span class="DefmenuBtn-Line"></span>
                <span class="DefmenuBtn-Line"></span>
	</div>

### container for all content
	<div id="DefmenuContainer">
	
	</div>
