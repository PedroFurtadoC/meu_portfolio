export interface TimelineContent {
	title: string;
	text: string;
	optionalText?: string;
}

//IMPORTANTE: o "title" é utilizado como key, não podem haver repetições

export const timelineContent: TimelineContent[] = [
	{
		title: "Texto 1",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit",
	},
	{
		title: "Texto 2",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit",
		optionalText:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
	},
	{
		title: "Texto 3",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit",
		optionalText:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
	},
	{
		title: "Texto 4",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit",
		optionalText:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
	},
];
