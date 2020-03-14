import React from "react";
import styles from "../../../Styles/Styles.module.scss"

class Location extends React.Component<any, any> {
    public render(){
        return (
            <div className={styles.Location_Container}>
                {this.props.city}
            </div>
        )
    }
}

export default Location;
