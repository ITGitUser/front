import React from 'react'
import styles from './Field.module.scss'

const Field = ( {placeholder, value, onChange, type ='text', typeInput, required, isFocused=false}) => {
    return (
        <div className={styles.wrapperInput}>
            {(typeInput!=='textarea')?<input 
      			placeholder={placeholder}
                  type={type}
                  value={value}
                  onChange={onChange}
                  className={styles.input}
                  required={required}
                  autoFocus={isFocused}
                  />:<textarea 
      			placeholder={placeholder}
                  type={type}
                  value={value}
                  onChange={onChange}
                  className={styles.input}
                  required={required}
                  autoFocus={isFocused}
                  />}
        </div>
    );
}

export default Field;