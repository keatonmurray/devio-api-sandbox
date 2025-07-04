import { Form } from "react-bootstrap";

const ThemeToggle = ({ isChecked, onToggle }) => {
  return (
    <Form.Check
        type="switch"
        id="custom-switch"
        label="Dark Mode"
        checked={isChecked}
        onChange={onToggle}
        className="ms-3 switch-large"
    />
  )
}

export default ThemeToggle
