import styles from "./Display.module.css";
import PropTypes from 'prop-types';
const Display = ({ displayValue }) => {
    return (
        <input
            className={styles.display}
            type="text"
            value={displayValue}
            readOnly
        />
    );
};
Display.propTypes = {
    displayValue: PropTypes.string.isRequired,
};

export default Display;
