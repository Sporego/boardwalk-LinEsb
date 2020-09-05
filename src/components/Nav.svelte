<script>
	export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
	<a class="navbar-brand" href="#">Navbar</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>
  
	<div class="collapse navbar-collapse" id="navbarColor01">
	  <ul class="navbar-nav mr-auto">
		<li class="nav-item active">
		  <a 
		  aria-current="{segment === undefined ? 'page' : undefined}" class="nav-link" href=".">Home</a>
		</li>
		<li class="nav-item">
		  <a 
		  aria-current="{segment === 'about' ? 'page' : undefined}" class="nav-link" href="about">About</a>
		</li>
		<li class="nav-item">
		  <a 
		  rel=prefetch
		  aria-current="{segment === 'blog' ? 'page' : undefined}"class="nav-link" href="blog">Blog</a>
		</li>
	  </ul>
	  <form class="form-inline my-2 my-lg-0">
		<input class="form-control mr-sm-2" type="text" placeholder="Search">
		<button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
	  </form>
	</div>
  </nav>
