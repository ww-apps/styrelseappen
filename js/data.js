var lipsum = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat dapibus tortor ac aliquam. Quisque convallis odio at massa vestibulum laoreet. Praesent eu velit malesuada, pretium velit id, viverra velit. Suspendisse potenti. Fusce ultricies enim ullamcorper, consequat ligula sit amet, gravida magna. Phasellus neque tortor, suscipit quis lacinia quis, interdum id lorem. Suspendisse potenti. Cras pretium placerat laoreet.",
"Morbi eu mi at orci adipiscing posuere. In facilisis at lacus ut convallis. Vestibulum venenatis suscipit sem eu ullamcorper. Etiam in ipsum in mauris rhoncus egestas. Suspendisse in felis ac ante volutpat dapibus. Phasellus risus diam, sollicitudin in sem eu, adipiscing molestie ante. Sed feugiat euismod dui, id porttitor nibh cursus et. Donec nec accumsan eros, non tempus erat. Donec consectetur volutpat ultricies. Maecenas vel orci vitae urna aliquam rhoncus. Aliquam eget dui dui.",
"Mauris velit lacus, porta ac egestas nec, dignissim vitae nulla. Fusce placerat consectetur dolor, feugiat lobortis elit. Nunc suscipit dolor dui, eu mollis risus sollicitudin in. Fusce convallis magna ac purus sodales accumsan. Donec ornare luctus metus, vel tincidunt nunc facilisis at. Donec luctus dui eget ligula consectetur, eget cursus nisl cursus. Nunc ut vestibulum est. Aliquam erat magna, blandit ut risus et, egestas aliquam sem. Maecenas tincidunt a lectus id tincidunt. Curabitur molestie sapien dolor, quis eleifend augue tempor at. Phasellus at erat vulputate, scelerisque nisl ac, ornare eros.",
"Nulla facilisi. Duis ipsum mauris, vehicula et lacus sed, sollicitudin vehicula lectus. Vivamus id ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam accumsan mattis rutrum. Morbi purus lectus, ornare non laoreet at, molestie non mi. Vivamus sodales sollicitudin lorem ut consectetur. Aenean urna massa, sollicitudin a faucibus nec, varius ac urna. Proin in lacus congue tortor sodales mattis. In purus leo, cursus vel purus in, fermentum elementum urna. Phasellus congue nisi nunc, at ornare leo malesuada vitae.",
"Aenean fermentum libero nunc, quis fermentum sapien tempor eu. Vivamus luctus varius augue, quis pharetra libero scelerisque quis. Aenean hendrerit dolor ullamcorper dapibus sodales. Vivamus quis est lorem. Ut elementum nulla arcu, at congue nisl congue sit amet. Curabitur aliquam eget turpis eu bibendum. Phasellus sagittis vehicula risus."].join("\n");

packages = [
	{
		id: "large",
		title: "Förvaltningstjänster Large",
		excerpt: "För föreningar som arbetar långsiktigt och har hög ambitionsnivå med styrelsearbetet. Innehåller bland annat 5-årsprognos, fastighetsdrift och trädgårdsskötsel.",
		text: '<p>För föreningar som arbetar långsiktigt och har höga ambitioner med styrelsearbetet.</p>\
<h3 class="text-align-left">EKONOMI OCH ADMINISTRATION</h3>\
<ul>\
<li>Styrelsenätet</li>\
<li>Bokföring</li>\
<li>Bokslut</li>\
<li>Budget</li>\
<li>Skattehantering</li>\
<li>Hyror/avgifter</li>\
<li>Panter/överlåtelser</li>\
<li>Inkasso</li>\
<li>Löne- och arvodeshantering</li>\
<li>Webbfaktura</li>\
<li>Underhållsplan</li>\
<li>Kontering</li>\
<li>Uthyrning av p-platser</li>\
<li>Nyckelhantering</li>\
<li>Digitalt styrelserum</li>\
<li>HSBwebb(brf-hemsidaför HSB-medlemsföreningar)</li>\
</ul>\
<h3 class="text-align-left">FÖRVALTARTJÄNST</h3>\
<ul>\
<li>Hjälper till att förbereda och verkställa styrelsens beslut</li>\
</ul>\
<h3 class="text-align-left">TEKNIK</h3>\
<ul>\
<li>Felanmälan/jour</li>\
<li>Tillsynsrond</li>\
<li>Fastighetsskötsel</li>\
<li>Lokalvård</li>\
<li>Snöjour</li>\
<li>Fastighetsdrift</li>\
<li>Trädgårdsskötsel</li>\
</ul>'
	},
	{
		id: "medium",
		title: "Förvaltningstjänster Medium",
		excerpt: "För föreningar där medlemmarna har hög kompetens, men saknar tid för arbete. Innehåller bland annat underhållsplan, fastighetsskötsel och snöjour.",
		text: '<p>För föreningar där medlemmarna har hög kompetens, men saknar tid för styrelsearbetet.</p>\
<h3 class="text-align-left">EKONOMI OCH ADMINISTRATION</h3>\
<ul>\
<li>Styrelsenätet</li>\
<li>Bokföring</li>\
<li>Bokslut</li>\
<li>Budget</li>\
<li>Skattehantering</li>\
<li>Hyror/avgifter</li>\
<li>Panter/överlåtelser</li>\
<li>Inkasso</li>\
<li>Löne- och arvodeshantering</li>\
<li>Webbfaktura</li>\
<li>Underhållsplan</li>\
<li>Kontering</li>\
<li>Uthyrning av p-platser</li>\
<li>Nyckelhantering</li>\
</ul>\
<h3 class="text-align-left">TEKNIK</h3>\
<ul>\
<li>Felanmälan/jour</li>\
<li>Tillsynsrond</li>\
<li>Fastighetsskötsel</li>\
<li>Lokalvård</li>\
<li>Snöjour</li>\
</ul>'
	},
	{
		id: "small",
		title: "Förvaltningstjänster Small",
		excerpt: "För föreningar som vill göra mycket själva, men som ibland kan tänka sig att köpa tjänster på timpenning. Innehåller bland annat bokföring, hyror/överlåtelser och felanmälan/jour.",
		text: '<p>För föreningar som vill göra mycket själva, men som ibland kan tänka sig att köpa tjänster på timpenning.</p>\
<h3 class="text-align-left">EKONOMI OCH ADMINISTRATION</h3>\
<ul>\
<li>Styrelsenätet</li>\
<li>Bokföring</li>\
<li>Bokslut</li>\
<li>Budget</li>\
<li>Skattehantering</li>\
<li>Hyror/avgifter</li>\
<li>Panter/överlåtelser</li>\
<li>Inkasso</li>\
<li>Löne- och arvodeshantering</li>\
<li>Webbfaktura</li>\
</ul>\
<h3 class="text-align-left">TEKNIK</h3>\
<ul>\
<li>Felanmälan/jour</li>\
<li>Tillsynsrond</li></ul>'
	},
	{
		id: "plus",
		title: "Förvaltningstjänster Plus",
		excerpt: "HSBs plustjänster är tillval som gör att föreningen kan skräddarsy sin förvaltning. Några exempel: NABO, ombyggnadstjänster, utbildning, låneupphandling och markanläggning.",
		text: '<p>Pluspaketet kompletterar de andra paketen och hjälper dig att skräddarsy din förvaltning. Plustjänsterna kan även köpas enskilt.</p>\
<h3 class="text-align-left">PLUSTJÄNSTER</h3>\
<ul>\
<li>NABO</li>\
<li>Förvaltartjänst</li>\
<li>Juridiska tjänster</li>\
<li>Utbildning och konferens</li>\
<li>Tjänstervidombyggnad</li>\
<li>Klimat- och energitjänster</li>\
<li>Mark och trädgård</li>\
<li>Besiktningar</li>\
<li>El och VVS</li>\
</ul>'
	}
];
var portraits = [
	'portrait-m1', 'portrait-m2', 'portrait-m3', 'portrait-m4',
	'portrait-f1', 'portrait-f2', 'portrait-f3', 'portrait-f4'
]
