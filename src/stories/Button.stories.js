import MuiButton from "../components/Button"

export default {
    title: "Button",
    component: MuiButton
}

export const EditableButton = (args) => <MuiButton {...args} />

EditableButton.args = {
    variant: "contained",
    label: "Press me",
    isDisabled: false
}