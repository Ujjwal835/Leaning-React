import styles from './ButtonsContainer.module.css'
import PropTypes from 'prop-types';
export default function ButtonsContainer({ onButtonClick }) {
    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div className={styles.buttonsContainer}>
            {buttonNames.map((buttonName, index) => (
                <button key={index} className={styles.button} onClick={() => onButtonClick(buttonName)}>
                    {buttonName}
                </button>
            ))}
        </div>
    )
}
ButtonsContainer.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
};