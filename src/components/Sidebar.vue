<template>
	<div class="sidebar-component">
		<div class="sidebar">
			<a href="#"><img src="https://q-software.com/wp-content/uploads/2017/10/logo-white1.png" style="width: 200px; margin-bottom: 40px; margin-left: -80px; margin-top: -20px"/></a>
			<ul class="project-list">
				<li class="single-project-item">
					<a href="#">3A Company website</a>
				</li>
				<li class="single-project-item">
					<a href="#">Zizoo User Dashboard</a>
				</li>
				<li class="single-project-item">
					<a href="#">Autokino v2</a>
				</li>
			</ul>
		</div>
		<div class="update-project">
			<ul class="update-project-items">
				<li><a href="#">+</a></li>
				<li><a href="#">-</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
      name: 'Sidebar',
      // Insert array for storage
      data() {
        return {
        }
      }
  }
</script>

<style scoped>
/* Transfer to SASS*/
    h1, h2 {
      font-weight: normal;
    }

    .sidebar {
    	height: 100%;
    	position: absolute;
    	left: 0;
    	width: 300px;
    	margin-top: 30px;
    }

    .project-list {
    	list-style-type: none;
    	padding: 0;
    }

    .single-project-item a a:hover, a:visited, a:link, a:active{
	   	display:inline-block;
	    width:100%;
	    height:50px;
	    color: #000;
	    text-decoration: none;
    }

    .single-project-item a:hover {
    	color: #03FF34;
    }

    .update-project-items {
    	position: absolute;
    	display: flex;
    	left: 0;
    	bottom: 0;
    	list-style-type: none;
    	font-size: 40px;
    }

    .update-project-items li a:hover {
    	color: #03FF34;
    }

    .update-project-items li {
    	margin-right: 20px;
    }

</style>