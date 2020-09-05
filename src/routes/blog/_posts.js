// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is DAWG?',
		slug: 'what-is-DAWG',
		html: `
		volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat
		`
	},

	{
		title: 'How to use crates',
		slug: 'how-to-use-crates',
		html: `
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Integer enim neque volutpat ac tincidunt vitae semper. Est placerat in egestas erat imperdiet sed euismod nisi porta. Dignissim enim sit amet venenatis urna cursus eget nunc. Arcu ac tortor dignissim convallis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Risus in hendrerit gravida rutrum quisque non tellus. Tincidunt lobortis feugiat vivamus at augue eget. Lectus quam id leo in vitae. Odio eu feugiat pretium nibh ipsum consequat nisl. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Sit amet consectetur adipiscing elit ut aliquam purus. Volutpat lacus laoreet non curabitur. Mi proin sed libero enim. Lacus sed viverra tellus in hac habitasse platea. Ut tristique et egestas quis ipsum. Varius quam quisque id diam vel quam. Nec dui nunc mattis enim ut tellus.

Sed vulputate odio ut enim blandit. Ut venenatis tellus in metus. Et netus et malesuada fames. Pretium lectus quam id leo in vitae turpis massa sed. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Pretium viverra suspendisse potenti nullam ac. Etiam dignissim diam quis enim lobortis scelerisque. Ullamcorper malesuada proin libero nunc. Blandit massa enim nec dui. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Orci sagittis eu volutpat odio facilisis mauris sit. Auctor eu augue ut lectus. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Sit amet volutpat consequat mauris nunc congue. Diam quis enim lobortis scelerisque. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Diam quis enim lobortis scelerisque fermentum. Fermentum dui faucibus in ornare quam.

Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Porta non pulvinar neque laoreet. Integer enim neque volutpat ac tincidunt vitae semper. Pharetra convallis posuere morbi leo. Vel orci porta non pulvinar neque laoreet suspendisse. Ultricies leo integer malesuada nunc. Ipsum dolor sit amet consectetur adipiscing elit duis. Enim facilisis gravida neque convallis a cras. In ornare quam viverra orci. Libero enim sed faucibus turpis in eu mi. Quis vel eros donec ac odio tempor orci. Mi proin sed libero enim sed. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Feugiat vivamus at augue eget arcu dictum varius duis.

Aliquam eleifend mi in nulla posuere sollicitudin. Sit amet mattis vulputate enim nulla. Ultrices sagittis orci a scelerisque purus. Erat nam at lectus urna duis. Placerat in egestas erat imperdiet sed euismod nisi porta. Viverra mauris in aliquam sem fringilla ut morbi. Et tortor at risus viverra adipiscing. Augue neque gravida in fermentum et sollicitudin ac. Consectetur a erat nam at lectus. Elementum sagittis vitae et leo duis ut diam quam nulla. At quis risus sed vulputate odio ut enim. Nam at lectus urna duis convallis convallis tellus. Suspendisse potenti nullam ac tortor vitae purus faucibus. Et sollicitudin ac orci phasellus egestas tellus. Rutrum quisque non tellus orci. Quis commodo odio aenean sed adipiscing. Nibh mauris cursus mattis molestie a iaculis at erat. Suspendisse sed nisi lacus sed. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Porttitor rhoncus dolor purus non.

Aliquet nec ullamcorper sit amet. Ullamcorper morbi tincidunt ornare massa. Proin nibh nisl condimentum id venenatis a condimentum. Nec ullamcorper sit amet risus. Viverra nibh cras pulvinar mattis. Egestas dui id ornare arcu. Phasellus egestas tellus rutrum tellus pellentesque eu. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Sit amet cursus sit amet. Aliquam purus sit amet luctus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Libero volutpat sed cras ornare. Sit amet risus nullam eget felis eget. Mattis vulputate enim nulla aliquet porttitor.
			</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;

