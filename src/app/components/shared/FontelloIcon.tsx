interface StyleProps {
	[key: string]: string;
}

interface Props {
	name:
		| "icon-mail-alt"
		| "icon-github-circled"
		| "icon-linkedin"
		| "icon-cancel"
		| "icon-calendar"
		| "icon-sun"
		| "icon-moon"
		| "icon-up-open"
		| "icon-down-open";
	classStyling?: string | undefined;
	style?: StyleProps | undefined;
}

export default function FontelloIcon({ name, classStyling, style }: Props) {
	return (
		<>
			<i className={name + " " + classStyling} style={style}></i>
		</>
	);
}
