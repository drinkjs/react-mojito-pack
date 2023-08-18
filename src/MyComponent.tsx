import { CreatePack } from "@drinkjs/mojito-react-pack";
import React from "react";

const MyComponent: React.FC<{ data: string }> = ({ data }) => {
	return <div>{data}</div>;
};

export default CreatePack(MyComponent, {
	name: "我的组件",
	props: {
		data: {
			name: "数据",
			type: "string",
			default: "React x Mojito",
		},
	},
});
