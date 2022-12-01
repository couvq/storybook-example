import StarRating from "../components/StarRating";

export default {
    title: "StarRating",
    component: StarRating
}

export const EditableStar = (args) => <StarRating {...args} />

EditableStar.args = {
    value: 4, 
    isReadOnly: true
}