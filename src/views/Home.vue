<template>
	<div class="home">
		<BlogPost :post="welcomeScreen" />
		<BlogPost
			:post="post"
			v-for="(post, index) in sampleBlogPost"
			:key="index"
		/>
		<div class="blog-card-wrap">
			<div class="container">
				<h3>View More Recent Blogs</h3>
				<div class="blog-cards">
					<BlogCard
						:post="post"
						v-for="(post, index) in sampleBlogCards"
						:key="index"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard.vue';

export default {
	name: 'Home',
	components: { BlogPost, BlogCard },
	data() {
		return {
			welcomeScreen: {
				title: 'Welcome!',
				blogPost:
					'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
				welcomeScreen: true,
				photo: 'coding'
			},
			sampleBlogPost: [
				{
					title: 'This is a Filler Title!',
					blogHTML: 'This is a filler blog post title!',
					blogCoverPhoto: 'beautiful-stories'
				},
				{
					title: 'This is a Filler Title 2!',
					blogHTML: 'This is a filler blog post title!',
					blogCoverPhoto: 'designed-for-everyone'
				}
			],
			sampleBlogCards: [
				{
					blogTitle: 'Blog Card #1',
					blogCoverPhoto: 'stock-1',
					blogDate: 'Sep 1, 2021'
				},
				{
					blogTitle: 'Blog Card #2',
					blogCoverPhoto: 'stock-2',
					blogDate: 'Sep 1, 2021'
				},
				{
					blogTitle: 'Blog Card #3',
					blogCoverPhoto: 'stock-3',
					blogDate: 'Sep 1, 2021'
				},
				{
					blogTitle: 'Blog Card #4',
					blogCoverPhoto: 'stock-4',
					blogDate: 'Sep 1, 2021'
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
	h3 {
		font-weight: 300;
		font-size: 28px;
		margin-bottom: 32px;
	}
}
</style>
