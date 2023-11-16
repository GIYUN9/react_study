import React from 'react';

const styles = {
    wrapper:{
        margin: 8,
        padding : 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer:{
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    text:{
        color:"black",
        fontSize: 16,
        textAlign: "left",
    }
}


const Comment = (props) => {
    return (
        <div style={styles.wrapper}>
            <div>
                <img src="data:image/png;base64,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"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={{
                    ...styles.text,
                    fontWeight: "bold",
                    }}>{props.name}</span>
                <span style={styles.text}>{props.comment}</span>
            </div>
        </div>
    );
};

export default Comment;