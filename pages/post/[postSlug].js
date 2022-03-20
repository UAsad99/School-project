import data from "data";
import Link from "next/link";
import { PostCard, CommentsForm, Comments } from "components";

export default function Post() {
	const { title, text, date, image } = data.fakePost;

	return (
		<div className="container mx-auto">
			<Link href="/blog">
				<a className="group flex justify-center mt-8 text-lg"> 
					<span className="group-hover:w-8 w-6 customTransition">&#8592;</span>
					Go Back
				</a>
			</Link>
			<div className="mt-8">
				<PostCard  />
				<div className="mt-10 flex flex-col lg:flex-row space-y-8 lg:space-y-0">
					<div className="w-[90%] mx-auto lg:w-[55%]">
						<CommentsForm />
					</div>
					<div className="w-[90%] mx-auto lg:w-[35%]">
						<Comments />
					</div>
				</div>
			</div>
		</div>
	);
}