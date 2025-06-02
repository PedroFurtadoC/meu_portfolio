export interface Solution {
	image: string;
	imageAlt: string;
	title: string;
	text: string;
	optionalText?: string;
}

//IMPORTANTE: o "title" é utilizado como key, não podem haver repetições

export const solutionsContent: Solution[] = [
	{
		image: require("../assets/image.png"),
		imageAlt: "placeholder",
		title: "Placeholder",
		text: "Aliquam mattis neque felis, at tincidunt mi ultrices lobortis. Proin convallis libero nec massa mattis congue. Vivamus quis luctus nunc. Vestibulum auctor lacus ac egestas pulvinar. Mauris mattis tempus dui in molestie. Donec ut ex viverra, fringilla enim sit amet",
		optionalText:
			"Aliquam mattis neque felis, at tincidunt mi ultrices lobortis.",
	},
	{
		image: require("../assets/image.png"),
		imageAlt: "placeholder",
		title: "Placeholder 2",
		text: "aaaAliquam mattis neque felis, at tincidunt mi ultrices lobortis. Proin convallis libero nec massa mattis congue. Vivamus quis luctus nunc. Vestibulum auctor lacus ac egestas pulvinar. Mauris mattis tempus dui in molestie. Donec ut ex viverra, fringilla enim sit amet",
		optionalText:
			"Aliquam mattis neque felis, at tincidunt mi ultrices lobortis.",
	},
	{
		image: require("../assets/image.png"),
		imageAlt: "placeholder",
		title: "Placeholder 3",
		text: "liquam mattis neque felis, at tincidunt mi ultrices lobortis. Proin convallis libero nec massa mattis congue. Vivamus quis luctus nunc. Vestibulum auctor lacus ac egestas pulvinar. Mauris mattis tempus dui in molestie. Donec ut ex viverra, fringilla enim sit amet",
		optionalText:
			"Aliquam mattis neque felis, at tincidunt mi ultrices lobortis.",
	},
];
