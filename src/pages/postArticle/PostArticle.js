import React from "react";
import PostArticleContent from "../../parts/PostArticleContent/PostArticleContent";
import Sidebar from "../../parts/sidebar/Sidebar";

function PostArticle() {
	return (
		<div>
			<Sidebar titles="Post Artikel" content={<PostArticleContent />} />
			</div>
	);
}

export default PostArticle;
