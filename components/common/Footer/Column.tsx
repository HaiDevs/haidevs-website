import { ReactNode, Fragment } from "react";
import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IColumnProps } from "types/types";

const ListHeader = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontWeight={"bold"} fontSize={"lg"} mb={2}>
			{children}
		</Text>
	);
};

export default function Column(props: IColumnProps) {
	return (
		<Stack align={"flex-start"}>
			<ListHeader>{props.header}</ListHeader>
			{props.list.map((list, idx) => (
				<Fragment key={idx}>
					<Link href={`#${list.toLowerCase()}`}>{list}</Link>
				</Fragment>
			))}
		</Stack>
	);
}
