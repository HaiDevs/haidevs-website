import React from "react";
import { Tag, HStack } from "@chakra-ui/react";
import { ITags } from "interfaces/Tags";

const PostTags = (props: ITags) => {
	return (
		<HStack spacing="2px" as="div">
			{props.tags.map((tag: any, i: any) => (
				<React.Fragment key={i}>
					<Tag
						size={"sm"}
						variant="solid"
						colorScheme={tag === "javascript" ? "orange" : "cyan"}
					>
						{tag}
					</Tag>
				</React.Fragment>
			))}
		</HStack>
	);
};

export default PostTags;
